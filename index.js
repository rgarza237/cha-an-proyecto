require('dotenv').config();

const server = require('./src/server')
const dbConnect = require('./src/lib/db');

const PORT = process.env.PORT || 8080;

dbConnect()
.then(() => {
    console.log("Chaan database connected");
    server.listen(PORT, () => {
        console.log("server running on port 8080");
    });
})
.catch((error) => {
    console.log("Error: ", error);
});