import React, { Component } from "react";
import edit from '../../images/edit.svg';
import remove from '../../images/trash.svg';
import heart from '../../images/heart.svg';
export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem, cartSubTotal, cartTax, cartTotal, clearCart } = this.props.value;

        return (
            <div className="aem-Grid  aem-Grid--12 pagetext-capitalize pagetext-center">
                <div className="aem-GridColumn aem-GridColumn--default--2">
                    <img
                        src={img}
                        style={{ width: "5rem", heigth: "5rem" }}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 ">
                    <span className="d-lg-none">product :</span> {title}
                    <strong>
                        <span className="d-lg-none">price :</span> ${price}
                    </strong>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 ">
                   
                        <div>
                            <span
                                className="increment"
                                onClick={() => decrement(id)}
                            >
                                -
                            </span>
                            <span className="increment1">{count}</span>
                            <span
                                className=" increment"
                                onClick={() => increment(id)}
                            >
                                +
                            </span>
                        </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 ">
                    <div className=" cart-icon" onClick={() => removeItem(id)}>
                        <span><img src={edit} />&nbsp; Edit Item</span>
                        <span><img src={remove} />&nbsp; Remove</span>

                        <span><img src={heart} />&nbsp; Save For Later</span>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3 total">
                    <h5>
                        <span>item total : ${total} </span>
                    </h5>
                    <h5>
                        <span > subtotal :</span>{" "}
                        <span>$ {cartSubTotal} </span>
                    </h5>
                    <h5>
                        <span > tax :</span>{" "}
                        <span>$ {cartTax} </span>
                    </h5>
                    <h5>
                        <span > total :</span>{" "}
                        <span>$ {cartTotal} </span>
                    </h5>
                    <div class="payPal">
                        <h4>CHECKOUT</h4>
                    </div>
                        <br />
                    <div class="payPal">
                        <div class="responsivePayPal">
                            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}