const express = require("express");
const router = express.Router();

router.post("signup/invitee/:id", async (request, response) => {
  try {
    const inviteeData = request.params.id;
    const passwordToUpdate = request.body;
    const passwordCreated = await useCasesInvitees.postAssistanceById(inviteeData);

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
router.patch("signup/invitee/:id", async (request, response) => {
  try {
    const idInvitee = request.params.id;
    const infoToUpdate = request.body;
    const inviteeUpdate = await useCasesInvitee.patchAssistanceById(
      idInvitee,
      infoToUpdate,
      { new: true}
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
      message: "Invitee not updated",
    });
  }
});
router.delete("signup/invitee/:id", async (request, response) => {
  try {
    const idInvitee = request.params.id;
    const inviteeDelete = await useCasesInvitees.deleteInviteeById(idInvitee);

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
      error: error.message,
    });
  }
});


// check login please 
router.post("login/invitee/:id", async (request, response) => {
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


module.exports = router;