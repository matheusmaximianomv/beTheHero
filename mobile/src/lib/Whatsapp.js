import { Linking } from 'react-native';

export async function sendMessage(phone, message) {
  const url = `whatsapp://send?phone=${phone}&text=${message}`;

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled.');
  } else {
    return Linking.openURL(url);
  }
}
