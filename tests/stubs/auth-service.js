import AuthService, { inject as service } from '@ember/service';

export default class StubbedAuthService extends AuthService {
  _userId = null;
  _getUserId(){
    return this._userId;
  }
  _setUserId(userId){
    this._userId = userId;
  }
}