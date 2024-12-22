import { Pizza, PizzaProps } from "./models/Pizza";

const rooElement = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaProps): string {
  return `
    <div class="pizza">
      <h2>${pizza.title}</h2>
      <p class="toppings">${pizza.toppings.join(", ")}</p>
      <p>${pizza.description}</p>
      <span>€${pizza.price}</span>
    </div>
  `;
}

function renderTemplates(template: string[], parent: Element): void {
  const templateElement = document.createElement("template");

  for (const t of template) {
    templateElement.innerHTML += t;
  }

  parent.append(templateElement.content);
}

document.addEventListener("DOMContentLoaded", async () => {
  //load pizza data
  const pizzas = await Pizza.loadAll();

  //create template string for each pizza
  const pizzaTemplate = pizzas.map(createPizzaTemplate);

  //render pizza templates to DOM
  renderTemplates(pizzaTemplate, rooElement);
});
