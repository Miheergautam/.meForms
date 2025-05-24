// Name: Allow letters and spaces, min 2 chars
export const validateName = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Hmm... that doesn't look like a real name 🤔",
  };
};

// Email
export const validateEmail = (value) => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Oops! That doesn't look like a real email 🧙",
  };
};

// Phone: Indian format with country code optional
export const validatePhone = (value) => {
  const trimmed = value.trim();
  const valid = /^(\+?\d{1,4}[-\s]?)?[6-9]\d{9}$/.test(trimmed);
  return {
    valid,
    error: valid ? "" : "That phone number seems off — are you pranking us? 📱",
  };
};

// Country
export const validateCountry = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "That doesn't sound like a real country 🌍",
  };
};

// PAN Number: Standard format
export const validatePAN = (value) => {
  const valid = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.trim().toUpperCase());
  return {
    valid,
    error: valid ? "" : "PAN format mismatch! It should look like ABCDE1234F 🧾",
  };
};

// Aadhar Number: 12-digit numeric
export const validateAadhar = (value) => {
  const valid = /^\d{12}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Aadhar must be a 12-digit number 🔐",
  };
};

// Username: alphanumeric, 3–20 chars
export const validateUsername = (value) => {
  const valid = /^[a-zA-Z0-9_]{3,20}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Username should be 3–20 characters, no spaces 🚀",
  };
};

// Password: min 6 characters, at least 1 number and 1 letter
export const validatePassword = (value) => {
  const valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Password must be 6+ characters and include letters & numbers 🔐",
  };
};

// City: basic check, letters and spaces only
export const validateCity = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Hmm... that doesn't sound like a real city 🏙️",
  };
};
