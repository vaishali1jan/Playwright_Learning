exports.FMenus = class FMenus{

    constructor(page){
        this.page=page;
        this.grocery="img[alt='Grocery']";
        this.mobile="//span[contains(text(),'Mobiles')]";
        this.fashion="//img[@alt='Fashion']";
        this.electronics="img[alt='Electronics']";
    }

    async GotoFlipcart(){
        await this.page.goto(process.env.url)
        //await this.page.goto("https://www.flipkart.com/")
    }

    async GotoMobilePage(){
        await this.page.locator(this.mobile).click();
    }

    async GotoFationPage(){
        await  this.page.locator(this.fashion).click();
    }

    async GotoElectronicsPage(){
        await this.page.locator(this.electronics).click();
    }

}