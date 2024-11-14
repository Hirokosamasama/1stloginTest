import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Hiroklogin.page.js'
import InventoryPage from '../pageobjects/Hirokoinventory.page.js'


describe('login positive stan_sec', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.positiveloginLoop('secret_sauce');
        await LoginPage.negativeloginLoop('secr_sauce');
    })
})
       

       

        



       
            






           
   
