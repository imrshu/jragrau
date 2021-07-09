import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            {/* Wrap-slide */}
        <div className="wrap-slider header-style1">
            {/* Header */}            
            <header id="header" className="header clearfix"> 
                <div className="header-wrap clearfix">
                    <div id="logo" className="logo">
                        <a href="index.html" rel="home">
                            <img src="images/logo.png" alt="image">
                        </a>
                    </div>{/* /.logo */}

                    <div className="wrap-icon-nav">
                        <div className="show-search">
                            <a href="index.html#"><i className="fa fa-search"></i></a>                
                        </div>{/* /.show-search */} 

                        <div className="cart">
                            <a href="index.html#"><i className="fa fa-shopping-basket"></i><span className="number-cart">0</span></a>
                        </div>{/* /.cart */}                        
                    </div> {/* /.wrap-icon-nav */}  

                    <div className="nav-wrap">
                        <div className="btn-menu">
                            <span></span>
                        </div>{/* //mobile menu button */}

                        <nav id="mainnav" className="mainnav">
                            <ul className="menu"> 
                                <li className="home">
                                    <a href="index.html">Home</a>
                                    <ul className="submenu">
                                        <li><a href="index.html">Home 01</a></li>
                                        <li><a href="index-header-classNameic.html">Home 01 Header classNameic</a></li>
                                        <li><a href="index2.html">Home 02</a></li>
                                    </ul>{/* /.submenu */}
                                </li>
                                <li><a href="about.html">About</a>
                                    <ul className="submenu">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="overview.html">Overview</a></li>
                                        <li><a href="overview.html">Page-Title Style2</a></li>
                                    </ul>{/* /.submenu */}
                                </li> 
                                <li>
                                    <a href="portfolio-v1.html">Portfolio</a>
                                    <ul className="submenu">
                                        <li><a href="portfolio-v2.html">Portfolio 2 Columns</a></li>
                                        <li><a href="portfolio-v3.html">Portfolio 3 Columns</a></li>
                                        <li><a href="portfolio-v4.html">Portfolio 4 Columns</a></li>
                                        <li><a href="portfolio-single-v1.html">Portfolio Single V1</a></li>
                                        <li><a href="portfolio-single-v2.html">Portfolio Single V2</a></li>   
                                    </ul>{/* /.submenu */}
                                </li>                                
                                <li><a href="services.html">Services</a>
                                    <ul className="submenu">
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="services-single.html">Services Single</a></li>
                                    </ul>{/* /.submenu */}
                                </li>  
                                <li><a href="blog-fullwidth.html">Blog</a>
                                    <ul className="submenu"> 
                                        <li><a href="blog-fullwidth.html">Full Width</a></li>
                                        <li><a href="blog-sidebarright.html">Sidebar Right</a></li>
                                        <li><a href="blog-sidebarleft.html">Sidebar Left</a></li>
                                        <li><a href="blog-listsidebarright.html">List Sidebar Right</a></li>
                                        <li><a href="blog-listsidebarleft.html">List Sidebar Left</a></li>
                                        <li><a href="blog-grid-sidebarright.html">Grid Sidebar Right</a></li>
                                        <li><a href="blog-grid-sidebarleft.html">Grid Sidebar Left</a></li>
                                        <li><a href="blog-single-fullwidth.html">Single Full Width</a></li>
                                        <li><a href="blog-single-sidebarleft.html">Single Sidebar Left</a></li>
                                        <li><a href="blog-single-sidebarleft-v1.html">Single Sidebar Left-v1</a></li>     
                                    </ul>{/* /.submenu */}
                                </li>                 
                                <li><a href="contact.html">Contact</a></li>
                            </ul>{/* /.menu */}
                        </nav>{/* /.mainnav */}
                    </div>{/* /.nav-wrap */}

                    <div className="sidebar">
                        <div className="widget widget-search top-search">                        
                            <form action="index.html#" id="searchform" method="get">
                                <div>
                                    <input type="text" id="s" className="sss" placeholder="Type & Hit Enter...">
                                    <input type="submit" value="" id="searchsubmit">
                                </div>
                            </form>
                        </div>{/* /widget-search */}
                    </div>
                                     
                </div>{/* /.header-wrap */} 
            </header>{/* /.header */}

            <div id="rev_slider_1078_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="classNameic4export" data-source="gallery" style="margin:0px auto;background-color:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">
                {/* START REVOLUTION SLIDER 5.3.0.2 auto mode */}
                <div id="rev_slider_1078_1" className="rev_slider fullwidthabanner" style="display:none;" data-version="5.3.0.2">
                    <div className="slotholder"></div>
                    <ul>{/* SLIDE  */}
                
                        {/* SLIDE 1 */}
                        <li data-index="rs-3047" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"    data-rotate="0"  data-saveperformance="off"  data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                            {/* MAIN IMAGE */}
                            <img src="images/slides/1.jpg"  alt=""  data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" className="rev-slidebg" data-no-retina>
                            {/* LAYERS */}

                            {/* LAYER NR. 12 */}
                            <div className="tp-caption title-slide" 
                                id="slide-3047-layer-1" 
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['-95','-95','-95','-95']" 
                                data-fontsize="['65','65','45','30']"
                                data-lineheight="['65','65','45','35']"
                                data-fontweight="['700','700','700','700']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                     
                                data-type="text" 
                                data-responsive_offset="on"                             

                                data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                data-textAlign="['center','center','center','center']"
                                data-paddingtop="[10,10,10,10]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0"
                                data-paddingleft="[0,0,0,0]"

                                style="z-index: 16; white-space: nowrap;text-transform:left;"><span>CREATIVE</span> & PROFESSIONAL
                            </div>

                            {/* LAYER NR. 13 */}
                            <div className="tp-caption sub-title" 
                                id="slide-3047-layer-4" 
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','0','0']"
                                data-fontsize="['22',22','22','14']" 
                                data-fontweight="['300','300','300','300']"
                                data-width="660"
                                data-height="none"
                                data-whitespace="nowrap"
                     
                                data-type="text" 
                                data-responsive_offset="on" 

                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                data-textAlign="['center','center','center','center']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"

                                style="z-index: 17; white-space: nowrap;text-transform:left;">anything you need to create outstanding websites 
                            </div>

                            <a href="index.html#" target="_self" className="tp-caption flat-button-slider"         

                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                         
                            data-x="['center','center','center','center']" data-hoffset="['-18','-18','0','0']" 
                            data-y="['middle','middle','middle','middle']" data-voffset="['100','100','100','50']" 
                            data-width="['188']"
                            data-height="['auto']">Purchase Theme
                            </a>{/* END LAYER LINK */}
                        </li>

                        

                        {/* SLIDE 3 */}
                        <li data-index="rs-3049" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"    data-rotate="0"  data-saveperformance="off"  data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">                        

                            {/* MAIN IMAGE */}
                            <img src="images/slides/3.jpg"  alt=""  data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" className="rev-slidebg" data-no-retina>
                            {/* LAYERS */}

                            {/* LAYER NR. 12 */}
                            <div className="tp-caption title-slide" 
                                id="slide-3049-layer-1" 
                                data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['-77','-77','-77','-77']" 
                                data-fontsize="['65','65','45','30']"
                                data-lineheight="['65','65','45','35']"
                                data-fontweight="['700','700','700','700']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                     
                                data-type="text" 
                                data-responsive_offset="on"                             

                                data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                data-textAlign="['left','left','left','left']"
                                data-paddingtop="[10,10,10,10]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0"
                                data-paddingleft="[0,0,0,0]"

                                style="z-index: 16; white-space: nowrap;text-transform:left;">We are the best<br>
                                <span>construction</span> experts
                            </div>

                            {/* LAYER NR. 13 */}
                            <div className="tp-caption sub-title" 
                                id="slide-3049-layer-4" 
                                data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                data-y="['middle','middle','middle','middle']" data-voffset="['55','55','0','0']"
                                data-fontsize="['22',22','22','14']" 
                                data-fontweight="['300','300','300','300']"
                                data-width="660"
                                data-height="none"
                                data-whitespace="nowrap"
                     
                                data-type="text" 
                                data-responsive_offset="on" 

                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                data-textAlign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"

                                style="z-index: 17; white-space: nowrap;text-transform:left;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blan<br> ditiis praesentium voluptatum deleniti atque. 
                            </div>

                            <a href="index.html#" target="_self" className="tp-caption flat-button-slider bg-orange"         

                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                         
                            data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                            data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" 
                            data-width="['auto']"
                            data-height="['auto']">Our Services
                            </a>{/* END LAYER LINK */}
                            <a href="index.html#" target="_self" className="tp-caption flat-button-slider bg-white"         

                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                         
                            data-x="['left','left','left','left']" data-hoffset="['198','198','198','198']" 
                            data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']"  
                            data-width="['auto']"
                            data-height="['auto']">Learn More
                            </a>{/* END LAYER LINK */}
                        </li>
                    </ul>
                </div>
            </div>{/* END REVOLUTION SLIDER */}
        </div> {/* /.wrap-slider */}

        )
    }
}

export default Header
