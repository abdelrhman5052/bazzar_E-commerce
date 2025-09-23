import React from "react";
import {motion} from "framer-motion"
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-white to-green-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg text-center"
      >
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center"
        >
          <CheckCircle2 className="text-green-500 w-24 h-24" />
        </motion.div>

        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Payment Successful 🎉
        </h1>
        <p className="mt-3 text-gray-600">
          Thank you for your purchase! Your order has been confirmed and will be
          processed shortly.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Success;
