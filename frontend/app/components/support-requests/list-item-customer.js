import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item', 'support-requests--list-item-customer'],
  actions: {
    toggleView(){
      this.toggleProperty('showDetails');
    },
    delete(){
      this.get('list').send('deleteRequest', this.get('supportRequest'))
    }
  }
});
