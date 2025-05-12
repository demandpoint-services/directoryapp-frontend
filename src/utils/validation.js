// utils/validation.js
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidPhone = (phone) => /^\d{10,14}$/.test(phone);
export const isValidNIN = (nin) => /^\d{11}$/.test(nin);
