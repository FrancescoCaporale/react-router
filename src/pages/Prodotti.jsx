import { useEffect, useState } from "react";
import axios from "axios";
export default function Prodotti() {
    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Errore nel caricamento:", err));
    }

    useEffect(fetchProducts, []);


    return (
        <section>
            <h1>Prodotti</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.title}</strong><p>
                            <img src={product.image} alt={product.title} /></p>
                        Prezzo: {product.price} €
                    </li>
                ))}
            </ul>
        </section>




    );
}