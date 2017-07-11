import Raven from 'raven-js';

const sentry_key = '0ec43ad4087647f9aee0d7bc32e8a0a0';
const sentry_app = '190388';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
