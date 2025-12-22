import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://blessyou100x_db_user:8M13Savg2vLl3UUr@backend.b2ndaz2.mongodb.net/?appName=backend";

const client = new MongoClient(uri);

const run = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const aa = await client.db("sample_mflix").collection("movies").findOne();
    console.log(aa);

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

run();
