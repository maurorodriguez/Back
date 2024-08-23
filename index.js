/* eslint-disable no-console */
require("dotenv").config();
const server = require("./server/server");
const { sequelize } = require("./models");

// eslint-disable-next-line no-undef
const port = process.env.PORT || "3001";

server.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Listening on ${port}`);
});
