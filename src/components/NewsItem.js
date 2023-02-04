import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsDetail, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">Published By</span>
            </span>
          </div>
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
