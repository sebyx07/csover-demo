import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | support requests/list', function() {
  setupComponentTest('support-requests/list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#support-requests/list}}
    //     template content
    //   {{/support-requests/list}}
    // `);

    this.render(hbs`{{support-requests/list}}`);
    expect(this.$()).to.have.length(1);
  });
});
