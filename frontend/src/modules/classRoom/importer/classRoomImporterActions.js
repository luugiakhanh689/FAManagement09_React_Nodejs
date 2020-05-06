import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/classRoom/importer/classRoomImporterSelectors';
import ClassRoomService from 'modules/classRoom/classRoomService';
import fields from 'modules/classRoom/importer/classRoomImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CLASSROOM_IMPORTER',
  selectors,
  ClassRoomService.import,
  fields,
  i18n('entities.classRoom.importer.fileName'),
);
