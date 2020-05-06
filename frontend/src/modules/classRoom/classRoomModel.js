import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';

function label(name) {
  return i18n(`entities.classRoom.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.classRoom.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  codeClass: new StringField('codeClass', label('codeClass'), {
    "required": true
  }),
  className: new StringField('className', label('className'), {
    "required": true
  }),
  limit: new IntegerField('limit', label('limit'), {
    "required": true,
    "min": 1,
    "max": 100
  }),
  admin: new EnumeratorField('admin', label('admin'), [
    { id: 'HanLTP', label: enumeratorLabel('admin', 'HanLTP') },
    { id: 'DanPL', label: enumeratorLabel('admin', 'DanPL') },
    { id: 'BinhNT44', label: enumeratorLabel('admin', 'BinhNT44') },
    { id: 'VanTT7', label: enumeratorLabel('admin', 'VanTT7') },
  ],{
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
  limitRange: new IntegerRangeField(
    'limitRange',
    label('limitRange'),
  ),
};

export default {
  fields,
};
