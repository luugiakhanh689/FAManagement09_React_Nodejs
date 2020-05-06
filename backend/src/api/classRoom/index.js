module.exports = (app) => {
  app.post(`/class-room`, require('./classRoomCreate'));
  app.put(`/class-room/:id`, require('./classRoomUpdate'));
  app.post(`/class-room/import`, require('./classRoomImport'));
  app.delete(`/class-room`, require('./classRoomDestroy'));
  app.get(
    `/class-room/autocomplete`,
    require('./classRoomAutocomplete'),
  );
  app.get(`/class-room`, require('./classRoomList'));
  app.get(`/class-room/:id`, require('./classRoomFind'));
};
