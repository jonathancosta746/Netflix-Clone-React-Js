import React, {useState} from "react";
import './Style.css';
import ArrowRight from './images/material-right.png';
import ArrowLeft from './images/material-left.png';


const MovieRow = ({title, items})  => {

//============== Função Avançar filmes na lista ============
    const [scrollX, setScrollX] = useState(0)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x=0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <div className="title--row">{title}</div>
            

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <img src={ArrowLeft} alt='Esquerda'></img>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <img src={ArrowRight} alt='Direita'></img>
            </div>
            
            
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>                   
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="Filme"/>
                        </div>
                    ))}  
                </div>              
            </div>
        </div>
    );
};

export default MovieRow