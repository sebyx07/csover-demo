import Ember from 'ember';
import DataComponent from 'crossover/mixins/data-component';

export default Ember.Component.extend(DataComponent, {
  toastr: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  classNames: ['panel panel-default', 'support-requests--list'],
  modelName: 'support-request',

  refresh(){
    this.set('model', undefined);
    this.fetchModel();
  },

  actions: {
    deleteRequest(supportRequest){
      supportRequest.destroyRecord().then(() =>{
        this.get('toastr').success('Message has been deleted');
        this.refresh();
      })
    },
    newRequests(supportRequest, newComponent){
      supportRequest.save().then(() => {
        this.get('toastr').success('Request has been sent');
        newComponent.setProperties({
          new: false,
          message: '',
          title: ''
        });
        this.refresh();
      });
    },

    resolveRequest(supportRequest){
      supportRequest.set('closedAt', new Date());
      supportRequest.save().then(() => {
        this.get('toastr').success('Request has been resolved');
        this.refresh();
      });
    }
  }
});
