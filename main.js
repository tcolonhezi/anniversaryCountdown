import { Anniversary } from "./domain/ValueObjects.js";
import { CountdownUseCase } from "./application/CountdownUseCase.js";
import { DayjsDateService } from "./infrastructure/DayjsDateService.js";
import { HtmlPresenter } from "./infrastructure/htmlPresenter.js";

const displayElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

// 1. Instanciamos as implementações (Infra)
const dateService = new DayjsDateService();
const presenter = new HtmlPresenter(displayElements);

// 2. Injetamos no Caso de Uso (Aplicação)
const countdownApp = new CountdownUseCase(dateService, presenter);

// 3. Definimos o dado de entrada (Domínio)
const myBirthday = new Anniversary(12, 4); // 4 de Dezembro

// 4. Ciclo de vida (Infra)
setInterval(() => {
  countdownApp.execute(myBirthday);
}, 1000);
