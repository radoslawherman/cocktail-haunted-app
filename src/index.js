import { html, component, useState } from "haunted";
import "./SearchBar.js";
import "./CocktailList.js";
import "./ToastMessage.js";
import "./ShoppingList.js";

function App() {
  const [drinks, setDrinks] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  return html`
    <fieldset>
      <search-bar
        @change=${(ev) => {
          setDrinks(ev.detail[0]), setToastMsg(ev.detail[1]);
        }}
      ></search-bar>
      <div class="page-wrapper">
        <div class="cocktail-list">
          <cocktail-list
            .drinks="${drinks}"
            @addToShoppingList=${(ev) => {
              setSelectedDrink(ev.detail[0]), setToastMsg(ev.detail[1]);
            }}
          ></cocktail-list>
        </div>
        <div class="shopping-list">
          <shopping-list .selectedDrink="${selectedDrink}"></shopping-list>
          <toast-message .message="${toastMsg}"></toast-message>
        </div>
      </div>
    </fieldset>

    <style>
      .page-wrapper {
        display: flex;
      }

      .cocktail-list {
        flex: 70%;
      }

      .shopping-list {
        flex: 30%;
      }

      fieldset {
        border: none;
      }
    </style>
  `;
}

customElements.define("my-app", component(App));
