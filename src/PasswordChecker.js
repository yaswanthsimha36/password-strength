import React, { useState } from 'react';

function PasswordChecker() {
  // useState to manage password input and error message
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to validate password against the criteria
  const validatePassword = (pass) => {
    // Regular expressions for different validation checks
    const minLength = /.{8,}/; // Minimum length 8 characters
    const hasAlphabet = /[a-zA-Z]/; // At least one alphabet
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character
    const hasDigit = /\d/; // At least one digit

    // Validating the password based on the regex rules
    if (!minLength.test(pass)) {
      return 'Password must be at least 8 characters long.';
    }
    if (!hasAlphabet.test(pass)) {
      return 'Password must contain at least one alphabet (a-z or A-Z).';
    }
    if (!hasSpecialChar.test(pass)) {
      return 'Password must contain at least one special character (e.g., @, #, $, etc.).';
    }
    if (!hasDigit.test(pass)) {
      return 'Password must contain at least one digit (0-9).';
    }

    // If the password passes all checks, return an empty error (valid password)
    return '';
  };

  // Function to handle password input change and validate it
  const handleChange = (e) => {
    const pass = e.target.value; // Get the password input value
    setPassword(pass); // Update the password state
    const validationError = validatePassword(pass); // Validate the password
    setError(validationError); // Set error message based on validation
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* <h2>Password Checker</h2> */}
      {/* Password input field */}
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      {/* Show error message if there's a validation error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Show success message if the password is valid */}
      {!error && password && <p style={{ color: 'green' }}>Password is valid!</p>}
    </div>
  );
}

export default PasswordChecker;
