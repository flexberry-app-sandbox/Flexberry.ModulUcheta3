import {
  defineNamespace,
  defineProjections,
  Model as ОказанныеУслугиMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-оказанные-услуги';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказанныеУслугиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
