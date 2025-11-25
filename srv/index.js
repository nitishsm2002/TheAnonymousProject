const cds = require('@sap/cds');

// Enable CORS for local development
cds.on('bootstrap', (app) => {
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && (origin.includes('localhost') || origin.includes('127.0.0.1'))) {
      res.header('Access-Control-Allow-Origin', origin);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });
});

module.exports = cds.server;
