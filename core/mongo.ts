import mongoose from 'mongoose';

const connectToMongo = async () => {
  try {
    const mongoUri = process.env.MONGO_STR_CONN ?? '';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

export default connectToMongo;
