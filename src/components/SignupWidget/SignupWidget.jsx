"use client";

import PropTypes from "prop-types";
import { useState } from "react";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return email.includes("@");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      data-testid="signupWidget"
      className="flex flex-col w-full max-w-md gap-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 data-testid="signupWidgetTitle" className="text-xl font-bold text-gray-900 dark:text-white m-0">
        {title}
      </h2>

      {isSubscribed ? (
        <p data-testid="signupWidgetMessage" className="text-green-600 dark:text-green-400 font-medium">
          {message}
        </p>
      ) : (
        <>
          <p data-testid="signupWidgetContent" className="text-gray-600 dark:text-gray-300 text-base">
            {content}
          </p>

          <div className="flex flex-row gap-4">
            {/* Email input field */}
            <input
              data-testid="signupWidgetInput"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={busy}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 bg-transparent dark:text-white"
            />

            {/* Submit button */}
            <button
              data-testid="signupWidgetButton"
              type="submit"
              disabled={busy}
              className={`px-6 py-2 text-white text-sm font-semibold rounded-md transition-all duration-200 ${
                busy
                  ? "bg-green-400 dark:bg-green-500 cursor-not-allowed"
                  : "bg-green-600 dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600 active:bg-green-700 dark:active:bg-green-800"
              }`}
            >
              {busy ? "Joining..." : "Join"}
            </button>
          </div>

          {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
