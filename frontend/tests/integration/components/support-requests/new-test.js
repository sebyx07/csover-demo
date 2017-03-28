import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | support requests/new', function() {
  setupComponentTest('support-requests/new', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#support-requests/new}}
    //     template content
    //   {{/support-requests/new}}
    // `);

    this.render(hbs`{{support-requests/new}}`);
    expect(this.$()).to.have.length(1);
  });
});
