import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item', 'support-requests--list-item-agent'],
  actions: {
    toggleView(){
      this.toggleProperty('showDetails');
    },
    resolve(){
      this.get('list').send('resolveRequest', this.get('supportRequest'))
    }
  }
});
