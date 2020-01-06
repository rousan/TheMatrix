const express = require('express');
const { wrapAsyncMiddleware } = require('../../../helper');

const router = express.Router();

router.get('/ping', wrapAsyncMiddleware(async (req, res) => {
  res.json(global.matrix.serialize());
}));

module.exports = router;
