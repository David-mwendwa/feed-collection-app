const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hi there, server currenly running'})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
