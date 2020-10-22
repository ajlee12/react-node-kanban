import mongoose from 'mongoose';

// Changed `localhost` to `collov-mongo` for inter-container comm.
const URL = 'mongodb://collov-mongo:27017/collov-board';

mongoose.connect(URL, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,

  // sets the name of the DB that our collections are part of
  // dbName: 'collov-board',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err: Error) => console.log(err));

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comments: [{ type: String }],
  status: {
    type: String,
    required: true,
  },
  performance: Number,
});

const Card = mongoose.model('Card', cardSchema);

export default Card;