import React, { useState } from 'react';
import '../../styles/ContactUs.css';
import pic1 from "../../images/Portfolio1.png";
import pic2 from "../../images/Portfolio2.png";


const images = [
    {
    pic:pic1,
        title:"Virtual Reality Project",
        describtion:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, toSed ut perspiciatis unde omnis iste natus e"
},
    {
        pic: pic2,
        title: "Marketing Project",
        describtion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, toSed ut perspiciatis unde omnis iste natus e"
    },
    {
        pic: pic2,
        title: "Marketing",
        describtion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, toSed ut perspiciatis unde omnis iste natus e"
    },
    {
        pic: pic1,
        title: "Virtual Reality Project",
        describtion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, toSed ut perspiciatis unde omnis iste natus e"
    },

];

function Slides() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlide = (index) => {
        if (index < 0) {
            setCurrentSlide(0);
        } else if (index >= images.length) {
            setCurrentSlide(images.length - 2);
        } else {
            setCurrentSlide(index);
        }
    };

    const previousSlides = () => {
        showSlide(currentSlide - 2);
    };

    const nextSlides = () => {
        showSlide(currentSlide + 2);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.slice(currentSlide, currentSlide + 2).map((image, index) => (
                    <div className="carousel-div" key={index}>
                        <img src={image.pic} alt={`Image ${index + currentSlide + 1}`} />
                        <div className='content-div'>
                            <h3>{image.title}</h3>
                            <p>{image.describtion}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button-1" onClick={previousSlides} disabled={currentSlide === 0}>
                &lt;
            </button>

            <button className="carousel-button" onClick={nextSlides} disabled={currentSlide >= images.length - 2}>
                &gt;
            </button>
        </div>
    );
}

export default Slides;