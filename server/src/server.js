import "dotenv/config";
import app from "./app.js"
import {PORT} from "./config/env.js"

app.listen(PORT, ()=>{
    console.log(`DB connected, Server running on http://localhost:${PORT}`)
})