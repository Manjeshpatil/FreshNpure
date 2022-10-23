const express = require('express');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();

app.use('/', (req, res) => {
  res.send('Server is running');
});
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.ENV} listening to ${PORT}`);
});
