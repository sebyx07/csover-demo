import Ember from 'ember';
import DataComponent from 'crossover/mixins/data-component';

export default Ember.Component.extend(DataComponent, {
  toastr: Ember.inject.service(),
  classNames: ['panel panel-default', 'support-requests'],
  modelName: 'support-request',

  actions: {
    deleteRequest(supportRequest){
      supportRequest.destroyRecord().then(() =>{
        this.get('toastr').success('Message has been deleted');
        this.decrementProperty('recordCount');
      })
    }
  }
});
