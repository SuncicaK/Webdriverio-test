import { expect  as expectChai, assert} from 'chai';

xdescribe('sell page', () => {
    it('should show the banner container', () => {
        browser.url('https://export.ebay.com/en/');
        const banner = $('.block-banner-middle-squares__inner container');
        expect(banner).toBeDisplayed();
    });

     it('should show the banner title', () => {
         const title = $('.block-banner-middle-squares__title element--title-color');
         const titleText = title.getText();

         expect(title).toHaveTextContaining('Program for Businesses');
         expectChai(titleText).to.be.empty;
         assert.isEmpty(titleText);
     });

     it('should contain link on banner button and verify its clickable', () => {
         const applyButton = $('.btn btn--button block-banner');
         
         expect(applyButton).toHaveLinkContaining('/growth_program/');
         expect(applyButton).toBeClickable(); 
     });
     it('should click on apply button and verify the new url', () => {
         const applyButton = $('.btn btn--button block-banner');
         applyButton.click();

         const url = browser.getUrl();
         expectChai(url).to.include(/growth_program/);
     });
})
