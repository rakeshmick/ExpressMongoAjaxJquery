

async function mongoConnector(){

    //mongo
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017"

    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri,{ useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
      
 
        // Make the appropriate DB calls
       // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } /*finally {
        await client.close();
    }*/

    return client;
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = mongoConnector;