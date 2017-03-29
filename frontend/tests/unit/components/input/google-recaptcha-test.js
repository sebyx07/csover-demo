import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import Ember from 'ember';
import sinon from 'sinon';

describe('Unit | Component | input/google recaptcha', function() {
  setupComponentTest('input/google-recaptcha', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  describe('actions', function () {
    describe('onCaptchaResolved', function () {
      it('sets value', function () {
        const c = this.subject(),
          val = 1;
        Ember.run(() => c.send('onCaptchaResolved', val));
        expect(c.get('value')).to.eq(val);
      });
    });
    describe('onCaptchaExpired', function () {
      it('sets value to false', function () {
        const c = this.subject();
        Ember.run(() => c.send('onCaptchaExpired'));
        expect(c.get('value')).to.eq(false);
      });
    });

    describe('reset', function () {
      it('calls resetReCaptcha', function () {
        const c = this.subject({
          gRecaptcha: {
            resetReCaptcha: sinon.spy()
          }
        });
        Ember.run(() => c.send('reset'));
        return expect(c.get('gRecaptcha.resetReCaptcha.calledOnce')).to.be.true;
      });
    });
  });
});
