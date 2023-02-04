import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cbab1e353b4d94a5e0462f79270fd7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handleNextButton = async () => {
  //   console.log("Next");
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  // handlePrevButton = async () => {
  //   console.log("Previous");
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async() => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cbab1e353b4d94a5e0462f79270fd7&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };


  render() {
    return (
      <>
        <div >
         
          <h2 className="text-center my-4">
            NewsMonkey - Top Headlines from{" "}
            {this.capitalizeFirstLetter(this.props.category)}
          </h2>
         
          {this.state.loading && <Spinner />}
         
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">

            <div className="row">
         
              {
              // !this.state.loading &&
                this.state.articles.map((element) => {
         
                  return (
                    
                    <div className="col-md-4" key={element.url}>
                     
                      <NewsItem
                        
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 82)
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        newsDetail={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    
                    </div>
                  );
                })}
                </div>
            
            </div>
          
          </InfiniteScroll>
                
          {/* Extra Buttons Prev Next */}
          {/* <div className="d-flex justify-content-between">
            
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevButton}
            >
              &larr; Previous
            </button>
            
            <button
              
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextButton}
            >
              Next &rarr;
            </button>
          </div> */}

        </div>
      </>
    );
  }
}

export default News;
