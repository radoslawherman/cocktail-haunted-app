import { html, component } from "haunted";

var ingredients = [];
function ShoppingList({ selectedDrink }) {
  const maxIngredientsCount = 15;
  for (let index = 1; index < maxIngredientsCount; index++) {
    const ingredient = selectedDrink[`strIngredient${index}`];
    if (ingredient && ingredients.indexOf(ingredient) === -1) {
      ingredients.push(ingredient);
    }
  }
  const countedIngredients = ingredients.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  const printShoppingList = (divName) => {
    var printWindow = window.open("", "PRINT", "height=600,width=800");

    printWindow.document.write(
      this.shadowRoot.getElementById(divName).innerHTML
    );
    printWindow.print();
    printWindow.close();

    return true;
  };

  return html`
    <div class="shopping-list-container">
      <div id="shopping-list-container">
        <div class="shopping-list-title">Shopping List</div>
        <ul>
          ${ingredients.length
            ? Object.entries(countedIngredients).map((ingredient) => {
                return html`
                  <div class="drink-container">
                    <div class="drink-name">
                      ${ingredient[1]} x ${ingredient[0]}
                    </div>
                  </div>
                `;
              })
            : html`<p>Shopping list is empty</p>`}
        </ul>
      </div>
      <button
        type="button"
        @click=${() => printShoppingList("shopping-list-container")}
      >
        Print
      </button>
    </div>

    <style>
      .shopping-list-container {
        position: sticky;
        top: 20px;
        border: 1px solid white;
        border-radius: 6px;
        margin: 10px;
        padding: 10px;
      }

      .shopping-list-title {
        font-size: 20px;
        font-weight: 600;
        margin: 10px 0;
      }

      button {
        background-color: transparent;
        border: 2px solid white;
        border-radius: 6px;
        color: white;
        font-weight: 700;
        height: 25px;
        margin: 20px;
      }
    </style>
  `;
}

customElements.define("shopping-list", component(ShoppingList));
