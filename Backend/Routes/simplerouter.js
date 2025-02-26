
const database=require('../dbconnect/databaseconnect');
const dbclass=require('../model/simpleformodel');
const cloudinary=require('cloudinary');
const fs = require('fs');
const supabase = require('../firstserver');
const { error, Console } = require('console');
const {createClient} = require('@supabase/supabase-js');
const imagekit=require('../imagekit');
const bcryptjs=require('bcryptjs');
const { hash } = require('crypto');










 const Register= async(req,res,next)=>{

  try{
  console.log("You are visisted to the register psge dear");
  console.log(req.body);
  

  const name=req.body.Name;
  const Aadhar_no=req.body.Aadhar_Number;
  const City=req.body.City;
  const username=req.body.username;
  const password=req.body.password;
  const email=req.body.email;
var dataarray=[];
  const obj1=new dbclass();
  
  obj1.fetchdata().then(async (homeobject)=>{
  
    if(homeobject.length !== null){
     console.log("object came with some value ");
     console.log(homeobject);
     dataarray=homeobject;
     console.log(Aadhar_no);
     console.log(email);

    const decision= dataarray.some(element => {
      if(Aadhar_no == element.Aadhar_Number && email == element.Email ){
      res.status(409).json(
        {
        "success":false,
        "message": "User already registered"}
      );
  return true;
    
      }
      });

      if(decision === true){

        ///user already loginned 
        
        return 
      }
      else{
        const passwordhash=await bcryptjs.genSalt(10);
        const realpassword=await bcryptjs.hash(req.body.password,passwordhash);


      const  abc=new dbclass(name,Aadhar_no,City,username,realpassword,email);
  abc.insertdata();
  res.status(200).json({
    "success":true,
   "message":"user Registered Successfully"
  })}
    
}
    else{
     console.log("Error in Fetching the data from the database");
    }
  });

}catch(Error){
  Console.log("Eror occured While Registration Processs")
}





}

const login=(req,res,next)=>{

  
  try{

    const username=req.body.username;
  const email=req.body.email; 

  var dataarray=[];
  const obj1=new dbclass();

  obj1.fetchdata().then(async (homeobject)=>{
  
    if(homeobject.length !== null){
     console.log("object came with some value ");
     console.log(homeobject);
     dataarray=homeobject;
     console.log(email);

 const dataobject= dataarray.find(element => username === element.username && email === element.Email);

      if(dataobject){
        //valid email and username but checking password 

        // Compare password
const isPasswordValid = await bcryptjs.compare(req.body.password, dataobject.password);

        if(isPasswordValid){
          //valid password and valid all information 
                     res.status(200).json(
        {
        "status": true,
        "message": "user Login Successfuly",
      "userdata": dataobject }
      );

        }
        else{

          //password is incorrect 
             
              res.status(401).json(
        {
        "status": false,
        "message": "incorrect password Given " }
      );

        }

    
        
        
      }
      else{

        //user provided information is not correct and user access denied
        res.status(401).json({
          "message":"Invalid User Information! Access Denied ",
          "status ": false,
        }) 

       return 
      }
    
}
    else{
     console.log("Error in Fetching the data from the database");
    }
  });

}catch(Error){
  console.log("Error occured While Login process");
  console.log(Error);
  res.send("<h1>Error occured while login process </h1>")
}
}



module.exports={
  Register,
  login
 
}