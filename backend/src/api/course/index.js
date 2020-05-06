module.exports = (app) => {
  app.post(`/course`, require('./courseCreate'));
  app.put(`/course/:id`, require('./courseUpdate'));
  app.post(`/course/import`, require('./courseImport'));
  app.delete(`/course`, require('./courseDestroy'));
  app.get(
    `/course/autocomplete`,
    require('./courseAutocomplete'),
  );
  app.get(`/course`, require('./courseList'));
  app.get(`/course/:id`, require('./courseFind'));
};
