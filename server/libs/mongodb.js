const {
    MongoClient,
    ObjectId
  } = require('mongodb');
  // Connection URL
  const url = 'mongodb://localhost:27017';
  // Database Name
  const dbName = '1810';
  // Use connect method to connect to the server
  
  let connect = () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, client) => {
        if (err) {
          reject(err)
        } else {
          // console.log("Connected successfully to server");
          const db = client.db(dbName);
          resolve({
            db,
            client
          })
        }
      });
    })
  }
  const find = (col, obj) => {
    return new Promise(async (resolve, reject) => {
      const {
        db,
        client,
      } = await connect();
      const collection = db.collection(col);
      collection.find({
        ...obj,
      }).toArray((err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
          client.close();
        }
      });
    });
  };
  const insert = (col, arr) => {
    return new Promise(async (resolve, reject) => {
      const {
        db,
        client,
      } = await connect();
      const collection = db.collection(col);
      collection.insertMany(arr, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
          client.close();
        }
      });
    });
  };
  module.exports = {
    connect,
    find,
    insert,
    ObjectId
  }