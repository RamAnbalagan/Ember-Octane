import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import StubbedAuthService from 'shlack/tests/stubs/auth-service';

module('Unit | Route | login', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', StubbedAuthService);
  });


  test('visiting /login', async function(assert){
    await visit('/login');
    assert.equal(currentURL(), '/login');

    await fillIn('select', '1');

    await click('input[type="submit]');
    assert.equal(currentURL(), '/teams');
  });
});
