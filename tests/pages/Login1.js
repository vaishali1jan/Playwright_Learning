
exports.loginFMS = class loginFMS{

    constructor(page){
        this.page=page;
        this.loginlink = "//a[normalize-space()='Login']";
        this.usernameB = "//input[@id='email']"
        this.passwordB = "//input[@id='password']";
        this.loginBtn = "//input[@value='Login']";
    }


    async GotoURL(){

        await this.page.goto("https://www.tutorialspoint.com/selenium/practice/login.php")
    
    }

    async LoginA(username,password){
       await  this.page.locator(this.loginlink).click();
       await this.page.locator(this.usernameB).fill(username);
       await this.page.locator(this.passwordB).fill(password);
       await this.page.locator(this.loginBtn).click();
    }
}

