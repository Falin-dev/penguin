const express = require("express");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cors = require("cors")
const { randomUUID: uuid } = require("crypto");
const { open } = require("sqlite")
const sqlite3 = require("sqlite3")
const dbName = "user.db";
const path = require("path");
const { stat } = require("fs");
let db = null;
const filePath = path.join(__dirname, dbName)
const port = 3000;
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow cookies/headers if needed
}));
app.use(express.json());
const initializeDBServer = async () => {
    try {
        db = await open(
            {
                filename: filePath,
                driver: sqlite3.Database
            }
        )
        app.listen(port, () => {
            console.log(`DB connected, Server running on http://localhost:${port}`)
        });
    }
    catch (e) {
        console.log("DB Error:", e.message);
        process.exit(1);
    }
}



//Create User API http://localhost:3000/add-user/
app.post("/add-user/", async (req, res) => {
    console.log(req.body)
    let response = null
    try {
        const { username, password } = req.body;
        if (!username || username.trim() === "") {
            throw new Error("EMPTY_USERNAME");
        }
        const hashedPassword = async (password) => {
            if (password.length < 8) {
                throw new Error("MINIMUM_LENGTH_ERROR");
            }
            else if (!/[!@#$%^&*()]/.test(password)) {
                throw new Error("REQUIRED_SPECIAL_CHARACTER");
            }
            return await bcrypt.hash(password, 10);
        };
        const id = uuid()
        const query = `
        insert into user_details (id,username,password) values(
        '${id}','${username}','${await hashedPassword(password)}'
        );
        `;
        const addUser = await db.run(query)
        response = "User Added Successfully"
    }
    catch (e) {
        if (e.code === "SQLITE_CONSTRAINT") {
            response = "User Already Exist"
        }
        if (e.message === "EMPTY_USERNAME") {
            response = "Username cannot be empty"
        }
        if (e.message === "MINIMUM_LENGTH_ERROR") {
            response = "The password must be atleast 8 characters long"
        }
        if (e.message === "REQUIRED_SPECIAL_CHARACTER") {
            response = "Password must contain special character"
        }
    }
    res.status(200)
    res.json({ response: response })
})


//Login User API http://localhost:3000/login/
app.post("/login/", async (req, res) => {
    let response = null
    let jwtToken = null
    const { username, password } = req.body;
    console.log("username:", req.body)
    try {

        const isUserExist = `
        SELECT  username FROM user_details WHERE username = '${username}';
        `;

        const runIsUserExist = await db.get(isUserExist);
        console.log(runIsUserExist)
        if (!runIsUserExist) {
            throw new Error("USERNAME_NOT_AVAILABLE")
        }
        const originalPasswordQuery = `
        SELECT password FROM user_details WHERE username = '${username}'`
        const originalPassword = await db.get(originalPasswordQuery);
        const samePassword = await bcrypt.compare(password, originalPassword.password)
        //Everything Succeeds
        if (samePassword) {
            const payload = { username: username }
            jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN")

            response = "Login Successfull"

        }
        //Invalid password
        else {
            throw new Error("INVALID_PASSWORD")
        }
    }
    catch (e) {
        console.log(e.message)
        if (e.message === "USERNAME_NOT_AVAILABLE") {
            response = "Username does not exist"
        }
        if (e.message === "INVALID_PASSWORD") {
            response = "Password doesn't match"
        }
    }
    return res.json({ response: response, jwtToken: jwtToken })
})

const authenticator = (req, res, next) => {
    let jwtToken;
    let status;

    try {
        const authHeader = req.headers["authorization"];
        if (authHeader == undefined) {
            status = 401
            throw new Error("MISSING_AUTHORIZATION_TOKEN");
        }
        else {
            jwtToken = authHeader.split(" ")[1];
        }
        if(jwtToken == undefined){
            throw new Error("MISSING_JWT_TOKEN")
        }
        else{
            jwt.verify(jwtToken,"MY_SECRET_TOKEN", (error,payload)=>{
                if(error){
                    res.status(401).json({response: "NON_BELONGING_JWT_TOKEN"})
                }
                else{
                    status = 201
                    next()
                }
            })
        }
    }
    catch (e) {
        return res.status(401).json({response: e.message})
    }
}


//All Users Fetch http://localhost:3000/all-users/
app.get("/all-users/",authenticator, async (req, res) => {
    const query = `
    select * from user_details limit 10;
    `;
    const allUsers = await db.all(query);
    console.log(allUsers)
    res.status(200).json({ data: allUsers })
})

//Delete User API http://localhost:3000/delete/2
app.delete("/delete-user/:id", async (req, res) => {
    const { id } = req.params
    console.log("Entered")
    try {
        const query = `
        DELETE FROM user_details WHERE id='${id}';
        `
        const deleteUser = await db.run(query)
        res.status(200)
        console.log("tried")
        res.json({ response: "Deleted Successfully" })
    }
    catch (e) {
        res.status(404)
        res.json({ response: "USER_NOT_FOUND" })
    }
})





initializeDBServer();

