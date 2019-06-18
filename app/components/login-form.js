import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import auth from 'shlack/services/auth';

export default class LoginFormComponent extends Component {

  @tracked userId = null
  @service auth;
  get isDisabled() {
    return !this.userId;
  }

  @action
  onLoginFormSubmit(evt /* DOM event */) {
    evt.preventDefault();
    const { target } = evt;
    const selectElem = target.querySelector('select');
    evt.preventDefault();
    console.log(selectElem.value);
    this.auth.loginWithUserId(this.userId);
  }

  handleSignIn(userId){
    console.log(userId);
  }

  @action
  onSelectChanged(evt){
    this.userId  = evt.target.value;
    console.log(this.userId);
  }
}
