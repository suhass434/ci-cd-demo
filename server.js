const app = require('./app');
const port = process.env.PORT || 3000;
if (require.main === module) { // only when run directly
  module.exports = app.listen(port, () => console.log(`App running on ${port}`));
}