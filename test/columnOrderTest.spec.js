import { Files } from '../pageObjects/files';
import { BaseObject } from '../baseObject';
import { makeDriver } from '../driver';
import { Credentials } from '../credentials';
import { Login } from '../pageObjects/login';
import { assert } from 'chai';

// eslint-disable-next-line func-names
describe('Files', function () {
  this.timeout(30000);
  describe('Files table', () => {
    let driver;
    beforeEach(async () => {
      driver = await makeDriver();
      const login = new Login(driver);
      const credentials = new Credentials();
      await login.completeLogin(credentials.settings.username, credentials.settings.password, true);
    });
    afterEach(() => driver.quit());

        it('checks description column orders in ascending order', async () => {
            const files = new Files(driver);
            const baseObject = new BaseObject(driver);
        
            await baseObject.waitToClick(files.locators.descriptionHeader);
            await baseObject.waitUntilElementExists(files.locators.upArrow);
            await baseObject.waitUntilElementExists(files.locators.descriptionCell);
            const text = await baseObject.getElementsText(await driver.findElements(files.locators.descriptionCell));
            const nonEmptyDescriptions = await files.removeEmptyStrings(text);
           assert.sameOrderedMembers(nonEmptyDescriptions, await baseObject.sortAlphaNumeric(nonEmptyDescriptions,'en'));
        });
    });
});