import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаВремени: DS.attr('i-i-s-modul-ucheta-единица-времени'),
  затрачВремя: DS.attr('decimal'),
  наименование: DS.attr('i-i-s-modul-ucheta-услуга')
});

export let ValidationRules = {
  единицаВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-услуги.validations.единицаВремени.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  затрачВремя: {
    descriptionKey: 'models.i-i-s-modul-ucheta-услуги.validations.затрачВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-modul-ucheta-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-modul-ucheta-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    затрачВремя: attr('Затраченное время', { index: 1 }),
    единицаВремени: attr('Единица времени', { index: 2 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-modul-ucheta-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    затрачВремя: attr('Затраченное время', { index: 1 }),
    единицаВремени: attr('Единица времени', { index: 2 })
  });
};
