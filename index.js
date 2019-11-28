require('dotenv').config();
const Sentry = require('@sentry/node');
const { SENTRY_URL } = process.env;

// The only code required to allow Sentry to monitor thee application!
Sentry.init({ dsn: SENTRY_URL });

// This function is not defined, therefore Sentry is triggered
// and an issue is created on the dashboard for this ReferenceError
undefinedFunction();
