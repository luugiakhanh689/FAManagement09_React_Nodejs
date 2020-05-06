import list from 'modules/course/list/courseListReducers';
import form from 'modules/course/form/courseFormReducers';
import view from 'modules/course/view/courseViewReducers';
import destroy from 'modules/course/destroy/courseDestroyReducers';
import importerReducer from 'modules/course/importer/courseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
