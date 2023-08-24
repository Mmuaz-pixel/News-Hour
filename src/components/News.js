import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const LoadNews = async () => {
        props.setProg(10);
        setloading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProg(50);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);
        props.setProg(100);
    }

    const fetchMoreData = async () => {
        setloading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setpage(page + 1);
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        setloading(false);
    };

    useEffect(() => {
        LoadNews();
    }, [])


    const checkTitle = (str) => {
        if (str !== null) {
            if (str.length >= 60) {
                return str.slice(0, 60) + '...';
            }
            else {
                return str;
            }
        }
        else {
            return "No Title available";
        }
    }
    const checkDescription = (str) => {
        if (str !== null) {
            if (str.length >= 130) {
                return str.slice(0, 130) + '...';
            }
            else {
                return str;
            }
        }

        else {
            return "No Description available";
        }
    }
    const capatalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }
    return (
        <>
            <div className="container my-4" style={{paddingTop: '40px'}}>
                <h2>
                    {`The News Hour - Top Headlines (${capatalize(props.category)})`}
                </h2>
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner></Spinner>}
            >
                <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                }} className='mx-4'>

                    {articles.map((element) => {
                        return <NewsItem title={checkTitle(element.title)} newsUrl={element.url} description={checkDescription(element.description)} 
                        key = {element.url} imgurl={element.urlToImage} publish={element.publishedAt} source={element.source.name} />;
                    })}
                </div>
            </InfiniteScroll >
        </>
    )
}

export default News