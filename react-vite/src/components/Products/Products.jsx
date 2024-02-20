import "./Products.css";
import kimchi from '../../images/kimchi.png';
import kbeauty from '../../images/kbeauty.png';
import food from '../../images/pan-asian-food.png';

function Products() {
    return (
        <div className="products-container">
            <div className="products-category">
                <img className="product-image" src={kimchi} />
                <h2>Kimchi</h2>
                <p>All kimchi made in-house since 1981, and sold to you fresh!</p>
            </div>
            <div className="products-category">
                <img className="product-image" src={kbeauty} />
                <h2>K-Beauty</h2>
                <p>The latest in Korean skincare</p>
            </div>
            <div className="products-category">
                <img className="product-image" src={food} />
                <h2>Food from all of Asia</h2>
                <p>Korea doesn&apos;t limit itself regionally in pursuit of a good meal, so why should we?
                    We also carry food and ingredients from China, Japan, and more!
                </p>
            </div>
        </div>
    );
}

export default Products;
