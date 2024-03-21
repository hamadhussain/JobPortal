// import React from 'react'
import mongoose from 'mongoose';

const Connectdb = async () => {
    try {
      const cont = await  mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected!'));
  console.log(`host : ${mongoose.connection.host}`);
//   console.log(cont);
    } catch (error) {
        console.log("something wrong with mongodb");
    }
}

export default Connectdb
