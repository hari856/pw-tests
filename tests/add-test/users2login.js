const { chromium } = require('playwright');
 
(
    async ()=>{
        // delay between actions : slowMo:1000
        const browser = await chromium.launch({headless:false, slowMo:1000});
        const context1 = await browser.newContext(); // isolated session
        const context2 = await browser.newContext(); // isolated session
 
        const user1Page = await context1.newPage();
        const user2Page = await context2.newPage();
 
        await user1Page.goto('http://127.0.0.1:5500/page2.html');
        await user2Page.goto('http://127.0.0.1:5500/page2.html');
 
        await user1Page.fill('#username','user1');
        await user1Page.waitForTimeout(5000);
 
       
        await user2Page.fill('#username','user2');
        await user2Page.waitForTimeout(5000);
 
        await browser.close();
 
    }
    )();