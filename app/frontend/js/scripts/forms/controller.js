class FormController {
    constructor(backendFeedback){
        this.backendFeedback = document.getElementById(backendFeedback);
    }

    redirectRoute(pageRoute){
        switch(pageRoute){
            case 'home':
            case 'shopping':
            case 'shopkeeper':
            case 'shopkeeperDetails':
            case 'shopkeeperComparative':
                window.location.href = `http://localhost:3000/v1/${pageRoute}`;
                break;
        }
    }

    blockSpecialCharacters(keyboardEvent){
        switch(keyboardEvent.code){
            case 'Space':
                keyboardEvent.preventDefault();
                break;
        }
    }

    createErrorMessage(errorStatus, errorMessage){
        this.removeErrorMessage();
        
        const errorStatusText = document.createTextNode(`ERROR: ${errorStatus}`);
        const errorMessageText = document.createTextNode(`${errorMessage}`);
        const brElement = document.createElement('BR');
        const paragraphElement = document.createElement('h6');

        paragraphElement.setAttribute('class', 'invalid-backend-feedback h6 text-center text-danger');
        paragraphElement.appendChild(errorStatusText);
        paragraphElement.appendChild(brElement);
        paragraphElement.appendChild(errorMessageText);

        this.backendFeedback.setAttribute('style', 'display: block !important');
        this.backendFeedback.appendChild(paragraphElement);
    }

    removeErrorMessage(){
        this.backendFeedback.innerHTML = '';
        this.backendFeedback.setAttribute('style', 'display: none !important');
    }
}