import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | input/google recaptcha', function() {
  setupComponentTest('input/google-recaptcha', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#input/google-recaptcha}}
    //     template content
    //   {{/input/google-recaptcha}}
    // `);

    this.render(hbs`{{input/google-recaptcha}}`);
    expect(this.$()).to.have.length(1);
  });
});
