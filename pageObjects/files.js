import { By } from 'selenium-webdriver';
import { BaseObject } from "../baseObject";

export class Files extends BaseObject{

    locators = {
        descriptionHeader: By.xpath('//*[@id="root"]/div/table/thead/tr/td[2]/div/div[1]/span'),
        upArrow: By.className('ArrowIcon_arrowIcon__3OcT4 ArrowIcon_arrowIcon_rotate180__2vnZQ'),
        descriptionCell: By.className('sc-efHXLn frkdMi'),
    }

    async removeEmptyStrings(strings){
     let nonEmptyArr = [];
     for (let string of strings) {
         if (string !== '') {
             nonEmptyArr.push(string);
         } 
        } return nonEmptyArr;
    }
}