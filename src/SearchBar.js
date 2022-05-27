import { html, component, useState, useEffect } from "haunted";

function SearchBar() {
  const [drinks, setDrinks] = useState([]);
  const [toastMsg, setToastMsg] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const event = new CustomEvent("change", {
      detail: [drinks, toastMsg],
    });
    this.dispatchEvent(event);
  }, [drinks, toastMsg]);
  const searchForCocktails = (e) => {
    setToastMsg("Searching...");
    setTimeout(function () {
      setToastMsg("");
    }, 2000);

    e.preventDefault();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.drinks) {
          setToastMsg("Here are the results.");
          setDrinks(data.drinks);
          setTimeout(function () {
            setToastMsg("");
          }, 2000);
        } else {
          setToastMsg("No results found.");
        }
      });
  };

  return html`
    <div class="cocktails-search-wrapper">
      <form class="cocktails-search-form" @submit="${searchForCocktails}">
        <input
          type="text"
          id="query"
          placeholder="Search cocktails"
          @change=${(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
    <style>
      .cocktails-search-wrapper {
        text-align: center;
        margin-bottom: 20px;
      }
      input {
        width: 70%;
        height: 24px;
        font-weight: 600;
        border-radius: 6px;
      }

      button {
        height: 30px;
        background: white;
        font-weight: 600;
        border-radius: 6px;
      }
    </style>
  `;
}

customElements.define("search-bar", component(SearchBar));
