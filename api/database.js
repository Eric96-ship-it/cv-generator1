const { Redis } = require('@upstash/redis');

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN,
});

// Save transaction status
async function saveTransaction(checkoutRequestId, status) {
    await redis.set(checkoutRequestId, status);
}

// Get transaction status
async function getTransactionStatus(checkoutRequestId) {
    return await redis.get(checkoutRequestId);
}

module.exports = { saveTransaction, getTransactionStatus };