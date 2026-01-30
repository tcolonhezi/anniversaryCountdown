export class HtmlPresenter {
  // Recebemos os elementos já selecionados ou os seletores
  constructor(elements) {
    this.elements = elements;
    this.validateElements();
  }

  validateElements() {
    Object.entries(this.elements).forEach(([key, el]) => {
      if (!el) throw new Error(`Elemento para ${key} não encontrado no DOM.`);
    });
  }

  output(time) {
    // Aplicamos uma pequena lógica de formatação (UI concern)
    const format = (num) => String(num).padStart(2, "0");

    this.elements.days.textContent = format(time.days);
    this.elements.hours.textContent = format(time.hours);
    this.elements.minutes.textContent = format(time.minutes);
    this.elements.seconds.textContent = format(time.seconds);
  }
}
