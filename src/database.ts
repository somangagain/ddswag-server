import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI || '', {
  dbName: 'main',
}).then(() => {
  console.log('mongodb connected');
}).catch(err => {
  console.error('mongodb connection error:', err);
});
