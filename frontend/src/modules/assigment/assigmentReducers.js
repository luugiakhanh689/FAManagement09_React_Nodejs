import list from 'modules/assigment/list/assigmentListReducers';
import form from 'modules/assigment/form/assigmentFormReducers';
import view from 'modules/assigment/view/assigmentViewReducers';
import destroy from 'modules/assigment/destroy/assigmentDestroyReducers';
import importerReducer from 'modules/assigment/importer/assigmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
