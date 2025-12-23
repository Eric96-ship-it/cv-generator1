module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { paymentId } = req.query;

  if (!paymentId) {
    return res.status(400).json({ error: "Payment ID is required" });
  }

  try {
    // Simulate payment verification (replace with actual verification logic)
    console.log(`Verifying payment with ID: ${paymentId}`);

    const isPaymentSuccessful = true; // Simulated success

    if (isPaymentSuccessful) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: "Payment not verified" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
};