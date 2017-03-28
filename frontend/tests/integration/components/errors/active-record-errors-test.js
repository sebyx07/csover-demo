import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | errors/active record errors', function() {
  setupComponentTest('errors/active-record-errors', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#errors/active-record-errors}}
    //     template content
    //   {{/errors/active-record-errors}}
    // `);

    this.render(hbs`{{errors/active-record-errors}}`);
    expect(this.$()).to.have.length(1);
  });
});
