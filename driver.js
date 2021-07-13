import { Builder } from 'selenium-webdriver';
import * as Firefox from 'selenium-webdriver/firefox';
import * as Chrome from 'selenium-webdriver/chrome';
import 'geckodriver';
import 'chromedriver';

const initDriver = async (opts) => {
  const firefox = getFireFoxOpts();
  const chrome = getChromeOpts();
  const builder = new Builder()
    .forBrowser(opts.selectedBrowser)
    .disableEnvironmentOverrides();
  if (opts.headless) {
    firefox.headless();
    chrome.headless().addArguments('--no-sandbox', '--window-size=1400x1000');
  }
  builder.setFirefoxOptions(firefox);
  builder.setChromeOptions(chrome);
  return builder.build();
};

export const makeDriver = async () =>
  initDriver({
    headless: false,
    selectedBrowser: 'chrome',
  });

const getChromeOpts = () => new Chrome.Options();

const getFireFoxOpts = () => new Firefox.Options();