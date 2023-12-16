import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасчетВремениMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-расчет-времени';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасчетВремениMixin, Validations, {
});

defineProjections(Model);

export default Model;
