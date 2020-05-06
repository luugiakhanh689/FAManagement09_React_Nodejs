import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/assigment/importer/assigmentImporterSelectors';
import AssigmentService from 'modules/assigment/assigmentService';
import fields from 'modules/assigment/importer/assigmentImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'ASSIGMENT_IMPORTER',
  selectors,
  AssigmentService.import,
  fields,
  i18n('entities.assigment.importer.fileName'),
);
