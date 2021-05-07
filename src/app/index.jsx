import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Gro from './routes/gro';
import Home from './routes/home';

import '../assets/css/et-core-unified-6-home.css'
import '../assets/css/et-core-unified-6-gro.css'

// import '../assets/css/et-core-unified-6-home.scoped.css'
// import '../assets/css/et-core-unified-6-gro.scoped.css'

function App() {
   React.useEffect(() => {
   }, []);
   const { pathname } = useLocation();

   // if (pathname === '/') require('../assets/css/et-core-unified-6-home.css');
   // else require('../assets/css/et-core-unified-6-gro.css');

   // if (pathname === '/') require('../assets/css/et-core-unified-6-home.scoped.css');
   // else require('../assets/css/et-core-unified-6-gro.scoped.css');

   const [pageYOffset, setPageYOffset] = React.useState(0);

   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   const handleScroll = (ev) => {
      setPageYOffset(window.pageYOffset);
   }


   const homeClasses = "home page-template-default page page-id-6 et_pb_button_helper_class et_fixed_nav et_show_nav et_hide_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css";
   const groClasses = "page-template-default page page-id-51 et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css chrome";
   return (
      <body className={pathname === '/' ? homeClasses : groClasses}>
         <div id="page-container"
            className="et-animated-content"
            style={{
               paddingTop: 80,
               overflowY: "hidden",
               marginTop: pageYOffset > 7 ? -3 : -1
            }}
         >
            <Header />
            <div id="et-main-area">
               <div id="main-content">
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/gro" component={Gro} />
                  </Switch>
               </div>
               <ScrollToTop />
               <Footer />
            </div>
         </div>
      </body>
   )
}

export default App
