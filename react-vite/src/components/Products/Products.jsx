import "./Products.css";

function Products() {
    return (
        <div className="products-container">
            <div className="products-category" style={{width: "33vw", minWidth: "426px"}}>
                <div
                    className="product-image-edge"
                    style={{
                        backgroundImage: `url("https://kimsasianbucket.s3.amazonaws.com/kimchi_closeup_cr.png")`,
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>Kimchi</h2>
                            <p>Authentic homemade kimchi sold to you fresh!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-category" style={{width: "34vw", minWidth: "428px"}}>
                <div
                    className="product-image-center"
                    style={{
                        backgroundImage: `url("https://kimsasianbucket.s3.amazonaws.com/kbeauty_cr.png")`,
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>K-Beauty</h2>
                            <p>The latest in Korean skincare and cosmetics!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-category" style={{width: "33vw", minWidth: "426px"}}>
                <div
                    className="product-image-edge"
                    style={{
                        backgroundImage: `url("https://kimsasianbucket.s3.amazonaws.com/asian_cuisine_cr.png")`,
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>Food from all of Asia</h2>
                            <p>We carry food and ingredients from Korea, Japan, and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
