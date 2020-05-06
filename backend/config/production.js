module.exports = {
  env: 'production',

  database: {
    /**
     * Connection URL for Mongoose
     * See https://mongoosejs.com/docs/index.html
     */
    connection: 'mongodb://mongo:27017/production',
    /**
     * In case you want to use ACID transactions, change this flag to true.
     * See: https://mongoosejs.com/docs/transactions.html
     */
    transactions: false,
  },

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: 'https://<insert project id here>.firebaseapp.com',


};
