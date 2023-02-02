import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsDetail, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
            {source}
            <span class="visually-hidden">Published By</span>
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://st2.depositphotos.com/3800847/10069/v/600/depositphotos_100698144-stock-illustration-world-news-concept-vector-illustration.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsDetail}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read Full News
            </a>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
