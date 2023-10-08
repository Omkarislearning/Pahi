import React from 'react'
import { Link } from 'react-router-dom'

const VendorsDisplay = ({Data}) => {    
  return (
                            <   div id className="vendor-listing-cards ph-ls">
                                                <div className="vendor-card">
                                                    <div className="image ripple-effect">
                                                        <Link to={Data.link}> 
                                                        <a target >
                                                            <div className="card-image" style={{ backgroundImage: `url(${Data.Img})` }} title="Cine Photo Shoot | Mumbai | Photographer">
                                                            </div>
                                                        </a>
                                                        </Link>
                                                       
                                                        {/* Add to shortlist section for listing page */}
                                                        <a href="javascript:;" data-action="add" data-shortlist-id data-userid data-service="photography" data-tradepartner-id={7540} className="add-to-shortlist-btn">
                                                            <i className="fa fa-heart sh-added hidden" title="Added to Shortlist" />
                                                            <i className="fa fa-heart-o sh-add" title="Add to Shortlist" />
                                                        </a>
                                                        <div className="social-login vendor hidden">
                                                            <div className="close-login">Close</div>
                                                            <a className="fb-login-shortlist-btn fb" href="/accounts/facebook/login/?next="><i className="fa fa-facebook fa-lg" />Login to Add to
                                                                Shortlist</a>
                                                        </div>

                                                        <div className="count-wrapper">
                                                            <div className="single-count">
                                                                <i className="fa fa-heart-o" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Shortlisted in the recent past" />
                                                                <span className="counter">0</span>
                                                            </div>
                                                            <div className="single-count">
                                                                <i className="fa fa-thumbs-o-up" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Recommended in the recent past" />
                                                                <span className="counter">14</span>
                                                            </div>
                                                            <div className="single-count">
                                                                <i className="fa fa-eye" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Views in the recent past" />
                                                                <span className="counter">29</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="entry-content">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-sm-12 col-xs-12">
                                                                <div className="title">
                                                                    <a className="photographer" data-id={7540} target="_blank" href="" title="Cine Photo Shoot">
                                                                        <h2>{Data.Title}</h2>
                                                                    </a>
                                                                </div>
                                                                <div className="vendor_details">
                                                                    <div className="score-wrapper">
                                                                        <div className="tp-score">
                                                                            {/* Weddingz Score:  */}
                                                                            <div className="star-score">
                                                                                <div className="rating">
                                                                                    <div className="bg" />
                                                                                    <div className="value" style={{ width: '80%' }} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price">
                                                                        <p>{Data.VenderType}</p>
                                                                        <sm className="strike">
                                                                            <price><i className="fa fa-inr" /> {Data.Price}</price>
                                                                        </sm>
                                                                        <i className="fa fa-check" />
                                                                    </div>
                                                                </div>
                                                                {/* <div class="vendor_details__content">
							</div> */}
                                                                <div className="package-desc">{Data.Description}</div>
                                                                <div className="vendor_details__actions">
                                                                    <a href="#" data-target="#get_quote" data-service="photographer" className="btn btn-default quote-btn main-get-quote ripple-effect photo_campaign_enquire main-enquire-button btn-get-quote" data-form-type="short_form" data-form-id="get_quote" data-source="website-inquiry" data-is-featured="true" data-trade-partner-id={7540}>
                                                                        Send Enquiry
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                {/* End of the score display */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    </div>

  )
}

export default VendorsDisplay