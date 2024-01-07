import { MongoClient } from "mongodb";

import "dotenv/config";

const client = new MongoClient(process.env.CONNECTION_STRING);

let db;

try {
    await client.connect();
    db = client.db("administradorCitas");
}catch(error){
    console.error(error);
}

export default db;





