import { LitElement, html, css } from "lit-element";

import { COLORS } from "../../constants/color";
import { IMAGE_THUMBNAIL_URL } from "../../constants/api";
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
      .card-wrapper img {
        flex-shrink: 0;
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
        margin-bottom: 0;
        margin-top: 0;
      }
      .secondary-text li {
        float: left;
        margin-left: 24px;
        line-height: 12px;
      }
      .secondary-text ul {
        margin-left: 0;
        padding-left: 0;
        margin-top: 4px;
        display: flex;
      }
      .secondary-text ul li:first-child {
        margin-left: 0;
        list-style-type: none;
      }

      .trailer {
        color: inherit;
        font-size: 16px;
        text-decoration: none;
      }
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        hasChanged(newVal, oldVal) {
          console.log(newVal, oldVal);
        }
      }
    };
  }

  constructor() {
    super();

    this.data = {};
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`
      <div class="card-wrapper">
        <img
          src="${IMAGE_THUMBNAIL_URL.replace(
            ":imageId",
            this.data.poster_path
          )}"
          width="120"
        />
        <div class="card-content">
          <h1 class="primary-text">
            ${this.data.vote_average} <span class="secondary-text">/10</span>
          </h1>
          <h1 class="movie-title">
            ${this.data.title || this.data.name || ""}
          </h1>
          <div class="secondary-text">
            <ul>
              <li>Action</li>
              <li>Drama</li>
            </ul>
          </div>
          <a href="#" class="trailer">Watch Trailer</a>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-card", MovieCard);
