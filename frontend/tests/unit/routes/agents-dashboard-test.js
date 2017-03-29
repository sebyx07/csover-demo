import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | agents dashboard', function() {
  setupTest('route:agents-dashboard', {
    // Specify the other units that are required for this test.
    needs: ['service:current-user', 'service:toastr']
  });

  it('exists', function() {
    let route = this.subject();
    return expect(route).to.be.ok;
  });
});
