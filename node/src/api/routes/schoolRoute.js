module.exports = (server) => {
    const schoolController = require('../controllers/schoolController');

    server.route('/schools')
        .get(schoolController.list_all_schools)
        .post(schoolController.create_a_school);

    server.route('/schools/:school_id') 
        .get(schoolController.get_a_school)
        .put(schoolController.update_a_school)
        .delete(schoolController.delete_a_school);

    server.route('/schools/:school_id/:user_id')
        .put(schoolController.add_user_to_project);
    
    server.route('/school/:school_name')
        .get(schoolController.get_a_school_by_name);
}