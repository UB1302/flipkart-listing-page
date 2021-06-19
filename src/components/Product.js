

const Product = ({ imgURL, brand, price, size, idealFor }) => {

    return (
        <div className="product">
            <img className="product-img" src={imgURL}></img>
            <h4 className="product-brand">{brand}</h4>
            <div className="product-info">
                <p>{price}</p>
                <p>{size}</p>
                <p>{idealFor}</p>
            </div>
        </div>
    );
}

export default Product;