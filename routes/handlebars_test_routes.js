const Job = require('../lib/job');

const layout1 = {
  method: 'GET',
  path: '/layout-1',
  handler(req, reply) {
    Job.find({}).then((res) => {
      const view = 'home';
      const context = { me: 'Matt', items: res };
      reply.view(view, context);
    });
  },
};

const layout2 = {
  method: 'GET',
  path: '/layout-2',
  handler(req, reply) {
    const id = req.url.query.id;

    Job.find({ jobId: id }).then((res) => {
      const view = 'away';
      const context = { me: 'Matt', items: res };
      reply.view(view, context);
    });
  },
};

module.exports = {
  layout1,
  layout2,
};
