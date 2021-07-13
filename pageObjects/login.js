import { By } from 'selenium-webdriver';
import { BaseObject } from "../baseObject";

export class Login extends BaseObject{

    locators = {
        username: By.id('identifier'),
        password: By.id('password'),
        loginButton: By.className('Button_button__2vVmk'),
        navbar: By.id('navbar'),
    }
    
    async completeLogin(username, password, isExpectedSuccess) {
    await this.driver.get('https://app.rainbird.ai');
    await this.setInput(this.locators.username, username);
    await this.setInput(this.locators.password, password);
    await this.waitToClick(this.locators.loginButton);
    if (isExpectedSuccess){
    await this.waitUntilElementExists(this.locators.navbar);
}
}
}