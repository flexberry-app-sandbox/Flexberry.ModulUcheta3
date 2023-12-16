import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДиректорMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-директор';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДиректорMixin, Validations, {
});

defineProjections(Model);

export default Model;
