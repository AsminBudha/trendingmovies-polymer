import { LitElement, html } from "lit-element";

class MovieCard extends LitElement {
  render() {
    return html`
      <div style="background-color:red">
        Movie
      </div>
    `;
  }
}

customElements.define("movie-card", MovieCard);
