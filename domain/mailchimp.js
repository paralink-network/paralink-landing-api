const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const list_id = process.env.MAILCHIMP_LIST_ID;

async function subscribeToList(email, ip) {
  return mailchimp.post(`/lists/${list_id}/members`, {
    email_address: email,
    ip_signup: ip,
    status: 'subscribed',
  }).then(() => {
    return { success: true };
  }).catch((err) => {
    return { success: false, err };
  });

}

module.exports = { subscribeToList };
