import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import BooleanField from 'modules/shared/fields/booleanField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.assigment.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  codeClass: new RelationToOneField(
    'codeClass',
    label('codeClass'),
    {
      required: true,
    },
  ),
  trainerID: new RelationToOneField(
    'trainerID',
    label('trainerID'),
    {},
  ),
  fromDate: new DateField('fromDate', label('fromDate'), {
    required: true,
  }),
  toDate: new DateField('toDate', label('toDate'), {
    required: true,
  }),
  status: new BooleanField('status', label('status'), {
    noLabel: i18n('common.cancel'),
    yesLabel: i18n('common.active'),
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
  fromDateRange: new DateRangeField(
    'fromDateRange',
    label('fromDateRange'),
  ),
  toDateRange: new DateRangeField(
    'toDateRange',
    label('toDateRange'),
  ),
};

export default {
  fields,
};
