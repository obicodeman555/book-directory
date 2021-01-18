import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="bookListContainer">
        {this.props.books.map((book, index) => {
          let { title, imageLinks, infoLink } = book.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imageLinks !== undefined ? imageLinks.thumbnail : ""}
                alt="book pic"
                className="bookImg"
              />
              <div className="bookText">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
