import React, {useEffect, useState} from "react";
import './App.css';
import Tmdb from './Tmdb';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import Loading from './Images/loading.gif';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista completa de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque(Featured)
      let trending = list.filter(i => i.slug === 'trending');
      let randomChosen = Math.floor(Math.random() * (trending[0].items.results.length - 1));
      let chosen = trending[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);
  
  //função fundo preto da NavBar no momento da rolagem do scroll
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10 ) {
        setblackHeader(true);
      }
        else {
          setblackHeader(false);
      } 
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div classname="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          
            <MovieRow key={key} title={item.title} items={item.items}/>
         
        ))}
      </section>
      
      
      {movieList.length <= 0 && 
        <div className="loading">
          <img src={Loading} alt="loading"></img>
        </div>
      }
    </div>
  );
};

export default App;