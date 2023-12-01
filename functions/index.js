const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OFbvaF6wyEfqsLk8NxoCHE4miFzmtembVEIgFLRaz0tfLVLfsxB2u" +
    "esMhFH0MtbiCLAXn2gDIeZzn0fweNE5jys00Clgr9Qpv"
);

// Initialize Express app
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  try {
    const total = Number(request.query.total);

    console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Amount in cents
      currency: "usd",
    });

    console.log("Client Secret:", paymentIntent.client_secret);

    response.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    response.status(500).send({
      error: error.message,
    });
  }
});

exports.api = functions.https.onRequest(app);
