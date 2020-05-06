import list from 'modules/evaluation/list/evaluationListReducers';
import form from 'modules/evaluation/form/evaluationFormReducers';
import view from 'modules/evaluation/view/evaluationViewReducers';
import destroy from 'modules/evaluation/destroy/evaluationDestroyReducers';
import importerReducer from 'modules/evaluation/importer/evaluationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
