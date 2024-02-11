import "./Products.css"

function Products() {
    return (
        <div className="products-container">
            <div className="products-category">
                <h2>Kimchi</h2>
                <p>All kimchi made in-house, and sold to you fresh!</p>
            </div>
            <div className="products-category">
                <h2>K-Beauty</h2>
                <p>The latest in Korean skincare</p>
            </div>
            <div className="products-category">
                <h2>Food from all of Asia</h2>
                <p>Korea doesn't limit itself regionally in pursuit of a good meal, so why should we?
                    We also carry food and ingredients from China, Japan, and more!
                </p>
            </div>
        </div>
    );
}

export default Products;
