class FormLogin extends FormController {
    constructor(){
        super('backendFeedback');

        this.form = document.getElementById('formLogin');
        this.btnSubmit = document.getElementById('btnSubmit');
        this.inputUsername = document.getElementById('username');
        this.inputPassword = document.getElementById('password');
        this.labelUsername = document.getElementById('labelUsername');
        this.labelPassword = document.getElementById('labelPassword');
    }

    initConfig(){
        this.inputsEvents();
        this.validate();
    }

    validate(){
        this.btnSubmit.addEventListener('click', (event) => {
            if(this.form.checkValidity()){
                event.preventDefault();
                event.stopImmediatePropagation();
                this.requestAuth();
            }
        });
    }

    inputsEvents(){
        [ this.inputUsername, this.inputPassword ].forEach(input => {
            input.addEventListener('keypress', (keyboardEvent) => {
                super.blockSpecialCharacters(keyboardEvent);
            });
        });
    }
    
    requestAuth(){
        const loadingSpinner = new LoadingSpinner();
        loadingSpinner.create(this.btnSubmit, 'typing');

        const httpService = new HTTPService();
        httpService.authenticateUser(this.inputUsername.value, this.inputPassword.value).then(() => {
            super.redirectRoute('home');
        }).catch(error => {
            const { status } = error.response;
            const { msg } = error.response.data;

            super.createErrorMessage(status, msg);
            loadingSpinner.recoveryElementTarget(this.btnSubmit, 'LOGIN');
        });
    }


}