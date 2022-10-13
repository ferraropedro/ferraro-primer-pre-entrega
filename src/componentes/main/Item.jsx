import React from 'react';

const Item = ({ prod }) => {
    return (
        <article className="card">
            <img src={prod.img} alt={prod.title} />
            <div className="card-info">
                <h2>{prod.title}</h2>
                <h4>${prod.price}.-</h4>
                <h5>#{prod.category}</h5>
                <button>
                    <a href={`/item/${prod.id}`}>ver detalles</a>            
                </button>
            </div>
        </article>
    );
};

export default Item;