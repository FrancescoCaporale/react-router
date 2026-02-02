import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function ProdottoSingolo() {
    const { id } = useParams();
    const [product, setProducts] = useState([])
    function fetchProducts() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Errore nel caricamento:", err));
    }

    useEffect(fetchProducts, []);

    return (
        <section>
            <h1>{product.title}</h1>

            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <strong>Prezzo: {product.price} €</strong>
        </section>
    );
}