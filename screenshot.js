const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({height: 1080, width: 1920});
  await page.goto('https://fadfadah.net');
  await page.waitFor(1000);
  await page.screenshot({path: 'fadfadah.png'});
  await browser.close();
})();
