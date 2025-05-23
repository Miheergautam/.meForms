export const validateName = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Hmm... that doesn't look like a real name 🤔"
  };
};

export const validateEmail = (value) => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Oops! That doesn't look like a real email 🧙"
  };
};

export const validatePhone = (value) => {
  const valid = /^[6-9]\d{9}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "That phone number seems off — are you pranking us? 📱"
  };
};

export const validateCountry = (value) => {
  const valid = /^[a-zA-Z\s]{2,50}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "That doesn't sound like a real country 🌍"
  };
};

export const validatePAN = (value) => {
  const valid = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.trim().toUpperCase());
  return {
    valid,
    error: valid ? "" : "PAN format mismatch! It should look like ABCDE1234F 🧾"
  };
};

export const validateAadhar = (value) => {
  const valid = /^\d{12}$/.test(value.trim());
  return {
    valid,
    error: valid ? "" : "Aadhar must be a 12-digit number 🔐"
  };
};
