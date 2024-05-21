import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState(""); // stockage de ce qui est tapé dans l'input, stocké dans le state. 'content' = contenu du blog ; 'setContent' = pour pouvoir le modifier ; 'useState' de base, tu es vide
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     const getData = () => {
    //         axios.get("http://localhost:3003/articles").then((res) => console.log(res));
    //     };
    //     getData();
    // }, []);
    // OU
    const getData = () => {
        axios
            .get("http://localhost:3004/articles")
            .then((res) => setBlogData(res.data));
    };
    useEffect(() => getData(), []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 140) {
            //alert("no");
            setError(true);
        } else {
            axios.post("http://localhost:3004/articles", {
                author, //author: author
                content, // content: content
                date: Date.now()
            })
            setError(false);
            setAuthor("");
            setContent("");
            getData();
        }
    };

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text" 
                    placeholder='Nom' 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                <textarea 
                    style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} 
                    placeholder='Message' 
                    onChange={(e) => setContent(e.target.value)}
                    value={content}>
                </textarea> {/*  dès que tu changes, tu me récupère 'e' et on fait 'setContent' change-moi le contenu et on lui passe le contenu 'e.target.value' */}
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>} {/* affichage conditionnel ; si il est 'true', renvoie le 'p' */}
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((article) => (
                        <Article key={article.id} article={article} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Blog;