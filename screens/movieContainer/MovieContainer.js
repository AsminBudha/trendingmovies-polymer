import { html, LitElement, css } from "lit-element";

import "../../components/movieCard/MovieCard";
import { fetchTrendingByKey } from "../../services/trendingService";

const keys = ["tv", "movie"];

class MovieContainer extends LitElement {
  static get styles() {
    return css`
      .wrapper {
        display: flex;
        color: white;
        max-width: 1180px;
        margin: auto;
      }
      .container {
        flex: 1;
      }
      .title-text {
        text-align: center;
      }
      .content-wrapper {
        margin: 12px 16px;
      }
    `;
  }

  firstUpdated() {
    Promise.all(keys.map(item => fetchTrendingByKey(item))).then(res => {
      console.log(res);
    });
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <h1 class="title-text">
            Trending Tv Shows
          </h1>
          <div class="content-wrapper">
            <movie-card></movie-card>
            <movie-card></movie-card>
          </div>
        </div>
        <div class="container">
          <h1 class="title-text">
            Trending Movies
          </h1>
          <div class="content-wrapper">
            <movie-card></movie-card>
            <movie-card></movie-card>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-container", MovieContainer);
