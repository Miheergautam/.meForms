// Name: Allow letters and spaces, min 2 chars, max 50
export const validateName = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Hmm... that doesn't look like a real name 🤔",
  };
};

// Email: Basic structure check
export const validateEmail = (value) => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Oops! That doesn't look like a real email 🧙",
  };
};

// Phone: International support with optional +, allows spaces/dashes, 10–15 digits total
export const validatePhone = (value) => {
  const trimmed = value.trim();
  const valid = /^(\+?\d{1,4}[-\s]?)?([6-9]\d{9}|\d{10,14})$/.test(trimmed);
  return {
    valid,
    error: valid ? "" : "That phone number seems off — are you pranking us? 📱",
  };
};

// Country: Letters and spaces, 2–50 characters
export const validateCountry = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "That doesn't sound like a real country 🌍",
  };
};

// PAN Number: Standard Indian PAN format (ABCDE1234F)
export const validatePAN = (value) => {
  const valid = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.trim().toUpperCase());
  return {
    valid,
    error: valid ? "" : "PAN format mismatch! It should look like ABCDE1234F 🧾",
  };
};

// Aadhar Number: Exactly 12 digits
export const validateAadhar = (value) => {
  const valid = /^\d{12}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Aadhar must be a 12-digit number 🔐",
  };
};

// Username: Alphanumeric and underscores, 3–20 characters
export const validateUsername = (value) => {
  const valid = /^[a-zA-Z0-9_]{3,20}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Username should be 3–20 characters, no spaces 🚀",
  };
};

// Password: Minimum 6 chars, at least one letter and one number, symbols allowed
export const validatePassword = (value) => {
  const valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Password must be 6+ characters and include letters & numbers 🔐",
  };
};

// City: Letters and spaces only, 2–50 characters
export const validateCity = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Hmm... that doesn't sound like a real city 🏙️",
  };
};
