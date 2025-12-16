import { loginData } from "../../data/login.data";

Feature('Login');
const {I} = inject();

Scenario('User Logs In', ()=> {
    I.login(loginData.validUser.user, loginData.validUser.pass);
    I.seeInTitle('Google');
})