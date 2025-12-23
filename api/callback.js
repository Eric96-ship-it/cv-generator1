const { verifyWebhookSignature } = require('./utils');
const { saveTransaction } = require('./database');

module.exports = async (req, res) => {
  res.status(410).json({ error: "This endpoint is no longer in use." });
};