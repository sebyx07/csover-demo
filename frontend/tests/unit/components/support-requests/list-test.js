import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import sinon from 'sinon';
import Ember from 'ember';

describe('Unit | Component | support requests/list', function() {
  setupComponentTest('support-requests/list', {
    // Specify the other units that are required for this test
    needs: ['service:toastr', 'service:currentUser', 'model:support-request'],
    unit: true
  });

  describe('actions', function () {
    describe('deleteRequest', function () {
      it('destroys the record, toasts success and decrements recordCount', function () {
        const c = this.subject({toastr: {success: sinon.spy()}, recordCount: 1});
        const req = {destroyRecord() {
          return Ember.RSVP.resolve();
        }};

        Ember.run(() => c.send('deleteRequest', req));
        expect(c.get('toastr.success.calledOnce')).to.be.true; // jshint ignore:line
        return expect(c.get('recordCount')).to.eq(0);
      });
    });

    describe('newRequests', function () {
      it('saves the record, toasts success and resets the newComponent', function () {
        const c = this.subject({toastr: {success: sinon.spy()}});
        const req = {save() {
          return Ember.RSVP.resolve();
        }};
        const newComponent = Ember.Object.create();

        Ember.run(() => c.send('newRequests', req, newComponent));
        expect(c.get('toastr.success.calledOnce')).to.be.true; // jshint ignore:line
        expect(newComponent.get('new')).to.be.false; // jshint ignore:line
        expect(newComponent.get('message')).to.eq(''); // jshint ignore:line
        return expect(newComponent.get('title')).to.eq('');
      });
    });
  });
});
