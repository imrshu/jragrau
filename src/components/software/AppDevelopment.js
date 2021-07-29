import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class AppDevelopment extends Component {
    render() {
        return (
            <div>
            <section className="main-content blog bg-sidebar sidebar-left blog-single style v2">
            <div className="container">
               <div className="row">
                  <div className="wrap-main-post">
                     <div className="col-md-4">
                        <div className="sidebar">
                           <div className="widget widget-search">
                              <h5 className="widget-title">Search</h5>
                              <form id="searchform" action="blog-single-sidebarleft-v1.html#" method="get">
                                 <div><input id="s" className="sss" type="text" placeholder="Type &amp; Hit Enter..." /> <input id="searchsubmit" type="submit" value="" /></div>
                              </form>
                           </div>
                           <div className="widget widget-categories">
                              <h5 className="widget-title">Categories</h5>
                              <ul className="categories">
                                 <li><Link to="blog-single-sidebarleft-v1.html#">Life Style</Link> <span className="numb-right">(9)</span></li>
                                 <li><Link to="blog-single-sidebarleft-v1.html#">Business</Link> <span className="numb-right">(12)</span></li>
                                 <li><Link to="blog-single-sidebarleft-v1.html#">Entertainment</Link> <span className="numb-right">(7)</span></li>
                                 <li><Link to="blog-single-sidebarleft-v1.html#">Fashion Trend</Link> <span className="numb-right">(5)</span></li>
                                 <li><Link to="blog-single-sidebarleft-v1.html#">Photography</Link> <span className="numb-right">(23)</span></li>
                                 <li><Link to="blog-single-sidebarleft-v1.html#">Real life</Link> <span className="numb-right">(18)</span></li>
                              </ul>
                           </div>
                           <div className="widget widget-recent-posts">
                              <h5 className="widget-title">Recent Post</h5>
                              <ul className="recent-posts clearfix">
                                 <li>
                                    <div className="thumb"><img src="images/blog/widget/1.jpg" alt="image" /></div>
                                    <div className="text">
                                       <Link to="blog-single-sidebarleft-v1.html#">Gallery post with right sidebar</Link>
                                       <p>Jan 9, 2016 / Travel</p>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="thumb"><img src="images/blog/widget/2.jpg" alt="image" /></div>
                                    <div className="text">
                                       <Link to="blog-single-sidebarleft-v1.html#">Post with couple photos inside</Link>
                                       <p>Jan 9, 2016 / Travel</p>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="thumb"><img src="images/blog/widget/3.jpg" alt="image" /></div>
                                    <div className="text">
                                       <Link to="blog-single-sidebarleft-v1.html#">Standard post with video inside</Link>
                                       <p>Jan 9, 2016 / Travel</p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="widget widget-tags">
                              <h5 className="widget-title">Popular Tags</h5>
                              <div className="tag-list"><Link to="blog-single-sidebarleft-v1.html#">example, </Link> <Link to="blog-single-sidebarleft-v1.html#">Gallery, </Link> <Link to="blog-single-sidebarleft-v1.html#">Image, </Link> <Link to="blog-single-sidebarleft-v1.html#">quote, </Link> <Link to="blog-single-sidebarleft-v1.html#">tag, </Link> <Link to="blog-single-sidebarleft-v1.html#">Video, </Link> <Link to="blog-single-sidebarleft-v1.html#">PSD Teplates, </Link> <Link to="blog-single-sidebarleft-v1.html#">Business, </Link> <Link to="blog-single-sidebarleft-v1.html#">Portfolio, </Link> <Link to="blog-single-sidebarleft-v1.html#">Construction, </Link> <Link to="blog-single-sidebarleft-v1.html#">One Page</Link></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-8">
                        <div className="post-wrap-single-v1 clearfix">
                           <article className="entry clearfix">
                              <div className="entry-border">
                                 <div className="content-post">
                                    <h4 className="title-post">Gallery post with right sidebar</h4>
                                    <div className="entry-post excerpt">
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                 </div>
                              </div>
                              <br/>
                              <br/>
                              <div className="entry-post style-v1 excerpt">
                                 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                                 <p className="v1">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                           </article>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>      
        </div>
        )
    }
}

export default AppDevelopment
