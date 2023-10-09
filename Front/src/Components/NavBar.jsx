import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
            <div className="home_black_version">
        <header className="header_area header_black">
          {/* header top starts */}
          <div className="header_top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="social_icone">
                    <ul>
                      <li><a href="#"><i className="ion-social-facebook" /></a></li>
                      <li><a href="#"><i className="ion-social-twitter" /></a></li>
                      <li><a href="#"><i className="ion-social-instagram" /></a></li>
                      <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                      <li><a href="#"><i className="ion-social-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="top_right text-right">
                    <ul>
                      <li className="top_links">
                        <a href="#">My Account <i className="ion-chevron-down" /></a>
                        <ul className="dropdown_links">
                          {/* <li><a href="#">Checkout</a></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Shopping Cart</a></li>
                                        <li><a href="#">Wishlist</a></li> */}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header top ends */}
          {/* header bottom starts */}
          <div className="header_bottom sticky-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="main_menu_inner">
                    <div className="logo_sticky">
                      <a href="#"><img src="https://bookurvenue.com/images/logos/logo.png?v=WMOQ" alt="logo" /></a>
                    </div>
                    <div className="main_menu">
                      <nav>
                        <ul>
                          <li>
                          <Link to ="/">      
                          <a href>BookYourVenue</a>
                          </Link>

                          </li>
                                                    
                          <li className="active">
                            <a href="#">Vendors <i className="ion-chevron-down" /></a>
                            <ul className="sub_menu">
                              <li>
                              <Link to ="/Photographer">      
                                <a href="#">Photographer</a>
                              </Link>
                              </li>
                              <li>
                              <Link to ="/Caterer">      
                                <a href="#">Caterers</a>
                              </Link>
                                
                              </li>
                              <li>
                              <Link to ="/Dj">      
                                <a href="#">Dj</a>
                              </Link>
                               
                              </li>
                              {/* <li><a href="#">Decorators</a></li>
                              <li><a href="#">Mehendi</a></li> */}
                              {/* <li><a href="#">Blog</a></li> */}
                            </ul>
                          </li>
                          <li>
                            <a href="#">Category <i className="ion-chevron-down" /></a>
                            <ul className="mega_menu">
                              <li>
                                <a href="#">Real Weddings</a>
                                <ul>
                                  <li><a href="#">Desitnaition Weddings</a></li>
                                  <li><a href="#">Beach Weddings</a></li>
                                  <li><a href="#">Palace Weddings</a></li>
                                  <li><a href="#">Budget friendly Weddings</a></li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Photos</a>
                                <ul>
                                  <li><a href="#">Photography</a></li>
                                  <li><a href="#">Decor</a></li>
                                  <li><a href="#">Mehendi</a></li>
                                  <li><a href="#">Bridal Jewelry</a></li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Venues</a>
                                <ul>
                                  <li><a href="#">Bengaluru</a></li>
                                  <li><a href="#">Bhubaneshwar</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          {/* <li>
                            <a href="#">Uncut Diamonds <i className="ion-chevron-down" /></a>
                            <ul className="sub_menu pages">
                              <li><a href="#">Earrings</a></li>
                              <li><a href="#">Pendant</a></li>
                              <li><a href="#">Ring</a></li>
                              <li><a href="#">Bracelet</a></li>
                              <li><a href="#">Necklace Set</a></li>
                            </ul>
                          </li> */}
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Contact Us</a></li>
                          {/* <li>
                            <a href="#">Special Collection <i className="ion-chevron-down" /></a>
                            <ul className="sub_menu pages">
                              <li><a href="#">Gemstone</a></li>
                              <li><a href="#">Gold</a></li>
                              <li><a href="#">Rose Gold</a></li>
                              <li><a href="#">Silver</a></li>
                            </ul>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header bottom ends */}
        </header> 
      </div>
    </div>
  )
}

export default NavBar