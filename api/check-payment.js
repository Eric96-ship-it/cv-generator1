const { getTransactionStatus } = require('./database');

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { checkoutRequestId } = req.query;

    if (!checkoutRequestId) {
        return res.status(400).json({ error: 'CheckoutRequestID is required' });
    }

    try {
        const status = await getTransactionStatus(checkoutRequestId);

        if (!status) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        res.status(200).json({ status });
    } catch (error) {
        console.error('Error checking payment status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};