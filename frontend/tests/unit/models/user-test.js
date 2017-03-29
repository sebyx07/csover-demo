import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | user', function() {
  setupModelTest('user', {
    // Specify the other units that are required for this test.
      needs: ['model:support-request']
  });

  // Replace this with your real tests.
  it('exists', function() {
    let model = this.subject();
    // var store = this.store();
    return expect(model).to.be.ok;
  });
});
