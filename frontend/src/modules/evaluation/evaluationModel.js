import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.evaluation.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  trainee: new RelationToOneField('trainee', label('trainee'), {}),
  course: new RelationToOneField('course', label('course'), {}),
  topic: new RelationToOneField('topic', label('topic'), {}),
  process: new DecimalField('process', label('process'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  timeliness: new DecimalField('timeliness', label('timeliness'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  teamwork: new DecimalField('teamwork', label('teamwork'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  workquality: new DecimalField('workquality', label('workquality'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  presComm: new DecimalField('presComm', label('presComm'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  academicMark: new DecimalField('academicMark', label('academicMark'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  softskill: new DecimalField('softskill', label('softskill'), {
    "scale": 2,
    "min": 1,
    "max": 100
  }),
  attDis: new DecimalField('attDis', label('attDis'), {
    "min": 1,
    "max": 100,
    "scale": 2
  }),
  comment: new StringField('comment', label('comment'), {}),
  finalGrade: new DecimalField('finalGrade', label('finalGrade'), {
    "scale": 2,
    "min": 1,
    "max": 100
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
  processRange: new DecimalRangeField(
    'processRange',
    label('processRange'),
  ),
  timelinessRange: new DecimalRangeField(
    'timelinessRange',
    label('timelinessRange'),
  ),
  teamworkRange: new DecimalRangeField(
    'teamworkRange',
    label('teamworkRange'),
  ),
  workqualityRange: new DecimalRangeField(
    'workqualityRange',
    label('workqualityRange'),
  ),
  presCommRange: new DecimalRangeField(
    'presCommRange',
    label('presCommRange'),
  ),
  academicMarkRange: new DecimalRangeField(
    'academicMarkRange',
    label('academicMarkRange'),
  ),
  softskillRange: new DecimalRangeField(
    'softskillRange',
    label('softskillRange'),
  ),
  attDisRange: new DecimalRangeField(
    'attDisRange',
    label('attDisRange'),
  ),
  finalGradeRange: new DecimalRangeField(
    'finalGradeRange',
    label('finalGradeRange'),
  ),
};

export default {
  fields,
};
