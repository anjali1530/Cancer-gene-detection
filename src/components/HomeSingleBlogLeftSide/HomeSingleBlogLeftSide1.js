import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide1 = ({image}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div className="latest-news-thumb mb-35">
                  <img src={`img/blog/blog-thumb-${image}.jpg`} alt=""/>
               </div>
               <div className="latest-news-content">
         
                  <h3><a href="https://www.msn.com/en-in/news/other/10-unusual-symptoms-of-ovarian-cancer-you-should-never-ignore/ar-AA1bN52y">10 unusual symptoms of ovarian cancer you should never ignore</a></h3>
                  <p>Ovarian cancer, the silent killer, can go unnoticed as it has hardly any signs and symptoms in the earlier stages. The symptoms appear mainly .....</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide1;