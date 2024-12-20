import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const HomeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           <h5>Purpose</h5>
                           <h1>Life is there even with Cancer</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeSIngleService icon="4" title="Gene identification" />
                  <HomeSIngleService icon="4" title="Classification of cancer" />
                  <HomeSIngleService icon="4" title="Reduce manual work with tech" />
                  <HomeSIngleService icon="4" title="Increase life expectancy" />
                  <HomeSIngleService icon="4" title="Prediction with ML algorithm" />
                  <HomeSIngleService icon="4" title="Crucial role in treatment" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;