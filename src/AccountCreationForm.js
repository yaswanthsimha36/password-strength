import React, { useState } from 'react';

function AccountCreationForm() {
  // State variables to manage form inputs and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to validate the password using regex
  const validatePassword = (pass) => {
    const minLength = /.{8,}/;
    const hasAlphabet = /[a-zA-Z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;

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
    return '';
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError(''); // Clear any existing errors

    // Basic form validation
    if (!name) {
      setError('Name is required.');
      return;
    }

    if (!email) {
      setError('Email is required.');
      return;
    }

    // Validate the password using the password checker function
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    // Check if confirm password matches the password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // If all validations pass, simulate form submission
    setFormSubmitted(true);
    setError(''); // Clear errors on successful submission
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            required
          />
        </div>

        {/* Show error message if there's an error */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Show success message if the form is successfully submitted */}
        {formSubmitted && <p style={{ color: 'green' }}>Account created successfully!</p>}

        {/* Submit Button */}
        <div>
          <button type="submit" style={{ padding: '10px', width: '100%' }}>Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default AccountCreationForm;
