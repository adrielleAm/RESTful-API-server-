'use strict';

module.exports = function(app){
    var msg = require('../controllers/msgController');

    app.route('/messages')
        .get(msg.list_all_messages)
        .post(msg.create_a_message);


    app.route('/messages/:msgId')
        .get(msg.read_a_message)
        .put(msg.update_a_message)
        .delete(msg.delete_a_message);
};