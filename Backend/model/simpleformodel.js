

const db=require('../dbconnect/databaseconnect')
const dbclass=class CitizenQueries{
    CitizenQueries(){

    }

constructor(Title,Description,city,Image,Authority_per){
this.Title=Title;
this.Description=Description;
this.City=city;
this.Image=Image;
this.Authority=Authority_per;


  }

//auto increment of id 

async getNextId(collectioname) {
  const database = db.getdb();
  const lastEntry = await database.collection(collectioname)
      .find().sort({ id: -1 }).limit(1).toArray(); // Find last inserted document

  if (lastEntry.length > 0) {
      return lastEntry[0].id + 1; // Increment last ID
  } else {
      return 0; // Start from 0 if no records exist
  }
}



  async insertdata(collectioname){
    const databse=db.getdb();
    let nextId;
    if(collectioname == "Queries"){
       nextId = await this.getNextId("Queries");
    }else{
     nextId = await this.getNextId("Complaints");
    }
    // const nextId = await this.getNextId(""); // Get next auto-increment ID from counters
    const { Title, Description, City, Image, Authority } = this;  //getting all th values from this 
    return databse.collection(collectioname).insertOne({
        id: nextId,
        Title,
        Description,
        City,
        Image,
        Authority
  });
  }

   fetchdata(collectioname){
    const database=db.getdb();
    return database.collection(collectioname).find().toArray();
  }


}


const schemeclass=class schemeclass{

  schemeclass(){

  }

constructor(Title,Description,launchdate,ApplicationType,whycomplaintcontent){
this.Title=Title;
this.Description=Description;
this.Application_type=ApplicationType;
this.purpose=whycomplaintcontent;


}

//auto increment of id 

async getNextId() {
const database = db.getdb();
const lastEntry = await database.collection("Schemes")
    .find().sort({ id: -1 }).limit(1).toArray(); // Find last inserted document

if (lastEntry.length > 0) {
    return lastEntry[0].id + 1; // Increment last ID
} else {
    return 0; // Start from 0 if no records exist
}
}



async insertdata(){
  const databse=db.getdb();
  let nextId;
 
  nextId = await this.getNextId("Schemes");
 
  
  // const nextId = await this.getNextId(""); // Get next auto-increment ID from counters
  const { Title, Description, City, Image, Authority } = this;  //getting all th values from this 
  return databse.collection(collectioname).insertOne({
      id: nextId,
      Title,
      Description,
      City,
      Image,
      Authority
});
}

 fetchdata(){
  const database=db.getdb();
  return database.collection("Schemes").find().toArray();
}

}
const Jobclass=class Jobs{
  Jobs(){

  }
  fetchdata(){
    const database=db.getdb();
    return database.collection("Jobs").find().toArray();
  }

}
const Noticeclass=class Notices{
  Notices(){

  }
  fetchdata(){
    const database=db.getdb();
    return database.collection("Notices").find().toArray();

  }
}
module.exports={
  dbclass,
  schemeclass,
  Jobclass,
  Noticeclass

}