import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import importAll  from '../../helpers/Import_Images'


const images = importAll(require.context('../../images/AppDevelopment_Images/', false, /\.(png|jpe?g|svg)$/));


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
                           <div>
                              <img src={images['image1.png'].default} alt="rendering process" style={{'margin-bottom':'100px'}}/>
                           </div>
                           <div className="widget widget-dowload services-single">
                           <h4 className="widget-title">Why do we use Electron for development</h4>
                           <p className="widget-text">With web technologies, we are open to multiple technologies that provide great User Interface and User Experience to all of our users with great comfort.
                               Also, we can be sure of that we are providing the same experience to all of our users across different platforms.</p>
                           <ul className="dowload">
                              <li className="dl-word"><Link to="overview.html#">Company Brochures.PDF</Link></li>
                           </ul>
                        </div>
                        </div>
                     </div>
                     <div className="col-md-8">
                        <div className="post-wrap-single-v1 clearfix">
                           <section className="entry clearfix">
                              <div className="entry-border">
                                 <div className="content-post">
                                    <div className="entry-post excerpt">
                                       <p>Electron (formerly known as Atom Shell) is an open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime.
                                          Ground truth shows many Windows 7 and 10 users, some on the latest macOS versions, and a handful on various Linux distributions. For us, code portability within mobile platforms, desktops or Embedded System devices is not a concern. 
                                          It enables us to target desktop platforms with high productivity and beats its competition in every main arena.</p>
                                    </div>
                                    <h4 className="title-post">App Development on Desktop</h4>
                                 </div>
                              </div>
                              <br/>
                              <br/>
                              <div className="entry-post style-v1 excerpt">
                                 <h5>Windows</h5>
                                 <p><br/>Let's talk about how Windows-based apps are created. Most people use C++, C# (C Sharp), VB (Visual Basic) for development. This may include using/reusing some open source .
                                 NET libraries to make applications across all the windows ecosystem like Windows store, windows phone, windows desktop application.</p>
                              </div>

                              <div className="entry-post style-v1 excerpt">
                                 <h5>MacOs</h5>
                                 <p><br/>On Mac, we have a clear abstraction of technologies we use to create applications. We have the "Cocoa" layer, which includes all the technologies we require to create the application-user interface.
                                  The "Media" layer has all the tools and technologies required for the Media operations which include the 2D and 3D animations, Photo and Video editing.</p>
                                 <p className="v1">There is also a "Core Services" area where we can perform all the low-level network operations, and string and data manipulation. "Core OS" exposes all the API/provides functionality for all the CPU and GPU to perform high-performance tasks. 
                                 "Kernel and Device Drivers" provide support for file systems, networking, security, inter-process communication, programming languages, device drivers, and extensions to the kernel. This level also exposes the Mach kernel environment, device drivers, BSD library functions (libSystem), and other low-level components</p>
                              </div>

                              <div className="entry-post style-v1 excerpt">
                                 <h5>Linux</h5>
                                 <p><br/>Linux is one of the most popular OSs for developers, so we want our products to reach Linux users. I will be talking about both Ubuntu and Linux together.
                                  Linux typically uses Python or other libraries for the user interface of applications. For Linux, if you need services like 3D and 2D rendering, you will need OpenGL. Linux Kernel exposes the low-level functionalities.</p>
                              </div>
                           </section>
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
