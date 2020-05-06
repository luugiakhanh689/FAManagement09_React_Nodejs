module.exports = (app) => {
  app.post(`/assigment`, require('./assigmentCreate'));
  app.put(`/assigment/:id`, require('./assigmentUpdate'));
  app.post(`/assigment/import`, require('./assigmentImport'));
  app.delete(`/assigment`, require('./assigmentDestroy'));
  app.get(
    `/assigment/autocomplete`,
    require('./assigmentAutocomplete'),
  );
  app.get(`/assigment`, require('./assigmentList'));
  app.get(`/assigment/:id`, require('./assigmentFind'));
};
