import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let _db;

export default {
  connectToServer: function (callback) {
    async function run() {
      const uri = process.env.STOCKS_DB_URI;

      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Establish and verify connection
        _db = await client.db(process.env.STOCKS_NS);
        console.log("Connected successfully to server");
        return callback();
      } catch (e) {
        console.error(e);
      }
    }

    run().catch(console.error);
  },

  getDb: function () {
    return _db;
  },
};
