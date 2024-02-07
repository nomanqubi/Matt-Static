import React from 'react'
import "../../styles/AboutUs.css"
import pic1 from "../../images/Professional Staff.png"
import pic2 from "../../images/Completed Projects.png"
import pic3 from "../../images/Acheived Awards.png"
import tickimage from "../../images/Tick Image.png"

const WhyUs = () => {
    const data=[
        {
            pic:pic3,
            counting:"10000 +",
            title:"professional stag"
        },
        {
            pic: pic2,
            counting: "3680 +",
            title: "professional stag"
        },
        {
            pic: pic1,
            counting: "8350 +",
            title: "professional stag"
        },

    ]


  return (
    <div className='container mt-5' style={{marginRight:'0px', marginLeft:'0px',margin:'auto'}}>
          <div className="row">
              <div className="col-md-7  left-div">
              
                      <h1>Why Us?</h1>
                  <p>You offer a good product, make advertising, analyze the market but still have no improvement? Our qulificated specialists are ready to solve any of your problems. We work with the newest techniques and create strategies to catch more customers for you.</p>
                  
                  <div className='professional-team'>
                      <div className='professional-team-left'><img src={tickimage} alt='professional'/></div>
                      <div className='professional-team-right'>Professional Team</div>
                  </div>
                  <div className='professional-team'>
                      <div className='professional-team-left'><img src={tickimage} alt='professional'/></div>
                      <div className='professional-team-right'>Affordable Price</div>
                  </div>
                  <div className='professional-team'>
                      <div className='professional-team-left'><img src={tickimage} alt='professional' /></div>
                      <div className='professional-team-right'>Achieve a Specific Goal</div>
                  </div>
              </div>
              <div className=" row col-md-5  right-div">
                
                  {data.map((item, index) => (
                      <div className='right-div-box row' key={index}>
                          <div className="col-3  image-div">
                              <img src={item.pic} alt='hussainAhmad'/>
                          </div>
                          <div className="col-5 image-content">
                              <h1>{item.counting}</h1>
                              <h5>{item.title}</h5>
                          </div>
                      </div>
                  ))}



                  
              </div>
          </div>
    </div>
  )
}

export default WhyUs
