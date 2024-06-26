import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = ({ cartItems, handleIncrement, handleDecrement }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const totalAmount = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
        if (!loggedIn) {
            alert("Please login to access the page.");
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    const handleCheckout = () => {
        if (!isAuthenticated) {
            alert("Please login to checkout.");
            navigate('/login');
        } else {
            alert("Checkout successful!");
        }
    };

    return isAuthenticated ? (
        <section className="h-100 h-custom">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="h5">Shopping Bag</th>
                                        <th scope="col">Format</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={item.Img} className="img-fluid rounded-3" style={{ width: "120px" }} alt={item.Title} />
                                                    <div className="flex-column ms-4">
                                                        <p className="mb-2">{item.Title}</p>
                                                        <p className="mb-0">{item.Author}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p style={{ fontWeight: 500 }}>{item.Format}</p>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-row align-items-center">
                                                    <button className="btn btn-link px-2" onClick={() => handleDecrement(index)}>
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="form-control form-control-sm"
                                                        value={item.quantity}
                                                        readOnly
                                                        style={{ width: "50px", textAlign: "center" }}
                                                    />
                                                    <button className="btn btn-link px-2" onClick={() => handleIncrement(index)}>
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <p style={{ fontWeight: 500 }}>${(item.Price * item.quantity).toFixed(2)}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                                        <form>
                                            <div className="d-flex flex-column pb-3">
                                                <div className="d-flex align-items-center pb-2">
                                                    <input className="form-check-input me-2" type="radio" name="paymentMethod" id="creditCard" value="creditCard" checked />
                                                    <label className="form-check-label" htmlFor="creditCard">
                                                        <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit Card
                                                    </label>
                                                </div>
                                                <div className="d-flex align-items-center pb-2">
                                                    <input className="form-check-input me-2" type="radio" name="paymentMethod" id="debitCard" value="debitCard" />
                                                    <label className="form-check-label" htmlFor="debitCard">
                                                        <i className="fab fa-cc-visa fa-2x text-dark pe-2"></i>Debit Card
                                                    </label>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-2" type="radio" name="paymentMethod" id="paypal" value="paypal" />
                                                    <label className="form-check-label" htmlFor="paypal">
                                                        <i className="fab fa-cc-paypal fa-2x text-dark pe-2"></i>PayPal
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-6">
                                        <div className="row">
                                            <div className="col-12 col-xl-6">
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input type="text" id="cardName" className="form-control form-control-lg" placeholder="Enter a name" />
                                                    <label className="form-label" htmlFor="cardName">Name on card</label>
                                                </div>
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input type="text" id="cardExp" className="form-control form-control-lg" placeholder="MM/YY" maxLength="7" />
                                                    <label className="form-label" htmlFor="cardExp">Expiration</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input type="text" id="cardNumber" className="form-control form-control-lg" placeholder="1111 2222 3333 4444" maxLength="19" />
                                                    <label className="form-label" htmlFor="cardNumber">Card Number</label>
                                                </div>
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input type="password" id="cardCvv" className="form-control form-control-lg" placeholder="&#9679;&#9679;&#9679;" maxLength="3" />
                                                    <label className="form-label" htmlFor="cardCvv">CVV</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3">
                                        <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                            <p className="mb-2">Subtotal</p>
                                            <p className="mb-2">${totalAmount.toFixed(2)}</p>
                                        </div>
                                        <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">$2.99</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between mb-4" style={{ fontWeight: 500 }}>
                                            <p className="mb-2">Total (tax included)</p>
                                            <p className="mb-2">${(totalAmount + 2.99).toFixed(2)}</p>
                                        </div>
                                        <button type="button" className="btn btn-primary btn-block btn-lg" onClick={handleCheckout}>
                                            <div className="d-flex justify-content-between">
                                                <span>Checkout</span>
                                                <span>${(totalAmount + 2.99).toFixed(2)}</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : null;
};

export default Cart;
