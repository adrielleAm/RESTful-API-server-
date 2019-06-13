'use strict';

var mogoose = require('mongoose');

Message = mogoose.model('Messages');

exports.list_all_messages = function(req, res){
    Message.find({}, function(err, msg){
        if(err)
            res.send(err);
            res.send(msg)
    });
};

exports.create_a_message = function(req, res){
    var newMsg = new Message(req.body);

    newMsg.save(function(err, msg){
        if(err)
            res.send(err);

        res.send(msg);
    })
};

exports.read_a_message = function(req, res){
    Message.findById(req.params.msgId, function(err, msg){
        if(err)
            res.send(err);

        res.send(msg);
    })
}

exports.update_a_message = function(req, res){
    Message.findOneAndUpdate({_id: req.params.msgId}, req.body, {new: true}, function(ree, msg){
        if(err)
        res.send(err);

    res.send(msg);
    })
}

exports.delete_a_message = function(req, res){
    Message.remove({
        _id: req.params.msgId
    }, function(err, msg){
        if(err)
        res.send(err);

    res.send('Message successfully deleted');
    })
}