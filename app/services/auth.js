import Service, { inject as service } from '@ember/service';
import Router from 'shlack/router';

const USER_KEY = 'shlack-userId';

export default class AuthService extends Service {
  @service router;

  _getUserId() {
    return window.localStorage.getItem(USER_KEY);
  }
  _setUserId(userId) {
    window.localStorage.setItem(USER_KEY, userId);
  }
  loginWithUserId(userId) {
    this.router.transitionTo('teams');
    this._setUserId(userId);
  }

  get currentUserId() {
    return this._getUserId();
  }

  logout(){
    this._setUserId(null);
    this.router.transitionTo('login');
  }
}
