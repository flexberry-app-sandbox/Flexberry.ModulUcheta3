import { Serializer as ОказанныеУслугиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-оказанные-услуги';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОказанныеУслугиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
