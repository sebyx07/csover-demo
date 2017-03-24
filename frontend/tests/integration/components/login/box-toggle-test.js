import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | login/box toggle', function() {
  setupComponentTest('login/box-toggle', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#login/box-toggle}}
    //     template content
    //   {{/login/box-toggle}}
    // `);

    this.render(hbs`{{login/box-toggle}}`);
    expect(this.$()).to.have.length(1);
  });
});
