import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | customers dashboard', function() {
  setupTest('route:customers-dashboard', {
    // Specify the other units that are required for this test.
    needs: ['service:current-user', 'service:toastr']
  });

  it('exists', function() {
    let route = this.subject();
    return expect(route).to.be.ok;
  });
});
