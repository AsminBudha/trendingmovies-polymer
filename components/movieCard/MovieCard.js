import { LitElement, html, css } from "lit-element";

import { COLORS } from "../../constants/color";

class MovieCard extends LitElement {
  static get styles() {
    return css`
      .card-wrapper {
        display: flex;
        padding: 12px;
        margin-bottom: 12px;
        color: ${COLORS.primaryTextColor};
        background-color: ${COLORS.secondaryBgColor};
      }
      .card-content {
        padding-left: 16px;
      }
      .primary-text {
        font-size: 18px;
      }
      .secondary-text {
        font-size: 12px;
        color: ${COLORS.secondaryTextColor};
      }
      .movie-title {
        display: flex;
        align-items: baseline;
        font-size: 24px;
      }
      .movie-title ul li {
        float: left;
        margin-left: 24px;
      }
      .movie-title ul {
        margin-left: 0;
        padding-left: 0;
      }
      .movie-title ul li:first-child {
        margin-left: 12px;
        list-style-type: none;
      }

      .trailer {
        font-size: 16px;
      }
    `;
  }

  render() {
    return html`
      <div class="card-wrapper">
        <img
          src="https://image.tmdb.org/t/p/w200//y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg"
          width="120"
        />
        <div class="card-content">
          <h1 class="primary-text">
            8.5 <span class="secondary-text">/10</span>
          </h1>
          <h1 class="movie-title">
            West World
            <span class="secondary-text">
              <ul>
                <li>Action</li>
                <li>Drama</li>
              </ul>
            </span>
          </h1>
          <p class="trailer">Watch Trailer</p>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-card", MovieCard);
