import './index.css'

const ProductItem = props => {
    const { productDetails } = props
    const { productId, imageURL, description, title } = productDetails
    return (
        <>
            <li className="product-item-container">
                <div className="d-inline-block border rounded p-2">
                    <img
                        className="product-item-image"
                        src={imageURL}
                        alt={`product-item${productId}`} style={{ height: '200px', }}
                    />
                    <div className="product-item-details-container">
                        <p className="product-item-title">{title}</p>
                        {/* <p className="product-item-description">{description}</p> */}
                    </div>
                </div>
            </li>

        </>
    )
}

export default ProductItem
