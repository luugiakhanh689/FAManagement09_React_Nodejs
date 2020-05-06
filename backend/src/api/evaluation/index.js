module.exports = (app) => {
  app.post(`/evaluation`, require('./evaluationCreate'));
  app.put(`/evaluation/:id`, require('./evaluationUpdate'));
  app.post(`/evaluation/import`, require('./evaluationImport'));
  app.delete(`/evaluation`, require('./evaluationDestroy'));
  app.get(
    `/evaluation/autocomplete`,
    require('./evaluationAutocomplete'),
  );
  app.get(`/evaluation`, require('./evaluationList'));
  app.get(`/evaluation/:id`, require('./evaluationFind'));
};
