exports.RegUser = class RegUser{

    constructor (page){

        this.page = page;
        this.reglink="//a[normalize-space()='Register']"
        this.Fname= "//input[@id='firstname']"
        this.lastname="//input[@id='lastname']"
        this.uanme="//input[@id='username']"
        this.password="//input[@id='password']"
        this.regBtn="//input[@value='Register']"

    }

    async register(uasername){
        await this.page.locator(this.reglink).click()
        await this.page.locator(this.Fname).fill(uasername);
        await this.page.locator(this.lastname).fill("mhapankar");
        await this.page.locator(this.uanme).fill("vaishali");
        await this.page.locator(this.password).fill("vaishali");
        await this.page.locator(this.regBtn).click();
    }
}