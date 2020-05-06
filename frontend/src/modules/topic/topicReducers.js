import list from 'modules/topic/list/topicListReducers';
import form from 'modules/topic/form/topicFormReducers';
import view from 'modules/topic/view/topicViewReducers';
import destroy from 'modules/topic/destroy/topicDestroyReducers';
import importerReducer from 'modules/topic/importer/topicImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
