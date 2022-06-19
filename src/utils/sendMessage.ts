import emailjs from '@emailjs/browser';

type EmailData = {
  name: string,
  email: string,
  message: string,
}

async function sendMessage({ name, email, message }: EmailData) {
  const data = { name, email, message };
  try {
    const result = await emailjs.send(
      'contact_service',
      'template_basic',
      data,
      'sv8dM9eR8ujUiz-md',
    );
    return result;
  } catch (err) {
    return { status: 500, text: 'Algo de errado não está certo' };
  }
}

export default sendMessage;
