import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-ucheta-директор-l');
  this.route('i-i-s-modul-ucheta-директор-e',
  { path: 'i-i-s-modul-ucheta-директор-e/:id' });
  this.route('i-i-s-modul-ucheta-директор-e.new',
  { path: 'i-i-s-modul-ucheta-директор-e/new' });
  this.route('i-i-s-modul-ucheta-договор-l');
  this.route('i-i-s-modul-ucheta-договор-e',
  { path: 'i-i-s-modul-ucheta-договор-e/:id' });
  this.route('i-i-s-modul-ucheta-договор-e.new',
  { path: 'i-i-s-modul-ucheta-договор-e/new' });
  this.route('i-i-s-modul-ucheta-клиент-l');
  this.route('i-i-s-modul-ucheta-клиент-e',
  { path: 'i-i-s-modul-ucheta-клиент-e/:id' });
  this.route('i-i-s-modul-ucheta-клиент-e.new',
  { path: 'i-i-s-modul-ucheta-клиент-e/new' });
  this.route('i-i-s-modul-ucheta-расчет-времени-l');
  this.route('i-i-s-modul-ucheta-расчет-времени-e',
  { path: 'i-i-s-modul-ucheta-расчет-времени-e/:id' });
  this.route('i-i-s-modul-ucheta-расчет-времени-e.new',
  { path: 'i-i-s-modul-ucheta-расчет-времени-e/new' });
  this.route('i-i-s-modul-ucheta-услуги-l');
  this.route('i-i-s-modul-ucheta-услуги-e',
  { path: 'i-i-s-modul-ucheta-услуги-e/:id' });
  this.route('i-i-s-modul-ucheta-услуги-e.new',
  { path: 'i-i-s-modul-ucheta-услуги-e/new' });
});

export default Router;
