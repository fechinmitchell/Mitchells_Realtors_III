module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ec76bfddb5336026986c7189bdbe37bc'),
  },
});
