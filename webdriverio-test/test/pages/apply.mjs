import Page from "./page.mjs";

class Apply extends Page {

    get banner() {
        return $('block-banner-middle-squares__inner container');
    }
    get title() {
        return $('block-banner-middle-squares__title element--title-color');
    }
    get applyButton() {
        return $('btn btn--button block-banner-middle-squares__button');
    }
    open() {
                super.open('https://export.ebay.com/en/growth_program/?utm_source=export250');
            }
}

export default new Apply();
