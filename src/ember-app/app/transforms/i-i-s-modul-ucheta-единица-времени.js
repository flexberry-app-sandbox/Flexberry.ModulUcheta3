import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницаВремениEnum from '../enums/i-i-s-modul-ucheta-единица-времени';

export default FlexberryEnum.extend({
  enum: ЕдиницаВремениEnum,
  sourceType: 'IIS.Modul_ucheta.ЕдиницаВремени'
});
