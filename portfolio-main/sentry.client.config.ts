import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9398cc6ec4aa6ac6e3bc1a52dbd6f556@o4509085069148160.ingest.us.sentry.io/4509253877891072",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});