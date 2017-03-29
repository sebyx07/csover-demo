import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | support requests/list item agent', function() {
  setupComponentTest('support-requests/list-item-agent', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#support-requests/list-item-agent}}
    //     template content
    //   {{/support-requests/list-item-agent}}
    // `);

    this.render(hbs`{{support-requests/list-item-agent}}`);
    expect(this.$()).to.have.length(1);
  });
});
