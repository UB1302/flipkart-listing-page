import axios from 'axios';
import { useState, useEffect } from 'react';
import ListOfProducts from './ListOfProducts';

const Filter = () => {

    // const [filter, setFilter] = useState(null);
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(null);
    const [brand, setBrand] = useState(null);
    const [idealFor, setidealFor] = useState(null);



    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/UB1302/data-for-flipkart/products')
            .then(res => setProducts(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    function handleSize(e) {
        // console.log(e.target.value)
        setSize(e.target.value);

    }
    function handleBrand(e) {
        // console.log(e.target.value)
        setBrand(e.target.value);

    }
    function handleIdealFor(e) {
        // console.log(e.target.value)
        setidealFor(e.target.value);

    }
    useEffect(() => {
        console.log(size);

        if (size) {
            let items;
            const getProducts = async () => {
                await axios.get('https://my-json-server.typicode.com/UB1302/data-for-flipkart/products')
                    .then(res => {
                        // console.log(res.data)
                        items = res.data

                    }

                    );
                console.log(items);

                let arr = items.filter(item => item.size === size);

                // console.log(arr);
                setProducts(arr);
            }
            getProducts();

        }


        // setSize(null);
    }, [size]);

    useEffect(() => {
        console.log(brand);

        if (brand) {
            let items;
            const getProducts = async () => {
                await axios.get('https://my-json-server.typicode.com/UB1302/data-for-flipkart/products')
                    .then(res => {
                        // console.log(res.data)
                        items = res.data

                    }

                    );
                console.log(items);

                let arr = items.filter(item => item.brand === brand);

                // console.log(arr);
                setProducts(arr);
            }
            getProducts();

        }


        // setSize(null);
    }, [brand]);

    useEffect(() => {
        console.log(idealFor);

        if (idealFor) {
            let items;
            const getProducts = async () => {
                await axios.get('https://my-json-server.typicode.com/UB1302/data-for-flipkart/products')
                    .then(res => {
                        // console.log(res.data)
                        items = res.data

                    }

                    );
                console.log(items);

                let arr = items.filter(item => item.idealFor === idealFor);

                // console.log(arr);
                setProducts(arr);
            }
            getProducts();

        }


        // setSize(null);
    }, [idealFor]);

    function clearFilter() {

    }

    return (
        <>
            <header>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span className="filter-name">Size</span>
                        <input type="radio" id="S" name="size" value="S" onChange={handleSize} />
                        <label for="S">S</label>
                        <input type="radio" id="M" name="size" value="M" onChange={handleSize} />
                        <label for="M">M</label>
                        <input type="radio" id="L" name="size" value="L" onChange={handleSize} />
                        <label for="L">L</label>
                        <input type="radio" id="XL" name="size" value="XL" onChange={handleSize} />
                        <label for="XL">XL</label>
                    </div>
                    <div>
                        <span className="filter-name">Brand</span>
                        <input type="radio" id="adidas" name="brand" value="Adidas" onChange={handleBrand} />
                        <label for="adidas">Adidas</label>
                        <input type="radio" id="puma" name="brand" value="Puma" onChange={handleBrand} />
                        <label for="puma">Puma</label>
                        <input type="radio" id="nike" name="brand" value="Nike" onChange={handleBrand} />
                        <label for="nike">Nike</label>
                    </div>
                    <div>
                        <span className="filter-name">Ideal For</span>
                        <input type="radio" id="men" name="idealFor" value="Men" onChange={handleIdealFor} />
                        <label for="men">Men</label>
                        <input type="radio" id="women" name="idealFor" value="Women" onChange={handleIdealFor} />
                        <label for="women">Women</label>
                    </div>
                    <div>
                        <button type="submit" onClick={clearFilter}>Clear all Filters</button>
                        <button type="submit">Filter</button>
                    </div>
                </form>
            </header>

            <main>
                {products && <ListOfProducts products={products} />}
            </main>

        </>
    );
}

export default Filter;