const crypto = require('crypto');

// Verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
    const hash = crypto.createHmac('sha256', secret).update(JSON.stringify(payload)).digest('hex');
    return hash === signature;
}

module.exports = { verifyWebhookSignature };