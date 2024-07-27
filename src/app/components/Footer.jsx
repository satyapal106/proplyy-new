import React from 'react'

export const Footer = () => {
    return (
        <>
            {/*-----Footer section--------*/}
            <footer className="footer-area footer--light">
                <div className="footer-big">
                    {/* start .container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-about">
                                        <img
                                            src="assets/images/logo/logo.png"
                                            width="150px"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <p>
                                            Latest Trends|Technology &amp; Innovation|Industry
                                            Relations|Business News|Market Research
                                        </p>
                                    </div>
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-md-4 */}
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu footer-menu--1">
                                        <h4 className="footer-widget-title">Popular Category</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Wordpress</a>
                                            </li>
                                            <li>
                                                <a href="#">Plugins</a>
                                            </li>
                                            <li>
                                                <a href="#">Joomla Template</a>
                                            </li>
                                            <li>
                                                <a href="#">Admin Template</a>
                                            </li>
                                            <li>
                                                <a href="#">HTML Template</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-md-3 */}
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">Our Company</h4>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">How It Works</a>
                                            </li>
                                            <li>
                                                <a href="#">Affiliates</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Plan &amp; Pricing</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-lg-3 */}
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h4 className="footer-widget-title">Help Support</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Support Forum</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Support Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Refund Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="#">Buyers Faq</a>
                                            </li>
                                            <li>
                                                <a href="#">Sellers Faq</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* Ends: .col-lg-3 */}
                        </div>
                        {/* end /.row */}
                    </div>
                    {/* end /.container */}
                </div>
                {/* end /.footer-big */}
                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>© 2024 . All rights reserved.</p>
                                </div>
                                <div className="go_top">
                                    <span className="icon-arrow-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*-----End Footer Section----*/}
        </>

    )
}
