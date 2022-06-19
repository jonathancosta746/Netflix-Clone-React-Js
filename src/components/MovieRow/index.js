import React from "react";
import './Style.css';
import ArowRight from './images/material-right.svg';
import ArowLeft from './images/material-left.svg';


export default ({title, items})=>{
    return (
        <div className="movieRow">
            <div className="title--row">{title}</div>
            

            <div className="movieRow--left">
                <img src={ArowLeft}></img>
            </div>
            <div className="movieRow--right">
                <img src={ArowRight}></img>
            </div>
            
            
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