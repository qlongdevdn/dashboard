const router = (app) => {
    app.use('/', require('./static.route'));
};

module.exports = router;
