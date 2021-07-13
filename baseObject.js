import { until } from 'selenium-webdriver';
import 'regenerator-runtime/runtime';

export class BaseObject {
    driver;

    constructor(driver) {this.driver = driver;}

async waitToClick(locator) {
    await this.waitUntilElementExists(locator);
    await this.driver.findElement(locator).click();
}  

async setInput(locator, input) {
    await this.waitUntilElementExists(locator);
    await this.driver.findElement(locator).sendKeys(input);
}   

async waitUntilElementExists(locator) {
    await this.wait(until.elementLocated(locator));
    return this;
}

async wait (condition) {
    await this.driver.wait(condition, 10000);
    return this
}

// alphanumeric sort
async sortAlphaNumeric (arr, language) {
    const sortedArr = arr.slice().sort(new Intl.Collator(language ,{caseFirst: 'upper', numeric:true, sensitivity:'accent'}).compare);
    return sortedArr;
} 

// get the text from all elements
async getElementsText(elements) {
const cellTextPromises = elements.map(async (element) => {
    return await element.getText();
});
return await Promise.all(cellTextPromises);
}
}