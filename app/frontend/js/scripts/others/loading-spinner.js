class LoadingSpinner {
    create(targetElement, loadingSpinnerName){
        if(this.clearElementTarget(targetElement) || this.clearElementTarget(targetElement) === undefined){
            const imgElement = document.createElement('IMG');
            imgElement.setAttribute('src', `./../images/loadings/${loadingSpinnerName}.svg`);
            imgElement.setAttribute('alt', 'Loading...');
            imgElement.setAttribute('id', 'loadingSpinner');
            imgElement.setAttribute('class', 'loading-spinner-button');

            targetElement.appendChild(imgElement);
        }
    }

    recoveryElementTarget(targetElement, targetText){
        if(this.clearElementTarget(targetElement) || this.clearElementTarget(targetElement) === undefined){
            targetElement.appendChild(document.createTextNode(targetText));
        }
    }

    clearElementTarget(targetElement){
        while(targetElement.firstChild){
            targetElement.removeChild(targetElement.firstChild);
            return !targetElement.firstChild ? true : false;
        }
    }

    removeBodyLoadingContainer(){
        const loadingSpinnerContainer = document.getElementById('bodyLoadingSpinnerContainer');
        loadingSpinnerContainer.remove();
    }

    activeBodyScroll(){
        const body = document.getElementsByTagName('body')[0];
        body.setAttribute('style', 'overflow: visible !important;');
    }

    removeBodyScroll(){
        const body = document.getElementsByTagName('body')[0];
        body.setAttribute('style', 'overflow: hidden !important;');
    }
    

}