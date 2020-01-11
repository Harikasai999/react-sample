import React from 'react';
// import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Cart.css';
const sizes = [
    {
        value: "Size: 5"
    },
    {
        value: "Size: 6"
    },
    {
        value: "Size: 7"
    },
    {
        value: "Size: 8"
    }
]
const qty = [
    {
        value: "Qty: 1"
    },
    {
        value: "Qty: 2"
    },
    {
        value: "Qty: 3"
    },
    {
        value: "Qty: 4"
    }
]
const items = [
    {
        id: '1',
        type: "Sports",
        image: "https://cdn.shopify.com/s/files/1/2598/6284/products/18AW161429-16_1_0d5ebe05-7bf6-483d-a7a9-b915d879be59_2000x.jpg",
        brand: "Men's Black Shoe",
        sold: "Proleague",
        price: "603",
        offer: "78",
        originalPrice: "2745"
    },
    {
        id: '2',
        type: "Classic",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_260,h_260/global/192562/01/fnd/IND/fmt/png/LQDCELL-Optic-Rave-Men's-Running-Shoes",
        brand: "Brown Shoe",
        sold: "Proleague",
        price: "750",
        offer: "69",
        originalPrice: "3876"
    }
]
function Cart(props) {
    return (
        <div >
            <h3 className="heading">Cart</h3>
            <div className="main-container">
                <div className="col-60">
                    <div className="available">
                        <div className="available-container">
                            <img src={require('../Images/discount.png')} width="18" height="18" />
                            <div className="available-text">
                                Available offers
                             </div>
                        </div>
                        <div className="cashback-text">* 10% Cashback up to Rs 200 on PayZapp. TCA</div>
                        <div className="show-more-text-container">
                            <div className="show-more-text">Show More</div>
                            <img src={require('../Images/arrow.png')} width="7" height="7" className="down-arrow-image" />
                        </div>

                    </div>
                    <div className="shop-container">
                        <img src={require('../Images/shipping.png')} width="18" height="18" className="shipping-image" />
                        <div className="shop-text">Shop for</div>
                        <div className="price-text">₹ 297</div>
                        <div className="shop-text">more to get</div>
                        <div className="free-text">Free Delivery.</div>

                    </div>
                    <div className="shipping-bag">
                        <div className="shopping-text">My Shopping Bag (2 items)</div>
                        <div className="shopping-text">Total: ₹ 1,051</div>
                    </div>
                    {items.map((res, key) => {
                        return (
                            <div className="list-item">
                                <div className="list-item-container">
                                    <div className="image-container">
                                        <img src={res.image} width="100" height="130" />
                                    </div>
                                    <div className="details-container">
                                        <div className="first-line">{res.type}</div>
                                        <div className="second-line">{res.brand}</div>
                                        <div className="third-line">Sold by: {res.sold}</div>

                                        <div className="buttons">

                                            <select style={{ height: 20, width: 75, fontSize: 12 }}>
                                                {sizes.map((size, key) => {
                                                    return (
                                                        <option value={size.value}>{size.value}</option>
                                                    )
                                                })}


                                            </select>
                                            <select style={{ height: 20, width: 75, fontSize: 12, marginLeft: 10 }}>
                                                {qty.map((quant, key) => {
                                                    return (
                                                        <option value={quant.value}>{quant.value}</option>
                                                    )
                                                })}


                                            </select>

                                        </div>
                                    </div>
                                    <div className="price-container">
                                        <div className="item-price">₹ {res.price}</div>
                                        <div className="offer-container">
                                            <div className="stikeoff-text"><strike>₹ {res.originalPrice}</strike></div>
                                            <div className="offer-text">{res.offer}% OFF</div>
                                        </div>
                                    </div>
                                    <div className="empty-container" />
                                </div>
                                <div className="border-line" />
                                <div className="list-item-buttons">
                                    <div className="remove-text">REMOVE</div>
                                    <div className="right-border" />
                                    <div className="whishlist-text">MOVE TO WHISHLIST</div>
                                    <div className="empty"></div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="list-item">
                        <div className="list-item-container">
                            <div className="image-container">
                                <img src={"https://cdn.shopify.com/s/files/1/2598/6284/products/18AW161429-16_1_0d5ebe05-7bf6-483d-a7a9-b915d879be59_2000x.jpg"} width="100" height="130" />
                            </div>
                            <div className="details-container">
                                <div className="first-line">Sports</div>
                                <div className="second-line">Men's Black Shoe</div>
                                <div className="third-line">Sold by: Proleague</div>

                                <div className="buttons">

                                    <select style={{ height: 20, width: 75, fontSize: 12 }}>
                                        {sizes.map((res, key) => {
                                            return (
                                                <option value={res.value}>{res.value}</option>
                                            )
                                        })}


                                    </select>
                                    <select style={{ height: 20, width: 75, fontSize: 12, marginLeft: 10 }}>
                                        {qty.map((res, key) => {
                                            return (
                                                <option value={res.value}>{res.value}</option>
                                            )
                                        })}


                                    </select>

                                </div>
                            </div>
                            <div className="price-container">
                                <div className="item-price">₹ 603</div>
                                <div className="offer-container">
                                    <div className="stikeoff-text"><strike>₹ 2,745</strike></div>
                                    <div className="offer-text">78% OFF</div>
                                </div>
                            </div>
                            <div className="empty-container" />
                        </div>
                        <div className="border-line" />
                        <div className="list-item-buttons">
                            <div className="remove-text">REMOVE</div>
                            <div className="right-border" />
                            <div className="whishlist-text">MOVE TO WHISHLIST</div>
                            <div className="empty"></div>
                        </div>
                    </div> */}
                    <div className="add-more-container">
                        <div className="add-more">
                            <img src={require('../Images/wishlist.png')} width="18" height="18" className="wishlist-icon" />
                            <div className="add-more-text">
                                Add More from Whishlist
                    </div>
                        </div>
                        <div>
                            <img src={require('../Images/next.png')} width="10" height="10" className="right-icon" />
                        </div>
                    </div>
                </div>

                <div className="col-40">
                    <div className="coupon-text">COUPONS</div>
                    <div className="apply-coupons-container">
                        <div className="add-more">
                            <img src={require('../Images/coupon.png')} width="18" height="18" className="coupon-icon" />
                            <div className="apply-coupon-text">
                                Apply Coupons
                             </div>
                        </div>
                        <div className="apply-button">
                            APPLY
                        </div>
                    </div>
                    <div class="coupons-for-you-container">
                    <div class="login-text">Login</div>
                    <div class="coupons-for-you-text">to see best coupons for you</div>
                    </div>
                    <div class="border-bottom"/>
                    <div class="price-details">PRICE DETAILS</div>
                    <div class="common-container">
                    <div class="common-text">Bag Total</div>
                    <div class="common-text">₹ 3,744</div>
                    </div>
                    <div class="common-container">
                    <div class="common-text">Bag Discount</div>
                    <div class="discount-text">-₹ 2,842</div>
                    </div>
                    <div class="common-container">
                    <div class="common-text">Coupon Discount</div>
                    <div class="coupon-txt">Apply Coupon</div>
                    </div>
                    <div class="common-container">
                    <div class="common-text">Order Total</div>
                    <div class="common-text">₹ 902</div>
                    </div>
                    <div class="common-container">
                    <div class="common-text">Delivery Charges</div>
                    <div class="common-text">₹ 149</div>
                    </div>
                    {/* <div className="login-container">
                    <div className="container-1">
                    <img src={require('../Images/shipping.png')} width="18" height="18" className="shipping-icon" />
                    </div>
                     <div className="container-2">
                         <div className="login-view">
                     <div class="login-txt">Login</div>
                    <div class="coupons-for-you-text">to get Free Delivery on your</div>
                    </div>
                     </div>
                     
                    </div> */}
                 
                    <div class="border-bottom"/>
                    <div class="common-container">
                    <div class="total-text">Total</div>
                    <div class="total-text">₹ 1051</div>
                    </div>
                    <div className="button-container">
                        PLACE ORDER
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;