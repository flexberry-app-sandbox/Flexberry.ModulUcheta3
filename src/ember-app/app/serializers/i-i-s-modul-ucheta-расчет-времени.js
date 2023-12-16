import { Serializer as РасчетВремениSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-расчет-времени';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасчетВремениSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
