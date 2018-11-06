const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  for (let i = 0; i < 100000; i++) {
    const page = await browser.newPage();
    await page.setViewport({height: 1080, width: 1920});
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSeNxxnci6JJufzmhJav5J2qWWHwKqiKLuHoypN-BkDrT9q0wA/viewform');
    
    // choosing the student
    await page.waitForSelector('.docssharedWizToggleLabeledContainer > .exportLabelWrapper > .isActive > .quantumWizTogglePaperradioRadioContainer > .quantumWizTogglePaperradioOffRadio')
    await page.click('.docssharedWizToggleLabeledContainer > .exportLabelWrapper > .isActive > .quantumWizTogglePaperradioRadioContainer > .quantumWizTogglePaperradioOffRadio')

    await page.waitForSelector('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div > div > div > div.quantumWizButtonPaperbuttonFocusOverlay.exportOverlay')
    await page.click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div > div > div > div.quantumWizButtonPaperbuttonFocusOverlay.exportOverlay')

    await page.waitFor(50);
  
    await page.screenshot({path: 'files/mango.png'});
    await page.close();
  }
  await browser.close();
})();

