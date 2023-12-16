import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОказанныеУслугиMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-оказанные-услуги';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОказанныеУслугиMixin, Validations, {
});

defineProjections(Model);

export default Model;
