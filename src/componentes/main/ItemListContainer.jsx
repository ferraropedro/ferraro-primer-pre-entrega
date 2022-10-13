import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { products } from '../../mock/productsMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
   
    // const valor = useParams()
    const { categoryName } = useParams()
 
    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter((prod)=> prod.category === categoryName)
                setTimeout(() => {
                    res(categoryName ? prodFiltrados : products);
                }, 200);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);


    return (
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;