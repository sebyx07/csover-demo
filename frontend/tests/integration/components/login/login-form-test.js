import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | login/login form', function() {
  setupComponentTest('login/login-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#login/login-form}}
    //     template content
    //   {{/login/login-form}}
    // `);

    this.render(hbs`{{login/login-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
