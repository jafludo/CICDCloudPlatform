module.exports = (server) => {
    const appController = require('../controllers/appController');

    server.route('/apps')
        .get(appController.list_all_apps);

    server.route('/apps/school/:school_id')
        .get(appController.list_apps_from_school);
    
    server.route('/school/:school_id/:user_id')
        .post(appController.create_an_app)
        .get(appController.get_an_app);
}