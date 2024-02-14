import React from 'react'
import "../../styles/AboutUs.css"
import pic1 from "../../images/Professional Staff.png"
import pic2 from "../../images/Completed Projects.png"
import pic3 from "../../images/Acheived Awards.png"
import tickimage from "../../images/Tick Image.png"

const WhyUs = () => {
    const data = [
        {
            pic: pic3,
            counting: "10000 +",
            title: "professional stag"
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
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-7 left-div">
                    <h4>We Have LLC Mission Statement, Vision Statement & Core Values</h4>
                    <div className='d-flex align-items-center'>
                        <div style={{width: "10%", height: "50px"}}>
                            <img src={tickimage} alt='professional' className='tick_about'/>
                        </div>
                        <div className='professional-team-right'>Mission Statement:</div>
                    </div>
                    <p className='content_style'>We Have exists simply to meet a need or want and build a connection.</p>
                    <div className='d-flex align-items-center'>
                        <div style={{width: "10%", height: "50px"}}>
                            <img src={tickimage} alt='professional' className='tick_about'/>
                        </div>
                        <div className='professional-team-right'>Vision Statement:</div>
                    </div>
                    <p className='content_style'>We Have has a purpose to be one of the most trusted companies in every market sector.</p>
                    <div className='d-flex align-items-center'>
                        <div style={{width: "10%", height: "50px"}}>
                            <img src={tickimage} alt='professional' className='tick_about'/>
                        </div>
                        <div className='professional-team-right'>We have an abundance mentality:</div>
                    </div>
                    <p className='content_style'>We believe there is more than enough to go around for everyone.</p>
                    {/* <img src={tickimage} alt='professional' className='tick_about' />
                    <div className='professional-team-right'>We have a customer satisfaction focus:</div>
                    <p className='content_style'>We believe that service, price and quality are essential for every customer’s experience.</p>
                    <img src={tickimage} alt='professional' className='tick_about' />
                    <div className='professional-team-right'>We have a passion for continuous improvement:</div>
                    <p className='content_style'>We are always looking for ways to get better.</p>
                    <img src={tickimage} alt='professional' className='tick_about' />
                    <div className='professional-team-right'>We have unlimiting beliefs:</div>
                    <p className='content_style'>We believe that we can break through the impossible and create something that is not beneficial for the few but beneficial for everyone.</p>
                    <img src={tickimage} alt='professional' className='tick_about' />
                    <div className='professional-team-right'>We have an unwavering approach to put employees and <br /> customers above profits :</div>
                    <p className='content_style'>We understand profitability is important to sustain our business for the unforeseeable future however we will take care of our employees, customers and partners.</p>
                    <img src={tickimage} alt='professional' className='tick_about' />
                    <div className='professional-team-right'>We have a generous spirit:</div>
                    <p className='content_style'>We believe that what we give back to the community will be our long-standing legacy and that legacy will be shared with our customers, employees and partners.</p> */}
                </div>
                <div className="col-lg-5">
                    <div className='right-div'>
                        {data.map((item, index) => (
                            <div className='right-div-box m-0 row' key={index}>
                                <div className="col-lg-3 image-div">
                                    <img src={item.pic} alt='hussainAhmad' />
                                </div>
                                <div className="col-xxl-5 col-xxl-5 col-lg-7 image-content">
                                    <h1>{item.counting}</h1>
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WhyUs