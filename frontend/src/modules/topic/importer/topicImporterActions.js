import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/topic/importer/topicImporterSelectors';
import TopicService from 'modules/topic/topicService';
import fields from 'modules/topic/importer/topicImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'TOPIC_IMPORTER',
  selectors,
  TopicService.import,
  fields,
  i18n('entities.topic.importer.fileName'),
);
