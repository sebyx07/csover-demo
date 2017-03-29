import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | support requests/generate report agent', function() {
  setupComponentTest('support-requests/generate-report-agent', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#support-requests/generate-report-agent}}
    //     template content
    //   {{/support-requests/generate-report-agent}}
    // `);

    this.render(hbs`{{support-requests/generate-report-agent}}`);
    expect(this.$()).to.have.length(1);
  });
});
