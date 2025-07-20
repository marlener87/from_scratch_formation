import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Card from '../components/Card';

const LikePage = () => {
    const [listData, setListData] = useState([]);

    // useEffect(() => {
    //     let movieArray = [];
    //     let moviesId = window.localStorage.movies
    //         ? window.localStorage.movies.split(',')
    //         : [];

    //     //console.log(moviesId);
    //     for (let i = 0; i < moviesId.length; i++) {
    //         axios
    //             .get(
    //                 `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
    //             )
    //             //.then((res) => console.log(res.data));
    //             //.then((res) => setListData((data) => [...data, res.data]));
    //             .then((res) => movieArray.push(res.data))
    //             .then(() => setListData(movieArray));
    //     }
    // }, []);

    useEffect(() => {
        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(',')
            : [];

        //console.log(moviesId);
        for (let i = 0; i < moviesId.length; i++) {
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
                )
                //.then((res) => console.log(res.data));
                .then((res) => setListData((data) => [...data, res.data]));
        }
    }, []);

    return (
        <div className="user-list-page">
            <Header />
            <h2>
                Coups de coeur <FontAwesomeIcon icon={faHeart} />
            </h2>
            <div className="result">
                {listData.length > 0 ? (
                    listData.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))
                ) : (
                    <h2>Aucun coup de coeur pour le moment.</h2>
                )}
            </div>
        </div>
    );
};

export default LikePage;
