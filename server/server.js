const express = require("express");
const bcrypt = require("bcrypt")
const cors = require("cors")
const { randomUUID: uuid } = require("crypto");
const { open } = require("sqlite")
const sqlite3 = require("sqlite3")
const dbName = "user.db";
const path = require("path")
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

app.get("/all-users/", async (req, res) => {
    const query = `
    select * from user_details limit 10;
    `;
    const selection = await db.all(query);
    res.send(selection)
})

app.post("/add-user/", async (req, res) => {
    console.log(req.body)
    let response =null
    try {
        const { username, password } = req.body;
        const hashedPassword = async (password) => {
            return await bcrypt.hash(password, 10);
        };
        const id = uuid()
        const query = `
    insert into user_details (id,username,password) values(
    '${id}','${username}','${await hashedPassword(password)}'
    );
    `
        const addUser = await db.run(query)
        response="User Added Successfully"
    }
    catch (e){
        if(e.code==="SQLITE_CONSTRAINT"){
            response="User Already Exist"
        }
    }
    res.json({response:response})
})

initializeDBServer();

