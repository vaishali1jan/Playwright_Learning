exports.PForm = class PForm{

    constructor(page){

        this.page = page;
        this.formLink= "//a[normalize-space()='Practice Form']"
        this.name="//input[@id='name']";
        this.email="//input[@id='email']"
        this.gender="(//input[@type='radio'])[2]";
        this.mobile="//input[@id='mobile']";
        this.subject="//input[@id='subjects']";
        this.loginBtn="//input[@value='Login']";
    }

    async FillForm(Nameint)
    {
        await this.page.locator(this.formLink).click()
        await this.page.locator(this.name).fill(Nameint)
        await this.page.locator(this.email).fill("test@test.com")
        await this.page.locator(this.gender).check();
        await this.page.locator(this.mobile).fill("9988776655")
        await this.page.locator(this.subject).fill("this is subject")
        await this.page.locator(this.loginBtn).click();

    }
}