const dbManager = require('../lib/db/db_manager');

dbManager.get('jobMatches').find({}).then((res) => {
  console.log(res);
});

const layout1 = {
  method: 'GET',
  path: '/layout-1',
  handler(req, reply) {
    dbManager.get('jobMatches').find({}).then((res) => {
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

    dbManager.get('jobMatches').find({ jobId: id }).then((res) => {
      console.log(res);
      const view = 'away';
      const context = { me: 'Matt', items: res };
      const layout = 'layout_2';
      reply.view(view, context, { layout });
    });
  },
};

module.exports = {
  layout1,
  layout2,
};
