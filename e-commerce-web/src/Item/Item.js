import { Link } from "react-router-dom"

const Item = ({ data, addToCart }) => {

    const { id, image, title, price } = data

    return (
        <div className="card">
            <div className="grid">
                <div className="image">
                    <img src={image} height="125" width="125"/>
                </div>
                <div className="title">
                    <Link to={`/product/${id}`} className="link titleLink">
                        {title}
                    </Link>
                </div>
                <div className="flex">
                    <span className="price" style={{ marginRight: 15 }}>
                        ${price}
                    </span>
                    <div className="cart" onClick={addToCart}>
                        <img className="cartImg" src="/cart.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Item }