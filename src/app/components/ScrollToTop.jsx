import React from 'react'

export default function ScrollToTop() {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
         /* you can also use 'auto' behaviour
            in place of 'smooth' */
      });
   };
   return (
      <span className="et_pb_scroll_top et-pb-icon" onClick={scrollToTop}>
         <img src="assets/image/top.png" />
      </span>
   )
}
