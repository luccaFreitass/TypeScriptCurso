export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error('Classe Filha Precisa Implementar template');
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
