import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import '../styles/aem-grid.css';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="page_container padding_details">

                            <div className="aem-Grid  aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 padding_details">
                                    <div className="aem-Grid  aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--12">
                                            <img width={80} src={img} className="img-fluid" alt="product" />
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--12">
                                            <img width={80} src={img} className="img-fluid" alt="product" />
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--12">
                                            <img width={80} src={img} className="img-fluid" alt="product" />
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--12">
                                            <img width={80} src={img} className="img-fluid" alt="product" />
                                        </div>

                                    </div>

                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 padding_details">
                                    <img width={300} src={img} className="img-fluid" alt="product" />

                                </div>
                                
                                <div className=" aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 padding_details pagetext-capitalize">
                                    <ul class="breadcrumb">
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Women's</a></li>
                                        <li><a href="#">OuterWear</a></li>
                                    </ul>
                                    <h3> <strong>{title}</strong></h3>
                                    <h6 className="text-blue">
                                        <strong>
                                            <span>$</span>
                                            {price}
                                        </strong>
                                    </h6>
                                    <p >{info}</p>

                                    <div className='color_width'>
                                        <h5>Color</h5>
                                        <span className='color1'></span>
                                        <span className='color2'></span>
                                        <span className='color3'></span>
                                        <span className='color4'></span>
                                    </div>
                                    <div className='size'>
                                        <h5>Size</h5>
                                        <span >XS</span>
                                        <span >S</span>
                                        <span >M</span>
                                        <span >L</span>
                                        <span >XL</span>
                                    </div><br />
                                    <div className='cart_display'>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                        <Link to='/cart'>
                                            <ButtonContainer >
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
