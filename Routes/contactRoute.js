const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require("../Controllers/contactController.js");

router.route("/").get(getContacts).post(createContact);


router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;