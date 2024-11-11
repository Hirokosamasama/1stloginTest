import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Hiroklogin.page.js'
import SecurePage from '../pageobjects/Hirokosecure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        //removed await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})

