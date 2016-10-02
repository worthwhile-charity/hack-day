const trace = description => data => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== 'PRODUCTION') console.log(description, data);
  return data;
};

module.exports = trace;
