import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { price, patientName, _id } = appointment;
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://frozen-mesa-36688.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setFinished(true);
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
      console.log("[error]", error);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    //payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment Processed Successfully");
      console.log(paymentIntent);
      setProcessing(false);
      //save payment information to database
      const uri = `https://frozen-mesa-36688.herokuapp.com/appointments/${_id}`;
      const payment = {
        last4: paymentMethod.card.last4,
        amount: paymentIntent.amount,
        transactionId: paymentIntent.client_secret.slice("_secret")[0],
        created: paymentIntent.created,
        currency: paymentIntent.currency,
      };
      fetch(uri, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay ${price}
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckoutForm;
