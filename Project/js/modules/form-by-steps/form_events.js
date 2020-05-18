export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
    }
    
    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton = $('.js-finish');

        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultAction);
    }
    preventDefaultAction(evt) {
        evt.preventDefault();
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    getStepNumberToGo(currentStep, direction) {
        let stepToGo = 2;
        if ('2' === currentStep) {
            stepToGo = ('prev' == direction) ? '1' : '3';
        }
        return stepToGo;
    }

    goToStep(step, direction = 'next') {
        let currentStep = +step.replace(/^step\-/, '');
        let goToStep = '.step-';
        let nextStep;
        if (direction === 'next') nextStep = currentStep + 1;
        else nextStep = currentStep - 1;
        goToStep += nextStep;
        this.progressBar(Math.round(nextStep * 33.33));
        return goToStep;
    }

    changeAction(evt, direction = 'next') {
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');

        $formStep.addClass('d-none');
        this.preventDefaultAction(evt);

        let $step = $(this.goToStep($formStep[0].classList[1], direction));
        $step.removeClass('d-none');
    }

    previousAction(evt) {
        this.changeAction(evt, 'prev');
    }

    nextAction(evt) {
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?
        this.changeAction(evt);
    }

    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $(".progress-bar");
        $progressBar.css("width", percent + "%");
        $progressBar.html(percent + "%");
    }
}
