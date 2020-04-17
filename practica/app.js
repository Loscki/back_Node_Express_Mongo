var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

//mongodb
const url = "mongodb://admin:admin@localhost:27018/Blog?authSource=admin";

var app = express();
app.use(express.json());

let users;

//Methods

function toResponse(doc) { //transforma el _id de mongo en el id del objeto que usa node.

    if (doc instanceof Array) {
        return doc.map(elem => toResponse(elem));
    } else {
        let { _id, ...ret } = doc;
        ret.id = doc._id.toString();
        return ret;
    }
}

//post
app.post('/newUser', async(req, res)=>{
const newUser = req.body;

if (typeof newUser.name != "string" || typeof newUser.lastName != 'string' || typeof newUser.age != 'number' || typeof newUser.nickName != 'string' ) {
    res.sendStatus(400);
} else {
    //create object
    const newIt = {
        name: newUser.name,
        lastName: newUser.lastName,
        nickName: newUser.nickName,
        age: newUser.age
    };

    //save resource
    await users.insertOne(newIt); // await + insertOne

    //Return new resource
    res.json(toResponse(newIt)); //incluyes el toResponse para cambio IT
}



})

//GET
app.get('/users', async (req, res)=>{ //async
    const allItems = await users.find().toArray(); // await + find().toArray()
    res.json(toResponse(allItems));
});

//delete


//borrar item



//Put





async function dbConnect() {

    let conn = await MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log("Connected to Mongo");

    users = conn.db().collection('Users'); //items es el nombre del documento
}

async function main() {

    await dbConnect();

    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();