import Ember from 'ember';
import DataComponent from 'crossover/mixins/data-component';

export default Ember.Component.extend(DataComponent, {
  toastr: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  classNames: ['panel panel-default', 'support-requests--list'],
  modelName: 'support-request',

  didInsertElement(){
    this._super(...arguments);
    this.watchScroll();
  },

  watchScroll(){
    const $ul = this.$('ul.list-group');
    const tbodyEl = $ul[0];

    $ul.bind('scroll', () => {
      const currentPosition = $ul.scrollTop() + $ul.innerHeight();
      const height = tbodyEl.scrollHeight;
      if(currentPosition >= height && this.get('hasMoreToLoad')){
        this.send('goToPage', this.get('queryOptions.page.number') + 1);
      }
    });
  },

  hasMoreToLoad: Ember.computed('queryOptions.page.number', 'pageCount', function(){
    const currentPage = this.get('queryOptions.page.number');
    const maxPages = this.get('pageCount');
    console.log(currentPage, maxPages);
    return currentPage < maxPages;
  }),

  _setModel(model){
    const currentModel = this.get('model');
    if (currentModel) {
      model.forEach((record) => {
        currentModel.pushObject(record._internalModel);
      });
    } else {
      this.set('model', model);
    }
    this.setProperties({
      loaded: true,
      pageCount: model.meta['page-count'],
      recordCount: model.meta['record-count']
    });
  },

  refresh(){
    this.set('model', undefined);
    this.fetchModel();
  },

  actions: {
    deleteRequest(supportRequest){
      supportRequest.destroyRecord().then(() =>{
        this.get('toastr').success('Request has been deleted');
        this.decrementProperty('recordCount');
      });
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
      });
    }
  }
});
