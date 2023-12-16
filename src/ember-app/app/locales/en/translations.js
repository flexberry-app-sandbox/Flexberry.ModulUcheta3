import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModul_uchetaДиректорLForm from './forms/i-i-s-modul-ucheta-директор-l';
import IISModul_uchetaДоговорLForm from './forms/i-i-s-modul-ucheta-договор-l';
import IISModul_uchetaКлиентLForm from './forms/i-i-s-modul-ucheta-клиент-l';
import IISModul_uchetaРасчетВремениLForm from './forms/i-i-s-modul-ucheta-расчет-времени-l';
import IISModul_uchetaУслугиLForm from './forms/i-i-s-modul-ucheta-услуги-l';
import IISModul_uchetaДиректорEForm from './forms/i-i-s-modul-ucheta-директор-e';
import IISModul_uchetaДоговорEForm from './forms/i-i-s-modul-ucheta-договор-e';
import IISModul_uchetaКлиентEForm from './forms/i-i-s-modul-ucheta-клиент-e';
import IISModul_uchetaРасчетВремениEForm from './forms/i-i-s-modul-ucheta-расчет-времени-e';
import IISModul_uchetaУслугиEForm from './forms/i-i-s-modul-ucheta-услуги-e';
import IISModul_uchetaДиректорModel from './models/i-i-s-modul-ucheta-директор';
import IISModul_uchetaДоговорModel from './models/i-i-s-modul-ucheta-договор';
import IISModul_uchetaКлиентModel from './models/i-i-s-modul-ucheta-клиент';
import IISModul_uchetaОказанныеУслугиModel from './models/i-i-s-modul-ucheta-оказанные-услуги';
import IISModul_uchetaРасчетВремениModel from './models/i-i-s-modul-ucheta-расчет-времени';
import IISModul_uchetaУслугиModel from './models/i-i-s-modul-ucheta-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-директор': IISModul_uchetaДиректорModel,
    'i-i-s-modul-ucheta-договор': IISModul_uchetaДоговорModel,
    'i-i-s-modul-ucheta-клиент': IISModul_uchetaКлиентModel,
    'i-i-s-modul-ucheta-оказанные-услуги': IISModul_uchetaОказанныеУслугиModel,
    'i-i-s-modul-ucheta-расчет-времени': IISModul_uchetaРасчетВремениModel,
    'i-i-s-modul-ucheta-услуги': IISModul_uchetaУслугиModel
  },

  'application-name': 'Modul_ucheta',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul_ucheta',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_ucheta',
          title: 'Modul_ucheta'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        справочник: {
          caption: 'Справочник',
          title: 'Справочник',
          'i-i-s-modul-ucheta-директор-l': {
            caption: 'Директор',
            title: ''
          },
          'i-i-s-modul-ucheta-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-modul-ucheta-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-modul-ucheta-расчет-времени-l': {
            caption: 'Расчет времени',
            title: ''
          }
        },
        прочее: {
          caption: 'Прочее',
          title: 'Прочее',
          'i-i-s-modul-ucheta-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-ucheta-директор-l': IISModul_uchetaДиректорLForm,
    'i-i-s-modul-ucheta-договор-l': IISModul_uchetaДоговорLForm,
    'i-i-s-modul-ucheta-клиент-l': IISModul_uchetaКлиентLForm,
    'i-i-s-modul-ucheta-расчет-времени-l': IISModul_uchetaРасчетВремениLForm,
    'i-i-s-modul-ucheta-услуги-l': IISModul_uchetaУслугиLForm,
    'i-i-s-modul-ucheta-директор-e': IISModul_uchetaДиректорEForm,
    'i-i-s-modul-ucheta-договор-e': IISModul_uchetaДоговорEForm,
    'i-i-s-modul-ucheta-клиент-e': IISModul_uchetaКлиентEForm,
    'i-i-s-modul-ucheta-расчет-времени-e': IISModul_uchetaРасчетВремениEForm,
    'i-i-s-modul-ucheta-услуги-e': IISModul_uchetaУслугиEForm
  },

});

export default translations;
