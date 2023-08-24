import React from 'react'

const NewsItem  = (props) =>{

        const handleError= () =>
        {
            imgurl = "https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"; 
        }
        let { title, description, imgurl, newsUrl, publish, source } = props;
        return (
            <div>
                <div className="card" style={{ width: "368px", margin: "15px",
                height: "500px", border: "2px solid black", boxShadow: "4px 4px 4px 1px grey" }}>
                    <img src={imgurl?imgurl:"https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" } onError= {handleError}className="card-img-top" alt="..." style={{width: "360px", height:"250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='-blank' className="btn  btn-sm btn-primary">Read More...</a>
                    </div>
                <footer className="blockquote-footer mx-2">
                    <cite title="Source Title"><b>Published on:</b> {new Date(publish).toGMTString()} </cite>
                    <cite title="Source Title"><b> Source: </b> {source}</cite>
                    </footer>
                </div>
            </div>
        )
}

export default NewsItem