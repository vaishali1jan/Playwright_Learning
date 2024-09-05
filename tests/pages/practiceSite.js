exports.practicepage =  class practicepage{

    constructor(page){
        this.page = page
        this.searchBox= "//input[@id='search-input']";
        this.searchBtn="//button[@id='search-button']";
        this.username="//input[@id='username']";
        this.password= "//input[@id='password']";
        this.loginBtn="button[type='submit']"
    }
    async Navigate(){
       await this.page.goto("https://practice.expandtesting.com/")
    }

    async GotoOption(option){
        let Myselector="//a[normalize-space()='"+option+"']";
        await this.page.locator(Myselector).click();
    }

    async Login(username,password){
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }

    async pageClose(username,password){
        await this.page.close();
    }
}