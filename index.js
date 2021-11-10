const express = require("express")
const mysql = require("mysql")
const app = express()

//CREATE CONNECTION
const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"todo"

})


//connect LISTEN DATABASE REQUEST QUERY
db.connect((err,resp)=>{
   if (err) throw err
   else console.log("MySql is Running...");
}
)

//INSERT NEW TODO ROW
app.get("/todo-insert",(req,resp)=>{

   //NEW TASK
   let newTask = {title: 'first task', status:"INPROGRESS"}
   // COMMUNIQUER AVEC DB
   let sql = ` INSERT INTO TODOS SET ?`

   db.query(sql,newTask, (err,resQuery)=>{
      if (err) throw err 
      else {
         console.log(resQuery)
         resp.send("Todo Created ...");
      }
   })



}
)

app.listen( '9000', ()=>{
   console.log('serveur is running on Port 9000');
})