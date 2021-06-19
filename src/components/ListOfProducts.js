import Product from "./Product";

const ListOfProducts = ({ products }) => {
    // console.log(products);
    return (
        <div className='product-list'>
            {
                products.map((item) => {
                    return <Product key={item.id} imgURL={item.product_url} price={item.price} size={item.size} brand={item.brand} idealFor={item.idealFor} />
                })
            }
        </div>
    );
}

export default ListOfProducts;