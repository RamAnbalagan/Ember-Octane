import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login-form', function(hooks) {
  setupRenderingTest(hooks);

  test('initially no user selected',async function(assert) {
    await render(hbs `<LoginForm />`);

    const select = find('select[data-testId="user-select"]');
    const button = find('input[type="submit"]');

    assert.equal(select.value, '', '<select> for user is initially empty');
    assert.equal(button.disabled, true, '<button> is initially disabled');

  });

  test('after selecting a user, the signin button is enabled', async function(assert){

    await render(hbs`<LoginForm />`);
    const button = find('input[type="submit"]');
    assert.equal(button.disabled, false, '<button> is initially disabled');
    await fillIn('select[data-testId="user-select"]', '1');
    assert.equal(button.disabled, false, '<button> is now enabled');
  });

});
