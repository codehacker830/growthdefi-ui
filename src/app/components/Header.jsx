import clsx from 'clsx'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
   const { pathname } = useLocation();
   const [pageYOffset, setPageYOffset] = React.useState(0);

   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   const handleScroll = (ev) => {
      setPageYOffset(window.pageYOffset);
   }

   return (
      <header id="main-header" data-height-onload={66}
         className={pageYOffset > 7 ? "et-fixed-header" : ""}
         style={pathname === "/" ? {
            transform: "translateY(-80px)",
            top: 0
         } : {
            top: 0
         }}
      >
         <div className="container clearfix et_menu_container">
            <div className="logo_container">
               <span className="logo_helper" />
               <a href="http://seph.net/growthdefi/">
                  <img src="http://seph.net/growthdefi/wp-content/uploads/2021/05/logo.png" alt="Growth Defi" id="logo"
                     data-height-percentage={100} />
               </a>
            </div>
            <div id="et-top-navigation" data-height={66} data-fixed-height={63}>
               <nav id="top-menu-nav">
                  <ul id="top-menu" className="nav">
                     <li id="menu-item-93"
                        className={clsx("menu-item menu-item-type-custom menu-item-object-custom", pathname === "/" && "current-menu-item current_page_item", "menu-item-home menu-item-93")}>
                        <Link to="/" aria-current="page">Home</Link>
                     </li>
                     <li id="menu-item-92"
                        className={clsx("menu-item menu-item-type-post_type menu-item-object-page menu-item-92", pathname === "/gro" && "current-menu-item page_item page-item-51 current_page_item", "menu-item-92")}>
                        <Link to="/gro">GRO</Link>
                     </li>
                     <li id="menu-item-94"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94">
                        <Link to="#">gROOT</Link>
                     </li>
                     <li id="menu-item-95"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95">
                        <Link to="#">WHEAT</Link>
                     </li>
                  </ul>
               </nav>
               <div id="et_mobile_nav_menu">
                  <div className="mobile_nav closed">
                     <span className="select_page">Select Page</span>
                     <span className="mobile_menu_bar mobile_menu_bar_toggle" />
                  </div>
               </div>
            </div> {/* #et-top-navigation */}
         </div> {/* .container */}
         <div className="et_search_outer">
            <div className="container et_search_form_container">
               <form role="search" method="get" className="et-search-form" action="http://seph.net/growthdefi/">
                  <input type="search" className="et-search-field" placeholder="Search …" defaultValue name="s"
                     title="Search for:" />
               </form>
               <span className="et_close_search_field" />
            </div>
         </div>
      </header>
   )
}
