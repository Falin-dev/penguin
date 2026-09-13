import {Pool} from "pg";
import {DATABASE_URL } from "./env.js";

const pool = new Pool({
    connectionString : DATABASE_URL
});
try{

    console.log("Connection Successfull")
}
catch(e){
    console.log("Error at Connection Pool: ",e.message);
    process.exit(1);
}
export default pool;