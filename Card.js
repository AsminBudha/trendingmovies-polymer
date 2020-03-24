import { LitElement, html } from "lit-element";

class Card extends LitElement {
  render() {
    return html`
      <div style="background-color:blue">
        Card
      </div>
    `;
  }
}

customElements.define("my-card", Card);
