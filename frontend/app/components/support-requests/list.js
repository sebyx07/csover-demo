import Ember from 'ember';
import DataComponent from 'crossover/mixins/data-component';

export default Ember.Component.extend(DataComponent, {
  classNames: ['panel panel-default', 'support-requests'],
  modelName: 'support-request'
});
