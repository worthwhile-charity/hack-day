const trace = description => data => {
  // eslint-disable-next-line no-console
  console.log(description, data);
  return data;
};

module.exports = trace;
