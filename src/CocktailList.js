import { html, component, useState } from "haunted";

function CocktailList({ drinks }) {
  let [selectedDrink, setSelectedDrink] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  const event = new CustomEvent("addToShoppingList", {
    detail: [selectedDrink, toastMsg],
  });
  if (selectedDrink) {
    this.dispatchEvent(event);
    setTimeout(function () {
      setToastMsg("");
      this.dispatchEvent(event);
    }, 4000);
    setSelectedDrink(null);
  }

  const addDrinkToShoppingList = (e) => {
    setToastMsg("Ingredients added to shopping list.");
    setSelectedDrink(e);
  };

  return html`
    <ul>
      ${Object.values(drinks).map((drink) => {
        return html`
          <div class="drink-container">
            <div class="image-container">
              <img src="${drink.strDrinkThumb}" />
            </div>
            <div class="text-container">
              <div class="drink-name">${drink.strDrink}</div>
              <div class="drink-instructions">${drink.strInstructions}</div>
            </div>
            <div class="action-container">
              <button
                type="button"
                @click=${() => addDrinkToShoppingList(drink)}
              >
                +
              </button>
            </div>
          </div>

          <style>
            ul {
              margin: 10px;
            }
            .drink-container {
              border: 1px solid white;
              border-radius: 6px;
              padding: 5px;
              margin-bottom: 10px;
              display: flex;
              flex-direction: row;
              height: 200px;
              background-color: #334c52;
            }
            .image-container {
              display: flex;
              flex: 30%;
              height: 100%;
            }
            .text-container {
              display: flex;
              flex-direction: column;
              flex: 60%;
              margin-left: 10px;
            }
            .action-container {
              display: flex;
              flex: 20%;
              justify-content: flex-end;
              align-items: end;
            }
            .drink-name {
              font-size: 20px;
              font-weight: 600;
              margin: 10px 0;
            }

            .drink-instructions {
              font-size: 13px;
              margin: 10px 0;
            }

            img {
              border-radius: 6px;
            }

            button {
              background-color: transparent;
              border: 2px solid white;
              border-radius: 6px;
              color: white;
              font-weight: 700;
              width: 25px;
              height: 25px;
              margin: 20px;
            }
          </style>
        `;
      })}
    </ul>
  `;
}

customElements.define("cocktail-list", component(CocktailList));
