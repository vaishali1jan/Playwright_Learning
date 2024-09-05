exports.Loginpage = class Loginpage {

    constructor(page) {
        this.page = page
      //  this.page = this.page.bind(this)
        // this.username = page.locator("//input[@data-cy='login-input']")
        // this.password = page.locator("//input[@data-cy='password-input']")
        // this.loginbtn = page.locator("//input[@data-cy='button-signIn']")

        this.username = page.getByRole('textbox').first().fill('localadmin');
        this.password = page.locator('input[type="password"]').fill('Admin123$');
        this.loginbtn = page.getByRole('button', { name: 'Sign in' }).click();
    }

    async gotoRTU(){

        await this.page.goto('http://10.144.228.110:8089/');
        await delay(3000)

    }

    async LoginRTU(usename, password) {
        await this.username.fill(usename);
        await this.password.fill(password);
        await this.loginbtn.click();
    }
}