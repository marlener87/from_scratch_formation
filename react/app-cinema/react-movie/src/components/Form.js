import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState('code');
    const [sortGoodBad, setSortGoodBad] = useState(null);

    // quand le composant est appelé, tu vas jouer la chose suivante
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
            )
            //.then((res) => console.log(res.data.results));
            .then((res) => setMoviesData(res.data.results)); // vérifier que les données sont passées dans l'inspecteur -> Components -> Form -> hooks -> State -> la liste des éléments
    }, [search]);

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder="Entrer le titre d'un film"
                        id="search-input"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type="submit" value="Rechercher" />
                </form>

                <div className="btn-sort-container">
                    <div
                        className="btn-sort"
                        id="goodToBad"
                        onClick={() => setSortGoodBad('goodToBad')}
                    >
                        Top
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </div>
                    <div
                        className="btn-sort"
                        id="badToGood"
                        onClick={() => setSortGoodBad('badToGood')}
                    >
                        Flop
                        <span>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="result">
                {moviesData
                    .slice(0, 12)
                    .sort((a, b) => {
                        if (sortGoodBad === 'goodToBad') {
                            return b.vote_average - a.vote_average;
                        } else if (sortGoodBad === 'badToGood') {
                            return a.vote_average - b.vote_average;
                        }
                        return 0;
                    })
                    .map((movie) => (
                        //<h3>{movie.title}</h3>
                        <Card movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    );
};

export default Form;
