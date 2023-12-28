const { Builder, By } = require("selenium-webdriver")

let driver;
beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/');
})
afterAll(async () => {
    await driver.quit();
})

it('should React App', async () => {
    let title = await driver.getTitle();
    expect(title).toBe('React App')
})


it('should Todo tes7656', async () => {
    // driver = await new Builder().forBrowser('chrome').build()

    let textBox = await driver.findElement(By.id('text'))
    let form = await driver.findElement(By.tagName('form'))


    await textBox.sendKeys('Todo tes7656')
    await form.submit()

    await driver.manage().setTimeouts({ implicit: 2000 })
    let todos = await driver.findElements(By.className('todo-text'))
    const todoText = await todos[todos.length - 1].getText()

    expect(todoText).toBe('Todo tes7656')
})