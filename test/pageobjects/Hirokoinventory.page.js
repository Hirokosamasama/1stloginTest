import { $ } from '@wdio/globals'
import Page from './Hirokopage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingCart () {
        return $('a.shopping_cart_link'); //fill "#flash" with css "" if it is correct password
    }
}

export default new InventoryPage();
