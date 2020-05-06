import list from 'modules/classRoom/list/classRoomListReducers';
import form from 'modules/classRoom/form/classRoomFormReducers';
import view from 'modules/classRoom/view/classRoomViewReducers';
import destroy from 'modules/classRoom/destroy/classRoomDestroyReducers';
import importerReducer from 'modules/classRoom/importer/classRoomImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
