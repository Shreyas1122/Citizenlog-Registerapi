

const db=require('../dbconnect/databaseconnect')
const dbclass=class Citizenform{
    Citizenform(){

    }

constructor(Name,Adharno,city,username,password,email){
this.Name=Name;
this.Aadhar_Number=Adharno;
this.City=city;
this.username=username;
this.password=password;
this.Email=email

  }

//auto increment of id 


  async insertdata(){
    const databse=db.getdb();
    return databse.collection('Citizen').insertOne(this)
  }

  fetchdata(){
    const database=db.getdb();
    return database.collection('Citizen').find().toArray();
  }


}
module.exports=dbclass;