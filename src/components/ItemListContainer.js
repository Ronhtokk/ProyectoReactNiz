import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { products } from "../products"
import { useEffect, useState } from "react";
import { promesa } from "../promesa";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
    const params = useParams();
    console.log(params);
    const [listProduct, setListproduct] = useState([]);
    useEffect(() => {
        promesa(products)
            .then(data => setListproduct(data))
    }, [])

    return (
        <>
            <h2>Item List Container H2 Function</h2>
            <h2>{greeting}</h2>
            <ItemCount />
            <ItemList listProduct={listProduct} />
        </>
    );
}


export default ItemListContainer;