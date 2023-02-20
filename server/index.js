const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mysql=require('mysql2');
const cors=require('cors');


const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"crud-stu"
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM student_list";
    db.query(sqlGet,(error,result)=>{
        // res.send(error);
        res.send(result);
    })
})

app.post("/api/post",(req,res)=>{
    const {firstname,lastname,location,email,dob,education}=req.body;
    const sqlInsert="INSERT INTO student_list (firstname,lastname,location,email,dob,education) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert,[firstname,lastname,location,email,dob,education],(error,result)=>{
        if(error){
            console.log(error);
        }
        
    })
})


app.delete("/api/remove/:id",(req,res)=>{
    const {id}=req.params;
    const sqlRemove="DELETE FROM student_list WHERE id=?";
    db.query(sqlRemove,id,(error,result)=>{
        if(error){
            console.log(error);
        }
    });
});


app.get("/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="SELECT * FROM student_list WHERE id=?";
    db.query(sqlGet,id,(error,result)=>{
       if(error){
        console.log(error);
       }
       res.send(result);
    });
});


app.put("/api/update/:id",(req,res)=>{
    const {id}=req.params;
    const{firstname,lastname,location,email,dob,education}=req.body;
    const sqlUpdate="UPDATE student_list SET firstname=? , lastname=? ,location=?,email=?,dob=?,education=? WHERE id=?";
    db.query(sqlUpdate,[firstname,lastname,location,email,dob,education,id],(error,result)=>{
       if(error){
        console.log(error);
       }
       res.send(result);
    });
});

app.get('/',(req,res)=> {
    // const sqlInsert="INSERT INTO student_list (firstname,lastname,location,email,dob,education) VALUES ('virat','kholi','Dehli','viratkholi@gmail.com','12-5-1998','Bsc-computer science')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);

    //     res.send("express run")
    // });
  
});


app.listen(5000,()=>{
   console.log("server is runing onn port 5000");
});


