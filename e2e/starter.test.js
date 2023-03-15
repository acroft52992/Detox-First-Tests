describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate between the menu and order tabs', async () => {
    await expect(element(by.id('menu-screen'))).toExist();
    await element(by.id('menu-tab-button')).tap();
    await element(by.id('orders-tab-button')).tap();
    await expect(element(by.id('orders-list'))).toBeVisible();
    await element(by.id('menu-tab-button')).tap();
    await expect(element(by.id('menu-screen'))).toExist();
});


it('User should build their own pizza', async () => {
   
    await element(by.text('Build Your Own')).tap();
    await element(by.text('PEPPERONI')).tap();
    await element(by.text('MOZZARELLA')).tap();
    await element(by.text('OLIVES')).tap();

    //Check toppings are displayed in selected toppings
    await expect(element(by.text('PEPPERONI').withAncestor(by.id('selected-toppings')))).toExist();
    await expect(element(by.text('MOZZARELLA').withAncestor(by.id('selected-toppings')))).toExist();
    await expect(element(by.text('OLIVES').withAncestor(by.id('selected-toppings')))).toExist();

    await element(by.text('large')).tap();
})

  it('User can navigate to previous orders and check status of order', async () => {
    await element(by.id('orders-tab-button')).tap();
    await expect(element(by.text('Status: delivered'))).toBeVisible();
    await expect(element(by.text('Size: medium'))).toBeVisible();
    await expect(element(by.text('Pepperoni'))).toBeVisible();
    await element(by.id('menu-tab-button')).tap();
   });
});
