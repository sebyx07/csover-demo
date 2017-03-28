import Ember from 'ember';
const toastr = window.toastr;

export default Ember.Service.extend({
  init(){
    this._super(...arguments);
    toastr.options = {
      'closeButton': false,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    };
    this.set('toastr', toastr);
  },

  info(){
    this.toastr.info(...arguments);
  },

  warning(){
    this.toastr.warning(...arguments);
  },

  success(){
    this.toastr.success(...arguments);
  },

  error(){
    this.toastr.error(...arguments);
  },

  remove(){
    this.toastr.remove();
  },

  clear(){
    this.toastr.clear();
  }
});
