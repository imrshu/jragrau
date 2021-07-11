import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="wrap-slider header-style1">
                <header id="header" className="header clearfix">
                    <div className="header-wrap clearfix">
                        <div id="logo" className="logo"><Link to="" rel="home"> <img src="images/logo.png" alt="Jragrau Industries Logo" /> </Link></div>
                        <div className="wrap-icon-nav">
                            <div className="show-search"> </div>
                            <div className="cart"><Link to="index.html#"><span className="number-cart">0</span></Link></div>
                        </div>
                        <div className="nav-wrap">
                            <div className="btn-menu"> </div>
                            <nav id="mainnav" className="mainnav">
                            <ul className="menu">
                                <li className="home">
                                    <Link to="index.html">Home</Link>
                                    <ul className="submenu">
                                        <li><Link to="index.html">Home 01</Link></li>
                                        <li><Link to="index-header-classic.html">Home 01 Header Classic</Link></li>
                                        <li><Link to="index2.html">Home 02</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="about.html">About</Link>
                                    <ul className="submenu">
                                        <li><Link to="about.html">About</Link></li>
                                        <li><Link to="overview.html">Overview</Link></li>
                                        <li><Link to="overview.html">Page-Title Style2</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="portfolio-v1.html">Portfolio</Link>
                                    <ul className="submenu">
                                        <li><Link to="portfolio-v2.html">Portfolio 2 Columns</Link></li>
                                        <li><Link to="portfolio-v3.html">Portfolio 3 Columns</Link></li>
                                        <li><Link to="portfolio-v4.html">Portfolio 4 Columns</Link></li>
                                        <li><Link to="portfolio-single-v1.html">Portfolio Single V1</Link></li>
                                        <li><Link to="portfolio-single-v2.html">Portfolio Single V2</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="services.html">Services</Link>
                                    <ul className="submenu">
                                        <li><Link to="services.html">Services</Link></li>
                                        <li><Link to="services-single.html">Services Single</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="blog-fullwidth.html">Blog</Link>
                                    <ul className="submenu">
                                        <li><Link to="blog-fullwidth.html">Full Width</Link></li>
                                        <li><Link to="blog-sidebarright.html">Sidebar Right</Link></li>
                                        <li><Link to="blog-sidebarleft.html">Sidebar Left</Link></li>
                                        <li><Link to="blog-listsidebarright.html">List Sidebar Right</Link></li>
                                        <li><Link to="blog-listsidebarleft.html">List Sidebar Left</Link></li>
                                        <li><Link to="blog-grid-sidebarright.html">Grid Sidebar Right</Link></li>
                                        <li><Link to="blog-grid-sidebarleft.html">Grid Sidebar Left</Link></li>
                                        <li><Link to="blog-single-fullwidth.html">Single Full Width</Link></li>
                                        <li><Link to="blog-single-sidebarleft.html">Single Sidebar Left</Link></li>
                                        <li><Link to="blog-single-sidebarleft-v1.html">Single Sidebar Left-v1</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="contact.html">Contact</Link></li>
                            </ul>
                            </nav>
                        </div>
                        <div className="sidebar">
                            <div className="widget widget-search top-search">
                            <form id="searchform" action="index.html#" method="get">
                                <div><input id="s" className="sss" type="text" placeholder="Type &amp; Hit Enter..." /> <input id="searchsubmit" type="submit" value="" /></div>
                            </form>
                            </div>
                        </div>
                    </div>
                </header>

                <div id="rev_slider_1078_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" style={{'margin': '0 auto', 'backgroundColor': 'transparent', 'padding': 0}} data-alias="classic4export" data-source="gallery">
                    <div id="rev_slider_1078_1" className="rev_slider fullwidthabanner" style={{'display': 'none'}} data-version="5.3.0.2">
                        <div className="slotholder"> </div>
                        <ul>
                            <li data-index="rs-3047" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-rotate="0" data-saveperformance="off" data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <img className="rev-slidebg" src="images/slides/1.jpg" alt="" data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" data-no-retina="" />
                            <div id="slide-3047-layer-1" className="tp-caption title-slide" style={{'zIndex': 16, 'whiteSpace': 'nowrap', 'textTransform': 'left'}} data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-95','-95','-95','-95']" data-fontsize="['65','65','45','30']" data-lineheight="['65','65','45','35']" data-fontweight="['700','700','700','700']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0" data-paddingleft="[0,0,0,0]">CREATIVE &amp; PROFESSIONAL</div>
                            <div id="slide-3047-layer-4" className="tp-caption sub-title" style={{'zIndex': 17, 'whiteSpace': 'nowrap', 'textTransform': 'left'}} data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','0','0']" data-fontsize="['22',22','22','14']" data-fontweight="['300','300','300','300']" data-width="660" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">anything you need to create outstanding websites</div>
                            <Link to="" className="tp-caption flat-button-slider" href="index.html#" target="_self" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-x="['center','center','center','center']" data-hoffset="['-18','-18','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['100','100','100','50']" data-width="['188']" data-height="['auto']">Purchase Theme </Link>
                            </li>
                            <li data-index="rs-3049" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-rotate="0" data-saveperformance="off" data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <img className="rev-slidebg" src="images/slides/3.jpg" alt="" data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" data-no-retina="" />
                            <div id="slide-3049-layer-1" className="tp-caption title-slide" style={{'zIndex': 16, 'whiteSpace': 'nowrap', 'textTransform': 'left'}} data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-77','-77','-77','-77']" data-fontsize="['65','65','45','30']" data-lineheight="['65','65','45','35']" data-fontweight="['700','700','700','700']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0" data-paddingleft="[0,0,0,0]">We are the best<br /> construction experts</div>
                            <div id="slide-3049-layer-4" className="tp-caption sub-title" style={{'zIndex': 17, 'whiteSpace': 'nowrap', 'textTransform': 'left'}} data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['55','55','0','0']" data-fontsize="['22',22','22','14']" data-fontweight="['300','300','300','300']" data-width="660" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blan<br /> ditiis praesentium voluptatum deleniti atque.</div>
                            <Link to="" className="tp-caption flat-button-slider bg-orange" href="index.html#" target="_self" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" data-width="['auto']" data-height="['auto']">Our Services </Link> <Link to="" className="tp-caption flat-button-slider bg-white" href="index.html#" target="_self" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-x="['left','left','left','left']" data-hoffset="['198','198','198','198']" data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" data-width="['auto']" data-height="['auto']">Learn More </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
