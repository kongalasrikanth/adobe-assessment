import React from 'react'
import '../styles/aem-grid.css';
export default function Title({name, title}) {
    return (
        <div className="aem-Grid  aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--12 my-2 pagetext-center text-title">
                {/* <h1 className="text-capitalize font-weght-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1> */}
                 <div id="master_site_wrapper">
      <main role="main">
        <div class="container-fluid no-padding">
          <section class="no-padding" id="destination-masthead">

            <div id="masthead_wrapper" class="aem-GridColumn aem-GridColumn--default--12">
              <div class="masthead-content-wrapper">
                <div class="destinations-section-wrapper green">
                <div class="masthead-content">
                  <div class="title-container">
                    <h2 class="title">Women's</h2>
                    <hr size="10"/>
                  </div>
                </div>
                </div>
               
              </div>
            </div> 
            
          </section>
        </div>
      </main>
    </div>
            </div>
        </div>
    )
}
