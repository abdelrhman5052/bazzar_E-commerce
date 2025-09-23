const express = require("express");
// import Success from './../my-project/src/components/Success';
const cors = require("cors");
require("dotenv").config();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// 🟢 هنا أنشأنا Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "E-commerce Order",
            },
            unit_amount: req.body.amount, // المبلغ لازم يكون بـ السنت (100$ = 10000)
          },
          quantity: 1,
        },
      ],
      success_url: "https://zippy-empanada-9b51f6.netlify.app/",
      cancel_url: "https://zippy-empanada-9b51f6.netlify.app/",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe session error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
