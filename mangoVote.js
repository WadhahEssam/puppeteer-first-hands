const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  for (let i = 0; i < 100000; i++) {
    const page = await browser.newPage();
    await page.setViewport({height: 1080, width: 1920});
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSeScgjU1dZ6GV1VtO27nw8K5f2QLKIIP1_s88STc6GPO4TQRg/viewform');
    
    // choosing the student
    await page.waitForSelector('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div > div:nth-child(2) > div > content > div > label:nth-child(2) > div > div.quantumWizTogglePaperradioEl.docssharedWizToggleLabeledControl.freebirdThemedRadio.freebirdThemedRadioDarkerDisabled.freebirdFormviewerViewItemsRadioControl > div.quantumWizTogglePaperradioRadioContainer > div')
    await page.click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div > div:nth-child(2) > div > content > div > label:nth-child(2) > div > div.quantumWizTogglePaperradioEl.docssharedWizToggleLabeledControl.freebirdThemedRadio.freebirdThemedRadioDarkerDisabled.freebirdFormviewerViewItemsRadioControl > div.quantumWizTogglePaperradioRadioContainer > div')
    await page.waitFor(50);
    await page.waitForSelector('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div > div > div > div.quantumWizButtonPaperbuttonFocusOverlay.exportOverlay')
    await page.click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div > div > div > div.quantumWizButtonPaperbuttonFocusOverlay.exportOverlay')

    await page.waitFor(50);
  
    await page.screenshot({path: 'files/mango.png'});
    await page.close();
  }
  await browser.close();
})();

