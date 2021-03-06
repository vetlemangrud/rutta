'use strict';

const Oppdrag = require('../models/oppdrag_schema');

const createOppdrag = (req, res) => {
  console.log(req.body)
  Oppdrag.create(req.body)
    .then((data) => {
      console.log('New Oppdrag Created!', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const readOppdrag = (req, res) => {
  Oppdrag.find(req.query)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const updateOppdrag = (req, res) => {
  Oppdrag.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log('Oppdrag updated!');
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteOppdrag = (req, res) => {
  Oppdrag.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error('Oppdrag not available');
      }
      return data.remove();
    })
    .then((data) => {
      console.log('Oppdrag removed!');
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createOppdrag,
  readOppdrag,
  updateOppdrag,
  deleteOppdrag,
};
