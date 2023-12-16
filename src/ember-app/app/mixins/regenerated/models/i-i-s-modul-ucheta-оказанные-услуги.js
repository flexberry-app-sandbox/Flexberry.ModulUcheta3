import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-договор', { inverse: null, async: false }),
  услуги: DS.belongsTo('i-i-s-modul-ucheta-услуги', { inverse: null, async: false }),
  расчетВремени: DS.belongsTo('i-i-s-modul-ucheta-расчет-времени', { inverse: 'оказанныеУслуги', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказанные-услуги.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказанные-услуги.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказанные-услуги.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказанные-услуги.validations.расчетВремени.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказанныеУслугиE', 'i-i-s-modul-ucheta-оказанные-услуги', {
    дата: attr('Дата', { index: 0 }),
    услуги: belongsTo('i-i-s-modul-ucheta-услуги', 'Наименование услуги', {
      затрачВремя: attr('Затраченное время', { index: 2 }),
      единицаВремени: attr('Единица времени', { index: 3 })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
