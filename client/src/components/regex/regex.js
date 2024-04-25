
export const usernameRegex = /^[a-zA-Z0-9_]{5,}$/; // Alphanumeric and underscore, at least 5 characters
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number
