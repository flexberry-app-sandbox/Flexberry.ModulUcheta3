import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доступно: DS.attr('decimal'),
  использовано: DS.attr('decimal'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-договор', { inverse: null, async: false }),
  оказанныеУслуги: DS.hasMany('i-i-s-modul-ucheta-оказанные-услуги', { inverse: 'расчетВремени', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-времени.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-времени.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-времени.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-времени.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказанныеУслуги: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-времени.validations.оказанныеУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетВремениE', 'i-i-s-modul-ucheta-расчет-времени', {
    дата: attr('Дата', { index: 0 }),
    договор: belongsTo('i-i-s-modul-ucheta-договор', 'Номер договора', {
      статус: attr('Статус', { index: 2 }),
      длительность: attr('Длительность', { index: 3 }),
      единицаВремени: attr('Единица времени', { index: 4 })
    }, { index: 1, displayMemberPath: 'номер' }),
    использовано: attr('Использовано', { index: 5 }),
    доступно: attr('Доступно', { index: 6 }),
    оказанныеУслуги: hasMany('i-i-s-modul-ucheta-оказанные-услуги', 'Оказанные услуги', {
      дата: attr('Дата', { index: 0 }),
      услуги: belongsTo('i-i-s-modul-ucheta-услуги', 'Наименование услуги', {
        затрачВремя: attr('Затраченное время', { index: 2 }),
        единицаВремени: attr('Единица времени', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('РасчетВремениL', 'i-i-s-modul-ucheta-расчет-времени', {
    дата: attr('Дата', { index: 0 }),
    договор: belongsTo('i-i-s-modul-ucheta-договор', 'Номер договора', {
      номер: attr('Номер договора', { index: 1 }),
      статус: attr('Статус', { index: 2 }),
      длительность: attr('Длительность', { index: 3 }),
      единицаВремени: attr('Единица времени', { index: 4 })
    }, { index: -1, hidden: true }),
    использовано: attr('Использовано', { index: 5 }),
    доступно: attr('Доступно', { index: 6 })
  });
};
