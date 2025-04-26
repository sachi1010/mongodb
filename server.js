const {MongoClient} =require('mongodb');
//mongodb uri and database
const uri = 'mongodb://127.0.0.1:27017/';
const dbName='sachidata';
const client =new MongoClient(uri);
//connect to mongodb
async function connecttomongo(){
    try{
        await client.connect();
        console.log('mongodb connected');
    }
    catch(err){
        console.log('error connected to mongodb',err)
    }
}
//insert a new user into the 'use5rs collection
async function insertuser(name,email){
    const db =client.db(dbName);
    const collection =db.collection('users');
    const newuser={name,email};
    try{
        const insertresult =await collection.insertOne(newuser);
        console.log('user inserted',insertresult);
    }catch(err){
       console.log('error inserting',err)
    }
}
//get all user from the users collection
async function getallusers(){
    const db=client.db(dbName);
    const collection =db.collection('users');
    try{
        const users =await collection.find().toArray();
        console.log('users',users);
    }catch(err){
        console.log('error retriving uiser',err)
    }
}
//main functio that connects to mongodb
async function main(){
    await connecttomongo();

    await insertuser('sachi','sachi@gmail.com');

    await getallusers();

    await client.close();

}

main();