
const puppeteer = require('puppeteer');
const CREDS = require('./creds.js');

const USERNAME_SELECTOR = '#login_field'; 
const PASSWORD_SELECTOR = '#password';
const SIGNIN_BUTTON = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

const LIST_USERNAME_SELECTOR = '#user_search_results > div.user-list > div:nth-child(INDEX) > div.d-flex > div > a';
const LENGTH_SELECTOR_CLASS = 'user-list-item';


// infromation about the user that you want to search for
const userToSearch = 'john';
const searchUrl = `https://github.com/search?q=${userToSearch}&type=Users&utf8=%E2%9C%93`;




(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://github.com/login');
  await page.setViewport({height: 800, width: 1200});

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  await page.click(SIGNIN_BUTTON);

  await page.waitForNavigation();

  await page.goto(searchUrl);
  await page.waitFor(2*1000);

  // the sel variable is the same as the LENGTH_SELECTOR_CLASS
  // code inside the evaluate will be ran in the browser :)\
  let listLength = await page.evaluate((sel) => {
    return document.getElementsByClassName(sel).length;
  }, LENGTH_SELECTOR_CLASS);

  for (let i = 1; i <= listLength; i++) {
    // change the index to the next child
    let usernameSelector = LIST_USERNAME_SELECTOR.replace("INDEX", i);

    let username = await page.evaluate((sel) => {
        return document.querySelector(sel).getAttribute('href').replace('/', '');
      }, usernameSelector);

    console.log(username);

    // TODO save this user
}

  await page.screenshot({ path: 'files/github.png' });
  
  browser.close();
})();