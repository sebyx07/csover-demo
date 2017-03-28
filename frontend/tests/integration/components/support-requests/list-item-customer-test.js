import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | support requests/list item customer', function() {
  setupComponentTest('support-requests/list-item-customer', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#support-requests/list-item-customer}}
    //     template content
    //   {{/support-requests/list-item-customer}}
    // `);

    this.render(hbs`{{support-requests/list-item-customer}}`);
    expect(this.$()).to.have.length(1);
  });
});
