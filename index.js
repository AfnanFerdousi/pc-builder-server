const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());



const uri = "mongodb+srv://afnanferdousi550:Ywzit1rlrzOkk2D8@cluster0.uko2k5j.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// ... (previous code) ...

async function run() {
    try {
        await client.connect();
        const buildedPcCollection = client.db('pc-builder').collection('buildedPc');
        app.post('/addBuildedpc', async (req, res) => {
            const buildedPc = req.body;
            const result = await buildedPcCollection.insertOne(buildedPc);
            res.send(result);
        })

    } finally {

    }
}

// Call the run function to start the application

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Hello From PC!')
})

app.listen(port, () => {
    console.log(`PC listening on port ${port}`)
})