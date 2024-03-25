
const NewsItem = ({title, description, src, url}) => {
    return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2" style={{maxWidth:"320px"}}>
    <img src={src} style={{height:"200px" ,width:"318px"}} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description ?description.slice(0,90) : "News Items to be displayed"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
    )
  }
  
  export default NewsItem;