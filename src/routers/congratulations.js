const express = require("express");
const useCasesCongratulations = require("../useCases/congratulations");
const router = express.Router();

router.post("invitee/:idEvent/congratulation", async (request, response) => {
    try {
      const dataInvitee = request.body;
      const newMessage = await useCasesCongratulations.createCongratulations(dataInvitee);
  
      response.json({
        success: true,
        message: "Congratulation message created sucessfully",
        data: {
          congratulations: newMessage,
        },
      });
    } catch (error) {
      response.status(400);
      response.json({
        success: false,
        message: "Message not created",
      });
    }
  });