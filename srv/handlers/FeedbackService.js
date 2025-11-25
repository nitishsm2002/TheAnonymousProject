const cds = require('@sap/cds');

module.exports = cds.service.impl(async function AnonymousService() {
  const { Feedback } = this.entities('company.anonymousproject');

  this.before('CREATE', 'Feedback', async (req) => {
    if (!req.data.message) req.reject(400, 'Message is required');
    req.data.isAnonymous = true;
  });

  this.after('READ', 'Feedback', each => {
    if (each.isAnonymous && each.submittedBy) delete each.submittedBy;
  });
});
