const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.waitForSelector('button#b_2');
    await page.click('button#b_2');
    await page.waitForSelector('button#b_plus');
    await page.click('button#b_plus');
    await page.waitForSelector('button#b_6');
    await page.click('button#b_6');
    await page.waitForSelector('button#b_equal');
    await page.click('button#b_equal');
    await page.waitForTimeout(1000);
    await page.screenshot({ path:'/Users/angelobarcelos/Documents/ACADEMIC/MyProjects/Calculadora_Js/images/ImagemResult.png'});

    await browser.close();
})();