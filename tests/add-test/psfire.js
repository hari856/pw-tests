// Running P Script in Firefox
const { chromium } = require('playwright');
const { firefox } = require('playwright');
 
(
    async ()=>{
        // delay between actions : slowMo:1000
        const browser = await firefox.launch({headless:true, slowMo:1000});
 
        const context = await browser.newContext(); // isolated session
        const page = await context.newPage();
        console.log("opening google page now...");
        await page.goto('https://www.google.com');
        console.log("closing the browser...");
        await browser.close();
        console.log("browser closed...");
    }
)();