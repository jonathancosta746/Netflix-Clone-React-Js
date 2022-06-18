import React from "react";
import './Style.css';

export default ({title, items})=>{
    return (
        <div className="movieRow">
            {title}
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}  
                </div>              
            </div>
        </div>
    );
}