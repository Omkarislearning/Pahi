import React from 'react'
import '../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Inner = ({Data}) => {
  return (
    <div>
        <main className="cd-main-content">
          <div className="container mTop-30 venue-container">
            {/* sticky-header + breadcrumbs */}
           
            {/* Main Title */}

            <div className="venue-card__title tp-title">
              <div className="text-content">
                <h1>{Data.title}</h1>		
              </div>	
            </div>
            <div className="venue-data tp-data">
              <div className="venue-data-left">
                <div className="venue-detail-card">
                  <div className="venue-card">
                    <div className="venue-card__image">
                      <div className="venue-carousel">
                      <Carousel >
                        <div className="img-item">
                          <div className="main-img"><img src={Data.main_img} alt="Cine Photo Shoot | Mumbai | Photographer" data-src={Data.main_img} className="img-responsive owl-lazy" /></div>
                          <div className="blur-img"><img src={Data.main_img} alt="Cine Photo Shoot | Mumbai | Photographer" data-src={Data.main_img} className="owl-lazy" /></div>
                        </div>
                        <div className="img-item ">
                          <div className="main-img"><img src={Data.pic2} alt="Cine Photo Shoot |  | Riddhi x Kevin | Photographer" data-src={Data.pic2} className="img-responsive owl-lazy" /></div>
                          <div className="blur-img"><img src={Data.pic2} alt="Cine Photo Shoot |  | Riddhi x Kevin | Photographer" data-src={Data.pic2} className="owl-lazy" /></div>
                        </div>
                        <div className="img-item ">
                          <div className="main-img"><img src={Data.pic3} className="img-responsive owl-lazy" /></div>
                          <div className="blur-img"><img src={Data.pic3} alt="Cine Photo Shoot |  | Riddhi x Kevin | Photographer" data-src="" className="owl-lazy" /></div>
                        </div>
                        </Carousel>
                      </div>
                      <div className="venue-action">
                        <div className="shortlisted ">
                          <i className="fa fa-heart" aria-hidden="true" />
                        </div>
                        <div className="liked">
                          <div className="recommended-like-section">				
                            <form id="review_form" action="/ratings/vote/" className="ratings" method="post">
                              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="j8bL9EIT4jKranV4eOvwFAuZTV0H4fqk" />
                              <input id="id_score" name="score" type="hidden" defaultValue={1} />
                              <input id="id_content_type" name="content_type" type="hidden" defaultValue="trade_partner.trade_partner" />
                              <input id="id_object_pk" name="object_pk" type="hidden" defaultValue={7540} />
                              <input id="id_key" name="key" type="hidden" defaultValue="recommended" />
                              <input id="id_timestamp" name="timestamp" type="hidden" defaultValue={1696339619} />
                              <input id="id_security_hash" maxLength={40} name="security_hash" type="hidden" defaultValue="fed59ccaf7afc4a53f73f0d30a55dfed8ec5c100" />
                              <input id="id_honeypot" name="honeypot" type="hidden" />
                            </form>
                            <a href="#" id="like-button" className="like-counter" data-toggle="tooltip" data-placement="right" title="Recommend">
                              <i className="fa fa-thumbs-up" />
                              <i className="fa fa-refresh fa-spin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="text-updated-on">
                        Updated on: Sat 04 Feb 2023
                        <i className="fa fa-question-circle" data-delay={0} data-toggle="tooltip" data-placement="top" title="We go to great lengths to ensure that the rate card, contact details, availability and other relevant information on our site is verified and updated" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* shortlist  data */}
              <div className="venue-data-right">
                <div className="venue-data-action">
                  <div className="veg mTop-10">
                    <div className="amount for-tp">
                      <div className="tp-price">
                        <i className="fa fa-inr" /> <span className><price>{Data.price}</price></span>
                      </div>
                      Package Price
                    </div>
                  </div>
                  <hr />
                  <div className="data tp-data">
                    <div className="venue-score">
                      {/* Weddingz Score:  */}
                      <div className="star-score">
                        <div className="rating">
                          <div className="bg" />
                          <div className="value" style={{width: '80%'}} />
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="stats">
                      <div className="liked" data-delay={0} data-toggle="tooltip" data-placement="top" title="Recommendations in the recent past">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                        <span className="recomment-count">14</span>
                      </div>
                      <div className="views" data-delay={0} data-toggle="tooltip" data-placement="top" title="Views in the recent past">
                        <i className="fa fa-eye" aria-hidden="true" />
                        36
                      </div>
                      <div className="shortlist" data-delay={0} data-toggle="tooltip" data-placement="top" title="Shortlisted in the recent past">
                        <i className="fa fa-heart-o" aria-hidden="true" />
                        0
                      </div>
                    </div>
                  </div>
                  <div className="venue-actions">
                    <div className="single">
                      <div className="social-login vendor">
                        <a className="fb fb-login-shortlist-btn fb-login-btn" data-target="#newLoginModal" data-toggle="modal" data-fb-next-url="/wedding-photographers/mumbai/cine-photo-shoot/?state=addToShortlist" href="#?next=/wedding-photographers/mumbai/cine-photo-shoot/&state=addToShortlist"> Login to Shortlist</a>
                      </div>
                    </div>
                    <div className="get-quote">
                      <a href="#" data-target="#get_quote" data-service="photographer" data-is-featured="true" data-form-type="short_form" data-form-id="get_quote" className="btn btn-default btn-block quote-btn main-get-quote ripple-effect othertp_campaign_enquire main-enquire-button btn-get-quote" data-source="website-inquiry" data-trade-partner-id={7540}>
                        Send Enquiry
                        <span className="ink animate" style={{height: '330px', width: '330px', top: '-142.25px', left: '-45.5px'}} />
                      </a>
                    </div>
                    <div className="helper-content">
                      {/* Scroll trigger */}
                      <span className="enquire-btn ripple-effect" />
                    </div>
                  </div>
                </div>
              </div>
              {/* shortlist  data */}
            </div>
            {/* Description */}
            <div className="white-wrapper about-tp-desc less-more mTop-10">
              <h2 className="heading">{Data.heading}</h2>
              <div className="target">
                {Data.description}
              </div>
            </div>
            {/* Description */}

            {/* Gallery */}
            
           
            {/* Gallery */}

            <div className="row venue-info">
              <div className="col-sm-9">
                {/* tabs */}
                <a name="info" />
                <div className="venue-info__tab">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li className=" active " title="Cine Photo Shoot Overview"><a href="/wedding-photographers/mumbai/cine-photo-shoot/">Overview</a></li>
                    <li className title="Cine Photo Shoot Contact | Address"><a href="/wedding-photographers/mumbai/cine-photo-shoot/contact">Contact | Address</a></li>
                    <li className title="Cine Photo Shoot Portfolio | Photos"><a href="/wedding-photographers/mumbai/cine-photo-shoot/portfolio">Portfolio | Photos</a></li>
                    <li className title="Cine Photo Shoot Prices | Packages"><a href="/wedding-photographers/mumbai/cine-photo-shoot/price">Prices | Packages</a></li>
                    <li className title="Cine Photo Shoot Review | Rating"><a href="/wedding-photographers/mumbai/cine-photo-shoot/reviews">Review | Rating</a></li>
                  
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    {/* example: venue_single_tabs/overview.html */}
                    <div role="tabpanel" className="tab-pane fade  in active " id="overview">
                      <div className="overview-data">
                        {/* About venue */}
                        <div className="white-wrapper">
                          <div className="o-section">
                            <div className="overview-col">
                              <h3>Featured Package Price</h3>
                              <div className="large-text">
                                <i className="fa fa-inr" /> <span><price>{Data.price}</price></span>
                              </div>
                            </div>
                            <div className="overview-col">
                              <h3>Phone number</h3>
                              <a className="number" href="tel:+912249423758">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle fa-stack-2x" />
                                  <i className="fa fa-phone fa-stack-1x fa-inverse" aria-hidden="true" />
                                </span>{Data.phone}
                              </a>
                            </div>
                            <div className="overview-col">
                              <h3>Address</h3>
                              <div className="tab-data address">
                               {Data.Address}
                              </div>
                            </div>
                            <div className="overview-col">
                              <h3>Years of Experience: <span className="text-primary">3</span></h3>
                            </div>
                            <div className="overview-col">
                              <h3>Events Completed: <span className="text-primary">22</span></h3>
                            </div>
                            <div className="overview-col">
                              <ul className="highlights">
                                <li style={{marginTop: 0}}>
                                  <h3>Willing to travel:
                                    <span className="text-success fa fa-check" />
                                  </h3>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="white-wrapper">
                          <div className="about-summary">
                            <div className="summary less-more">
                              <h3>Summary</h3>
                              <div className="tab-data target">{Data.Summary}</div>
                            </div>
                          </div>
                        </div>
                        <div className="white-wrapper">
                          <div className="row">
                            <div className="col-sm-6">
                              <h3>Travel Costs</h3>
                              <div className="tab-data mBtm-50">
                                Transportation charges will have to be paid by client when event is outside  Mumbai.
                              </div>
                              <h3>Booking Policy</h3>
                              <div className="tab-data mBtm-50">
                                1.   Pay 40% of the package price to book the package, rest to be paid directly to the vendor on the day of the event.
                              </div>
                              <h3>Cancellation Policy</h3>
                              <div className="tab-data">
                                1.   This booking is non-cancellable. However the booking can be moved to another date at no extra charge.
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <h3>Terms</h3>
                              <div className="tab-data tandc formatted-text condensed-text">1.   Transportation charges: No transportation charges apply within city. If the event is outside city, Travel &amp; Stay charges shall be borne by the client.
                                2.   Raw Images /Videos dump will not be shared with the client.
                                3.   A minimum of 6 to 8 weeks will be required to deliver on your selected deliverables (depending upon the wedding season, if there is a slight delay in the time of deliverables, do bear with us. We will sincerely try to deliver on time!)
                                4.   A 4 hour work day is counted as a half day and an 8 hour work day is counted as a full day. If the brief is extended from the originally quoted time duration, extra hour charges may apply. Rates may vary outside normal working hours.
                                5.   If any package contains X no. of clicks/shots and in case extra clicks/shots are requested by the client, additional charges will be applicable.
                                6.   The client is responsible for having an authorized representative present during all shooting phases of the Assignment. If no representative is present, the Photographer's interpretation shall be accepted.
                                7.   After booking confirmation, if you wish to change/alter your booked services in any way (e.g. your chosen event dates or location), we will do our utmost to accommodate these changes but it may not always be possible. Any request for changes must be in writing from the person who made the booking. All costs incurred due to amendments will be borne by you.
                                8.   Weddingz.in does not accept any responsibility for third party services or service providers. We guarantee that the photographer will reach at the location on time but we are not responsible for the quality of the deliverables.<div className="fadegray" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                {/* enquiry form */}
                <div className="venue-info__form">
                  <form className="short-form-code fixed-form" data-form_type="short_form" action="/my-wedding/planning/submit-planning-enquiry/">
                    <input type="hidden" name="autosource_type" defaultValue />
                    <input type="hidden" name="autosource_source" defaultValue />
                    <input type="hidden" name="autosource_subsource" defaultValue />
                    <input type="hidden" name="form_type" defaultValue="short_form" />
                    <input type="hidden" name="source" defaultValue="website-quote" />
                    <input type="hidden" name="venue_id" defaultValue />
                    <input type="hidden" name="trade_partner_id" defaultValue={7540} />
                    <input type="hidden" name="package_id" defaultValue />
                    <input type="hidden" name="service" defaultValue="photographer" />
                    <input type="hidden" name="source_service" defaultValue />
                    <div className="hidden">
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label className="required">First Name</label>
                          <input type="text" id="fname" name="user_data[first_name]" data-parsley-required required="required" placeholder="Enter First Name" defaultValue className="form-control required" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label className="required">Last Name</label>
                          <input type="text" id="lname" name="user_data[last_name]" data-parsley-required required="required" placeholder="Enter Last Name" defaultValue className="form-control required" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label className="required">Email</label>
                        <input type="email" id="user_email" name="user_data[email]" data-parsley-required required="required" placeholder="Enter email" className="form-control required" defaultValue pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                      </div>
                      <div className="col-sm-12 mTop-10">
                        <div className="form-group">
                          <label className="required">Mobile</label>
                          <input data-parsley-trigger="change" required="required" data-parsley-type="digits" data-parsley-length="[10, 12]" type="tel" id="phone1" name="user_data[phone_m]" placeholder="Enter your mobile number" defaultValue className="form-control required int-phone" />
                        </div>
                      </div>						
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label className="required">What is your overall budget?</label>
                          <select className="form-control required" name="planning_data[total_budget]">
                            <option value selected>--Please Select--</option>
                            <option value={25000}> Less than ₹ 25,000</option>
                            <option value={50000}> ₹ 25,000 - 50,000</option>
                            <option value={100000}> ₹ 50,000 - 1 Lac</option>
                            <option value={200000}> ₹ 1 Lac - 2 Lacs</option>
                            <option value={300000}> ₹ 2 Lacs - 3 Lacs</option>
                            <option value={300001}> More than ₹ 3 Lacs</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Event Date <span className="text-primary">*</span></label>
                          <input name="planning_data[event_date]" className="form-control planning-date required" data-parsley-required />
                        </div>
                      </div>
                      <div className="col-sm-12 mTop-10">
                        <div className="form-group message">
                          <label htmlFor="primary_service">
                            Any messages?
                          </label>
                          <input type="text" name="planning_data[customer_notes]" placeholder="Notes" className="form-control required" defaultValue />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group text-center">
                          <button type="submit" className="btn btn-default subBtn planning-submit">
                            Send Enquiry
                            <i className="fa fa-spinner fa-pulse hidden submit-loader" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="success_msg hidden" style={{display: 'none'}}>
                    <h4 className="modal-title"><span>Thank you for the details !</span></h4>
                    <small className="modal-caption">Weddingz.in Welcomes you Onboard</small>
                    <img alt="Mumbai's  Largest Wedding Co. | Wedding Planners in Mumbai | WeddingZ" className="img-responsive" src="https://d3n56ro59bjwa6.cloudfront.net/img/weddingzlogo.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom footer */}
        </main>
      
 
    </div>
  )
}

export default Inner