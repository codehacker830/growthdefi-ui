import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollUp from './components/ScrollUp';
import Gro from './routes/gro';
import Home from './routes/home';

function App() {
   const { pathname } = useLocation();
   const homeClasses = "home page-template-default page page-id-6 et_pb_button_helper_class et_fixed_nav et_show_nav et_hide_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css";
   const groClasses = "page-template-default page page-id-51 et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css";
   return (
      <React.Fragment>
         <div className={pathname === '/' ? homeClasses : groClasses}>
            <Header />
            <div id="et-main-area">
               <div id="main-content">
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/gro" component={Gro} />
                  </Switch>
               </div>
               <ScrollUp />
               <Footer />
            </div>
         </div>
      </React.Fragment>
   )
}

export default App
