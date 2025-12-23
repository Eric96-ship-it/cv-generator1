const path = require("path");
const fs = require("fs");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { paymentId } = req.query;

  if (!paymentId) {
    return res.status(400).json({ error: "Payment ID is required" });
  }

  try {
    // Simulate payment verification (replace with actual logic)
    console.log(`Checking access for payment ID: ${paymentId}`);

    const isPaymentVerified = true; // Simulated verification

    if (!isPaymentVerified) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    const filePath = path.resolve("protected/cv.pdf");

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "CV file not found" });
    }

    res.setHeader("Content-Disposition", "attachment; filename=cv.pdf");
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error handling CV download:", error);
    res.status(500).json({ error: "Failed to download CV" });
  }
};