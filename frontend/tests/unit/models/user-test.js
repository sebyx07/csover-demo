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

  ['Customer', 'Agent', 'Admin'].forEach((role) => {
    const propertyName = `is${role}`;

    describe(propertyName, function () {
      it('checks if it is role', function () {
        const model = this.subject({role: role.toLowerCase()});
        return expect(model.get(propertyName)).to.be.true;
      });
    });
  });
});
