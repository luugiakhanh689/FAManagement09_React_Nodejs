import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/evaluation/importer/evaluationImporterSelectors';
import EvaluationService from 'modules/evaluation/evaluationService';
import fields from 'modules/evaluation/importer/evaluationImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'EVALUATION_IMPORTER',
  selectors,
  EvaluationService.import,
  fields,
  i18n('entities.evaluation.importer.fileName'),
);
