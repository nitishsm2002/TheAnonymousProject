#!/usr/bin/env node

const cds = require('@sap/cds');
const express = require('express');

(async () => {
  try {
    // 1. Create express app
    const app = express();

    // 2. Connect to CAP database
    await cds.connect.to('db');

    // 3. Serve CDS services and mount them to Express
    await cds.serve('*').in(app);   // <<< THIS is the correct way

    // 4. Health endpoint for Azure
    app.get('/health', (req, res) => res.status(200).send('OK'));

    // 5. Start server
    const port = process.env.PORT || 4004;
    app.listen(port, () => {
      console.log(`🚀 CAP service running on port ${port}`);
    });

  } catch (error) {
    console.error("❌ Failed to start CAP server:", error);
  }
})();
