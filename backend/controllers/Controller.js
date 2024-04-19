/* 
-------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/`
------------------------------------------------------------- */


/* Require modules
---------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
---------------------------------------------------------- */
const db = require('../models')


/* Routes
---------------------------------------------------------- */
// Index Route (GET/Read): Will display all 
router.get()

// Create Route (POST/Create): This route receives a POST request and
// creates a new document using the request body
router.post()

// Update Route (PUT/Update): This route receives a PUT request and 
// edits the specified document using the request body
router.put()

// Destroy Route (DELETE/Delete): This route deletes a document 
// using the URL parameter (which will always be the document's ID)
router.delete()


/* Export these routes so that they are accessible in `server.js`
---------------------------------------------------------- */
module.exports = router