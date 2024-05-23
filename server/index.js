const express = require('express');
const connectionToDB = require('./Dbconnection');
const cors = require('cors');
const router = require('./Router');

const app = express();
const PORT = 3005;
app.use(express.json());
app.use(cors('*'));
app.use('/', router);

connectionToDB();

app.listen(PORT, () => {
  console.log(`server is listning ${PORT}`);
});
