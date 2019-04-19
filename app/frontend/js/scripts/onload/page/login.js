class OnloadLoginPage {
    initConfig(){
        document.addEventListener('DOMContentLoaded', (event) => {
            const formLogin = new FormLogin();
            formLogin.initConfig();
        });
    }
}

const onloadPage = new OnloadLoginPage();
onloadPage.initConfig();