import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsDetail, author, date, source } = props;

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
            className="card- img-top"
            alt="..."
          />
          <div
            className="card-body"
            style={{
              background:
                "linear-gradient(90deg, rgba(79,79,79,1) 0%, rgba(78,81,82,1) 21%, rgba(130,115,115,1) 51%, rgba(84,80,80,1) 74%, rgba(186,186,186,1) 100%)",
            }}
          >
            <h5 className="card-title" style={{color:'white'}}>{title}...</h5>
            <p className="card-text" style={{color:'rgb(229 229 229)'}}>{description}...</p>
            <a
              href={newsDetail}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
              style={{color:'rgb(229 229 229)'}}
            >
              Read Full News
            </a>
            <p className="card-text">
              <small style={{color:'#c5c8cb'}}>
                by {author ? author : "Unknown"} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
