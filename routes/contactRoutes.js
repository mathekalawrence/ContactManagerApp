const express = require('express');
const router = express.Router();
/*
const { getContact } = require("../controllers/contactController.js");
const { getContacts } = require("../controllers/contactController.js");
const { createContact } = require("../controllers/contactController.js");
const { updateContact } = require("../controllers/contactController.js");
const { deleteContact } = require("../controllers/contactController.js");
*/
const { 
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact,
 } = require("../controllers/contactController")

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route('/:id').get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

/*
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
*/


module.exports = router;