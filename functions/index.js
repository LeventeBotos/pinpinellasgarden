/* eslint-disable object-curly-spacing */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable max-len */
// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { onRequest } = require("firebase-functions/v2/https");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");

// Packages
const sgMail = require("@sendgrid/mail");

initializeApp();

const sgmailApiKey =
  "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";
sgMail.setApiKey(sgmailApiKey);

exports.sendEmail = onRequest({ cors: true }, async (req, res) => {

  const emailContent = (to) => ({
    to: to,
    from: "kovdanak@gmail.com",
    subject: "Új megrendelés",
    text: "RR",
    html: `<div>hello
          </div>`,
  });

//   const emailBack = (to) => ({
//     to: to,
//     from: "kovdanak@gmail.com",
//     subject: "Köszönjük rendelésedet!",
//     text: "RR",
//     html: `<div>heello</div>
// `,
//   });

  try {
  
    await sgMail.send(emailContent("botos.levente2007@gmail.com"));
    // await sgMail.send(emailBack(email));
    res.send("Email sent!");
  } catch (error) {
    throw new Error(error.message);
  }
});
