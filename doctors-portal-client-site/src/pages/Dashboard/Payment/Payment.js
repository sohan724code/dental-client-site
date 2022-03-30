import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51KEdrAHRkyy5yIhtW10FVbnqms8QGhNfaAr2I2LtBDRYCrm7jTl9cKwAcQw8BO6d8xOr9knMMR5shf3dCvt3ymBh00KoF6e44K"
);
const Payment = () => {
  const { paymentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`https://frozen-mesa-36688.herokuapp.com/appointments/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [paymentId]);
  return (
    <div>
      <h2>PaymentId:{paymentId}</h2>
      <h2>Name: {appointment.patientName}</h2>
      <h2>Pay: ${appointment.price}</h2>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
