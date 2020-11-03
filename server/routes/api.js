const express = require('express');

const {
  createOppdrag,
  readOppdrag,
  updateOppdrag,
  deleteOppdrag,
} = require('../controllers/oppdrag_controller');

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require('../controllers/user_controller');

const router = express.Router();

router
  .post('/oppdrag', createOppdrag)
  .get('/oppdrag', readOppdrag)
  .put('/oppdrag/:id', updateOppdrag)
  .delete('/oppdrag/:id', deleteOppdrag);

module.exports = router;
