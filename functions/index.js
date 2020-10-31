const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hhw11IErLY5QCPDzgbJoxkeTGvibiaDU06EQsErLPvaYMsSgGxadSoA2gpVpzELKG4S4M3ezjomR1Q5D890aCKK00j9hZo88p"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Total ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
