import {
  defineNamespace,
  defineProjections,
  Model as РасчетВремениMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-расчет-времени';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетВремениMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
