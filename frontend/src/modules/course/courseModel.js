import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.course.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  codeClass: new RelationToOneField('codeClass', label('codeClass'), {}),
  iDCourse: new StringField('iDCourse', label('iDCourse'), {
    "required": true
  }),
  courseName: new StringField('courseName', label('courseName'), {
    "required": true
  }),
  lectureName: new StringField('lectureName', label('lectureName'), {
    "required": true
  }),
  fromTime: new DateField('fromTime', label('fromTime'), {
    "required": true
  }),
  toTime: new DateField('toTime', label('toTime'), {
    "required": true
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  fromTimeRange: new DateRangeField(
    'fromTimeRange',
    label('fromTimeRange'),
  ),
  toTimeRange: new DateRangeField(
    'toTimeRange',
    label('toTimeRange'),
  ),
};

export default {
  fields,
};
