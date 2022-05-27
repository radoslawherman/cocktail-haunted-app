import { html, component } from "haunted";

function ToastMessage({ message }) {
  if (message) {
    return html`
      <div>${message}</div>

      <style>
        div {
          position: fixed;
          bottom: 0;
          border: 2px solid green;
          border-radius: 6px;
          margin: 20px;
          padding: 20px;
          background-color: #0f3325;
        }
      </style>
    `;
  }
}

customElements.define("toast-message", component(ToastMessage));
