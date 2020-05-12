import qs from 'querystring';
import { Linking } from 'react-native';

export async function sendMail(to, subject, body, options = {}) {
  const { cc, bcc } = options;

  let url = `mailto:${to}`;

  const query = qs.stringify({
    subject,
    body,
    cc,
    bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled.');
  } else {
    return Linking.openURL(url);
  }
}
