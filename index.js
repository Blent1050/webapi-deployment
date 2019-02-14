require('dotenv').config();

const server = require('./api/server.js');

//Environment Variable are system wide
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
