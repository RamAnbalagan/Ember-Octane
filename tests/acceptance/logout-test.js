import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function(){
    this.owner.register('service:auth',StubAuthService);
  })

  test('visiting /teams and logging out', async function(assert) {
    const auth = this.owner.lookup('service:auth');
    auth._setUserId('1');
    await visit('/teams');
    assert.equal(currentURL(), '/teams');
    await click('.team-sidebar__logout-button');
    assert.equal(currentURL(),'/login');

    assert.ok(!auth._getUserId(), 'user is logged out');
  });
});
