class LoginPage {
    constructor(page){
        this.page = page;
    }

    async loginResubale(username, password){
        await this.EnterUsername(username);
        await this.EnterPassword(password);
        await this.LoginButton.click();
    }

    async EnterUsername(username){
        await this.page.getByRole("textbox", {name: "Username"}).fill(username);

    }
    async EnterPassword(password){
        await this.page.getByRole("textbox", {name: "Password"}).fill(password);
    }

    get LoginButton(){
        return this.page.getByRole("button", {name: "Login"});
    }


}

module.exports = {LoginPage};