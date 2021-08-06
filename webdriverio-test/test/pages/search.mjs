import Page from "./page.mjs";

class Search extends Page{
    
    get searchInput() {
        return $('#gh-ac')
    }
    get searchBtn() {
        return $('#gh-btn')
    }
    get category() {
        return $('#gh-cat option:nth-child(1)')
    };
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }

    get watchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]');
    }



    open() {
        super.open('https://www.ebay.com/');
    }

   
}

export default new Search();