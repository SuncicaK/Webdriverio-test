import Apply from '../pages/apply.mjs';
import { expect as expectChai } from 'chai';

xdescribe('Apply Page', () => {
    before(() => {
        Apply.open();
    });


    it('should show the banner container', () => {
        browser.url('https://export.ebay.com/en/');
        expect(Apply.banner).toBeDisplayed();
    });

     it('should show the banner tittle', () => {
         expect(Apply.title).toHaveTextContaining('Growth Program');
     });

     it('should contain link on banner button and verify its clickable', () => {
         expect(Apply.applyButton).toHaveLinkContaining('/growth_program/');
         expect(Apply.applyButton).toBeClickable();
     });
     it('should click on apply button and verify the new url', () => {
        Apply.applyButton.click();
        const url = browser.getUrl();
        expectChai(url).to.include('/growth_program/');
     });
})
