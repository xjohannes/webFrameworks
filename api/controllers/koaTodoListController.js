'use strict';

const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(ctx) {
  return Task.find({}, function(err, allTasks) {
    if (err) {
      ctx.body = err;
    }
    ctx.body = allTasks;
  });
};

exports.create_a_task = function(ctx) {
  const new_task = new Task(ctx.request.body);
  return new_task.save(function(err, task) {
    if (err) {
      ctx.body = err;
    }
    ctx.body = task;
  });
};

exports.read_a_task = function(ctx, id) {
  return Task.findById(id, function(err, task) {
    if (err) {
      ctx.body = err;
    }
    ctx.body = task;
  });
};


exports.update_a_task = function(ctx, id) {
  return Task.findOneAndUpdate({_id: id}, ctx.request.body, {new: true}, function(err, task) {
    if (err) {
      ctx.body = err;
    }
    ctx.body = task;
  });
};

exports.delete_a_task = function(ctx, id) {
  return Task.remove({
    _id: id
  }, function(err, task) {
    if (err) {
      ctx.body = err;
    }
    ctx.body = { message: `Task ${id} successfully deleted ${task.ok}` };
  });
};
