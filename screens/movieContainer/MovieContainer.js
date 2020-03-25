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

  static get properties() {
    return {
      tvShowsList: { type: Array },
      movieList: { type: Array }
    };
  }

  constructor() {
    super();
    this.tvShowsList = [];
    this.movieList = [];
  }

  firstUpdated() {
    Promise.all(keys.map(item => fetchTrendingByKey(item))).then(res => {
      Promise.all(res.map(item => item.json())).then(data => {
        console.log(data);
        this.tvShowsList = data[0].results;
        this.movieList = data[1].results;
      });
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
            ${this.tvShowsList.map(tvShow => {
              return html`
                <movie-card data=${JSON.stringify(tvShow)} />
              `;
            })}
          </div>
        </div>
        <div class="container">
          <h1 class="title-text">
            Trending Movies
          </h1>
          <div class="content-wrapper">
            ${this.movieList.map(movie => {
              return html`
                <movie-card data=${JSON.stringify(movie)} />
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-container", MovieContainer);
