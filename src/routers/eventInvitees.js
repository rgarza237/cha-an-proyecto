const express = require("express");
const useCasesInvitees = require("../useCases/eventInvitees");
const router = express.Router();

router.get("events/:id/invitees", async (request, response) => {
  try {
    const allInvitees = await useCasesInvitees.getAllInvitees();

    response.json({
      success: true,
      message: "All invitees",
      data: {
        invitees: allInvitees,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Invitees not found",
    });
  }
});
router.get("events/:id/invitees/:id", async (request, response) => {
  try {
    const idInvitee = request.params.id;
    const inviteeFound = await useCasesInvitees.getInviteeById(idInvitee);

    response.json({
      success: true,
      message: "Invitee found",
      data: {
        invitee: inviteeFound,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Invitee not found",
    });
  }
});
router.post("events/:id/invitees", async (request, response) => {
  try {
    const dataInvitee = request.body;
    const newInvitee = await useCasesInvitees.createInvitee(dataInvitee);

    response.json({
      success: true,
      message: "Invitee created sucessfully",
      data: {
        invitee: newInvitee,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Invitee not create",
    });
  }
});


//login 
router.post("events/:id/invitees/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await useCasesInvitee.loginInvitee(email, password);

    response.json({
      success: true,
      message: "Invitee logged sucessfully",
      data: {
        invitee: token,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "could not log in",
      error: error.message
    });
  }
});



router.patch("events/:id/invitees/:id", async (request, response) => {
  try {
    const idInvitee = request.params.id;
    const dataUpdate = request.body;
    const inviteeUpdate = await useCasesInvitees.updateById(
      idInvitee,
      dataUpdate
    );
    if (!inviteeUpdate) throw new Error("Invitee not found");

    response.json({
      success: true,
      message: "Invitee updated successfully",
      data: {
        invitee: inviteeUpdate,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Invitee not update",
    });
  }
});
router.delete("events/:id/invitees/:id", async (request, response) => {
  try {
    const idInvitee = request.params.id;
    const inviteeDeleted = await useCasesInvitees.deleteById(idInvitee);

    response.json({
      success: true,
      message: "Invitee deleted",
      data: {
        inviteeDeleted: inviteeDeleted,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Invitee not found",
    });
  }
});

//creo que puede ser un PUT
router.post("signup/invitee/:id", async (request, response) => {
  try {
    const inviteeData = request.params.id;
    const passwordToUpdate = request.body;
    const passwordCreated = await useCasesInvitees.postInviteeById(inviteeData);

    response.json({
      success: true,
      message: "Invitee password created sucessfully",
      data: {
        password: newPassword,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Invitee not create",
    });
  }
});


module.exports = router;
