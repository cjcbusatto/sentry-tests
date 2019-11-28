require('dotenv').config();
const Sentry = require('@sentry/node');
const { SENTRY_URL } = process.env;

Sentry.init({
  dsn: SENTRY_URL
});

// This function is not defined, therefore Sentry is track a ReferenceError
undefinedFunction();
