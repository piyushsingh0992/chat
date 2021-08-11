const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const { contactCheck } = require("../middleWare/contact.js");
router.get("/", async (req, res) => {
  try {
    let currentUser = await User.findById(req.userId);
    res
      .status(200)
      .send({ contacts: currentUser.contacts, message: "User contacts" });
  } catch (error) {
    console.error("error ->", error);
    res
      .status(500)
      .send({ message: "Error ocuured from server side try again later" });
  }
});

router.post("/add", contactCheck, async (req, res) => {
  const { contactId, contactName } = req.body;

  try {
    let currentUser = req.currentUser;
    currentUser.contacts.push({
      contactId: contactId,
      contactName,
    });

    currentUser = await currentUser.save();
    res.status(200).send({
      message: "Contact Added",
      newContact: {
        contactId,
        contactName,
      },
    });
  } catch (error) {
    console.log("error =>", error);
    res.status(500).send({
      message: "Error ocuured from main server side try again later",
      error: error,
    });
  }
});

router.post("/delete", async (req, res) => {
  const { contactId } = req.body;

  try {
    let currentUser = await User.findById(req.userId);
    let contactArray = currentUser.contacts;
    contactArray = contactArray.filter((item) => {
      console.log("item.contactId =>", item.contactId);
      console.log("contactId =>", contactId);
      console.log(
        "item.contactId != contactId =>",
        item.contactId != contactId
      );

      return item.contactId != contactId;
    });

    currentUser.contacts = contactArray;
    currentUser = await currentUser.save();
    res.status(200).send({
      message: " Deleted contact",
      deletedContact: {
        contactId,
      },
    });
  } catch (error) {
    console.log("error =>", error);
    res.status(500).send({
      message: "Error ocuured from server side try again later",
      error: error,
    });
  }
});

module.exports = router;
