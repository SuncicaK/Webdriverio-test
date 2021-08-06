import Search from '../pages/search.mjs';
import { waitForTextChange, waitAndClick } from '../utilities/helper.mjs';
import resources from '../resources/index.mjs';


describe('Ebay Search', () => {
    before(() => {
        Search.open();
        Search.fashionLink.moveTo();
        waitAndClick(Search.watchesLink, 5000);
    });
    
    it('should open the main url and verify the title', () =>{
        browser.url('https://www.ebay.com/');
        expect(browser).toHaveTitle(resources.homeTitle);
    });

    it('should search for a product and verify the search text value', () => {
        Search.searchInput.addValue('laptop');
        Search.searchBtn.click();
    
        expect(Search.searchInput).toHaveValue('laptop');
      });

      it('should redirect to a new page and verify the title', () => {
          expect(browser).toHaveTitle(resources.laptopTitle);
      });

      it('should update the search category', () => {
        waitForTextChange(Search.category, 'PC Laptops & Netbooks', 3000 );
        expect(Search.category).toHaveText('PC Laptops & Netbooks');
      })
   
});