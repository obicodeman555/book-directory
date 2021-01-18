import React, { Component } from "react";
import Gallery from "./Gallery";
class Global extends Component {
  state = {
    query: "",
    books: [],
  };
  search(event) {
    event.preventDefault();

    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        let { items } = json;
        this.setState({ books: items });
      });
    // console.log("search...", this.state.query);
  }
  render() {
    console.log(this.state.books);
    return (
      <div className="bookDisplayContainer">
        <h1>Book Directory</h1>
        <form>
          <div class="inputBtnContainer">
            <input
              type="search"
              placeholder="Search for a book..."
              onChange={(event) => this.setState({ query: event.target.value })}
              onKeyPress={(event) => {
                if (event.key === "Enter") this.search(event);
              }}
              className="searchInput"
            />
            <button
              type="submit"
              onClick={(event) => this.search(event)}
              className="searchBtn"
            >
              Search
            </button>
          </div>
        </form>
        <Gallery books={this.state.books} />
      </div>
    );
  }
}

export default Global;
