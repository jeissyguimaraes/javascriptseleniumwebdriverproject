const {Builder, By, Key, util} = require("selenium-webdriver");
async function example(params) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}
example();