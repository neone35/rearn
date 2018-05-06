module.exports = function setRoutes(server) {
  app.post(
    '/api/surveys',
    requireLogin,
    requireCredits,
    async (req, res) => {
      // req - incoming req, res - outgoing res
      const {
        title, subject, body, recipients,
      } = req.body;
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now(),
      });
      // Send email
      const mailer = new Mailer(survey, surveyTemplate(survey));
      try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user); // with new value of credits
      } catch (err) {
        res.status(422);
      }
    },
  );
};
