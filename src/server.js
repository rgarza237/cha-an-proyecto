const express = require("express");
const server = express();

// require router
const eventsRouter = require("./routers/events");
const eventsInviteesRouter = require("./routers/eventInvitees");
//middlewares
server.use(express.json());
// routers
server.use("/events", eventsRouter);
server.use("/events/:idEvent/invitees", eventsInviteesRouter);
//exports
module.exports = server;
