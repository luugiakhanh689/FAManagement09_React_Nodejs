import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/course/importer/courseImporterSelectors';
import CourseService from 'modules/course/courseService';
import fields from 'modules/course/importer/courseImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'COURSE_IMPORTER',
  selectors,
  CourseService.import,
  fields,
  i18n('entities.course.importer.fileName'),
);
