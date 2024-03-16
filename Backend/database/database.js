
import { MongoClient,Db} from "mongodb";

import "dotenv/config";

const client = new MongoClient(process.env.CONNECTION_STRING);

const db = new Db(client, "administradorCitas");

try {
    await client.connect();
}catch(error){
    console.error(error);
}

export default db;





