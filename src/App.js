// Init
import React from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { stripePK } from "./config";
// Files
import Index from "./routes/index";
import "./css/index.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(stripePK);
// Component
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />
      <Elements stripe={stripePromise}>
        <Index />
      </Elements>
    </div>
  );
}

// Export
export default App;
