import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cbab1e353b4d94a5e0462f79270fd7&page=1&pageSize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleNextButton = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {} 
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cbab1e353b4d94a5e0462f79270fd7&page=${
        this.state.page + 1
      }&pageSize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevButton = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cbab1e353b4d94a5e0462f79270fd7&page=${
      this.state.page - 1
    }&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container my-2">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 82) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsDetail={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevButton}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 15)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextButton}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;