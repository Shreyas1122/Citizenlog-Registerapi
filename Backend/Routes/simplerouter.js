
const database=require('../dbconnect/databaseconnect');
const dbclass=require('../model/simpleformodel');
const supabase = require('../firstserver');
const { error, Console } = require('console');
const bcryptjs=require('bcryptjs');
const { hash } = require('crypto');

const citizenquerypost=(req,res,next)=>{

  try{
    console.log("You are visisted to the citizenquerypost page  dear");
    console.log(req.body);
    
  
    const querytitle=req.body.Title;
    const query_des=req.body.Description;
    const querycity=req.body.City;
    const queryimage =req.body.Image;
    const queryauth=req.body.Authority;
  var dataarray=[];
    const obj1=new dbclass.dbclass();
    
    obj1.fetchdata("Queries").then(async (homeobject)=>{
    
      if(homeobject.length !== null){
       console.log("object came with some value ");
       console.log(homeobject);
       dataarray=homeobject;
       console.log(querytitle);
       console.log(queryimage);
  
      const decision= dataarray.some(element => {
        if(queryimage == element.Image && querytitle == element.Title && query_des == element.Description ){
        res.status(500).json(
          {
          "success":false,
          "message": "Duplicate Query !"}
        );
    return true;
      
        }
        });
  
        if(decision === true){
  
          ///Duplicate Query Inserting  
          
          return 
        }
        else{

       
  
        const  abc=new dbclass.dbclass(querytitle,query_des,querycity,queryimage,queryauth);
   await  abc.insertdata("Queries");
    //fecthing data after inserting the data 
const getobject=new dbclass.dbclass();
    var currentdataobject=[];
          getobject.fetchdata("Queries").then((dataobject)=>{
            currentdataobject=dataobject;
            console.log("the query objet is as folloes "
            );
            console.log(currentdataobject);
            res.status(200).json({
              "success":true,
             "message":"Query Inserted And Filled Successfully",
             "queryobject":currentdataobject
            })
          
          });
          
          
   
  
  }
      
  }
      else{
       console.log("object came is null dear");
      }
    });



  }catch(Error){
    console.log(Error);
    console.log("error in posting the data to the query collection");
  }




}
const citizenqueryget=(req,res,next)=>{
  try{
    var dataarray=[];
    const obj1=new dbclass.dbclass();

    obj1.fetchdata("Queries").then((dataobject)=>{

      if(dataobject !== null){

        dataarray=dataobject;
        res.status(200).json({
  "success":true,
  "message":"Data Fecthed Successfully",
  "dataobject":dataarray
        });
  

      }
      else{
        res.status(500).json({
          "sucess":false,
          "message":"unable to fetch data"
        })

      }
      


    });


  }
  catch(Error){
    console.log("Error occured while fetching the data from query object");
    res.status(500).json({
      "message":"error occured while fetching the data ! please try again"
    });
    console.log(Error);
  }
}


const citizencomplaintpost=(req,res,next)=>{

  try{
    console.log("You are visisted to the citizencomplaintpost page  dear");
    console.log(req.body);
    
  
    const querytitle=req.body.Title;
    const query_des=req.body.Description;
    const querycity=req.body.City;
    const queryimage =req.body.Image;
    const queryauth=req.body.Authority;
  var dataarray=[];
    const obj1=new dbclass.dbclass();
    
    obj1.fetchdata("Complaints").then(async (homeobject)=>{
    
      if(homeobject.length !== null){
       console.log("object came with some value ");
       console.log(homeobject);
       dataarray=homeobject;
       console.log(querytitle);
       console.log(queryimage);
  
      const decision= dataarray.some(element => {
        if(queryimage == element.Image && querytitle == element.Title && query_des == element.Description ){
        res.status(500).json(
          {
          "success":false,
          "message": "Duplicate Query !"}
        );
    return true;
      
        }
        });
  
        if(decision === true){
  
          ///Duplicate Query Inserting  
          
          return 
        }
        else{

       
  
        const  abc=new dbclass.dbclass(querytitle,query_des,querycity,queryimage,queryauth);
   await  abc.insertdata("Complaints");
    //fecthing data after inserting the data 
const getobject=new dbclass.dbclass();
    var currentdataobject=[];
          getobject.fetchdata("Complaints").then((dataobject)=>{
            currentdataobject=dataobject;
            console.log("the query objet is as folloes "
            );
            console.log(currentdataobject);
            res.status(200).json({
              "success":true,
             "message":"Complaint Inserted And Filled Successfully",
             "queryobject":currentdataobject
            })
          
          });
          
          
   
  
  }
      
  }
      else{
       console.log("object came is null dear");
      }
    });



  }catch(Error){
    console.log(Error);
    console.log("error in posting the data to the complaint  collection");
  }



  

}

const citizencomplaintget=(req,res,next)=>{

  try{
    var dataarray=[];
    const obj1=new dbclass.dbclass();

    obj1.fetchdata("Complaints").then((dataobject)=>{

      if(dataobject !== null){

        dataarray=dataobject;
        res.status(200).json({
  "success":true,
  "message":"Data Fecthed Successfully",
  "dataobject":dataarray
        });
  

      }
      else{
        res.status(500).json({
          "sucess":false,
          "message":"unable to fetch data"
        })

      }
      


    });


  }
  catch(Error){
    console.log("Error occured while fetching the data from Complaint object");
    res.status(500).json({
      "message":"error occured while fetching the data ! please try again"
    });
    console.log(Error);
  }
}


const citizenschemeget=(req,res,next)=>{
  
  try{
    var dataarray=[];
    const obj1=new dbclass.schemeclass();

    obj1.fetchdata().then((dataobject)=>{

      if(dataobject !== null){

        dataarray=dataobject;
        res.status(200).json({
  "success":true,
  "message":"Data Fecthed Successfully",
  "dataobject":dataarray
        });
  

      }
      else{
        res.status(500).json({
          "sucess":false,
          "message":"unable to fetch data"
        })

      }
      


    });


  }
  catch(Error){
    console.log("Error occured while fetching the data from Complaint object");
    res.status(500).json({
      "message":"error occured while fetching the data ! please try again"
    });
    console.log(Error);
  }

}



const citizenjobget=(req,res,next)=>{

    
  try{
    var dataarray=[];
    const obj1=new dbclass.Jobclass();

    obj1.fetchdata().then((dataobject)=>{

      if(dataobject !== null){

        dataarray=dataobject;
        res.status(200).json({
  "success":true,
  "message":"Data Fecthed Successfully",
  "dataobject":dataarray
        });
  

      }
      else{
        res.status(500).json({
          "sucess":false,
          "message":"unable to fetch data"
        })

      }
      


    });


  }
  catch(Error){
    console.log("Error occured while fetching the data from Jobs object");
    res.status(500).json({
      "message":"error occured while fetching the data ! please try again"
    });
    console.log(Error);
  }


}

const citizenNotice=(req,res,next)=>{

  try{
    var dataarray=[];
    const obj1=new dbclass.Noticeclass();

    obj1.fetchdata().then((dataobject)=>{

      if(dataobject !== null){

        dataarray=dataobject;
        res.status(200).json({
  "success":true,
  "message":"Data Fecthed Successfully",
  "dataobject":dataarray
        });
  

      }
      else{
        res.status(500).json({
          "sucess":false,
          "message":"unable to fetch data"
        })

      }
      


    });


  }
  catch(Error){
    console.log("Error occured while fetching the data from Notice object");
    res.status(500).json({
      "message":"error occured while fetching the data ! please try again"
    });
    console.log(Error);
  }

}











module.exports={
 citizenquerypost,
 citizenqueryget,
 citizencomplaintpost,
 citizencomplaintget,
 citizenschemeget,
 citizenjobget,
 citizenNotice


 
}