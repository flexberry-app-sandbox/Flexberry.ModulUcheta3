import { Serializer as ДиректорSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-директор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДиректорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
