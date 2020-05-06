module.exports = (app) => {
  app.post(`/topic`, require('./topicCreate'));
  app.put(`/topic/:id`, require('./topicUpdate'));
  app.post(`/topic/import`, require('./topicImport'));
  app.delete(`/topic`, require('./topicDestroy'));
  app.get(
    `/topic/autocomplete`,
    require('./topicAutocomplete'),
  );
  app.get(`/topic`, require('./topicList'));
  app.get(`/topic/:id`, require('./topicFind'));
};
