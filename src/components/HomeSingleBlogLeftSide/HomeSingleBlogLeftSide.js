import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide = ({image}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div className="latest-news-thumb mb-35">
                  <img src={`img/blog/blog-thumb-${image}.jpg`} alt=""/>
               </div>
               <div className="latest-news-content">
               <h3><a href="https://www.msn.com/en-in/health/medical/world-blood-cancer-day-7-early-warning-signs-of-blood-cancer-you-should-know-about/ar-AA1bNA0v">7 early warning signs of blood cancer you should know about.</a></h3>
                  <p>World Blood Cancer Day: 7 early warning signs of blood cancer you should know about</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide;