import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import ListOfProducts from './ListOfProducts';


const Filter = () => {

    // const [filter, setFilter] = useState(null);
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(null);
    const [brand, setBrand] = useState(null);
    const [idealFor, setidealFor] = useState(null);
    // const inputRef = useRef();



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

                    <label for="size-filter">Choose a size:</label>

                    <select value={size} id="size-filter" onChange={handleSize}>
                        <option value="">--Please choose an option--</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>

                    <label for="brand-filter">Choose a Brand:</label>

                    <select value={brand} id="brand-filter" onChange={handleBrand}>
                        <option value="">--Please choose an option--</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Puma">Puma</option>
                        <option value="Nike">Nike</option>
                    </select>
                    <label for="idealFor-filter">Ideal for:</label>

                    <select value={idealFor} id="idealFor" onChange={handleIdealFor}>
                        <option value="">--Please choose an option--</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>

                    </select>

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