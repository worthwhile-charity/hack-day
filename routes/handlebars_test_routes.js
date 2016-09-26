const layout1 = {
  method: 'GET',
  path: '/layout-1',
  handler(req, reply) {
    const view = 'home';
    const context = { me: 'Matt', items: Array.from({ length: 10 }, (_, i) => i + 1) };
    reply.view(view, context);
  },
};

const layout2 = {
  method: 'GET',
  path: '/layout-2',
  handler(req, reply) {
    const view = 'away';
    const context = { me: 'Matt', items: Array.from({ length: 10 }, (_, i) => i + 1) };
    const layout = 'layout_2';
    reply.view(view, context, { layout });
  },
};

module.exports = {
  layout1,
  layout2,
};
