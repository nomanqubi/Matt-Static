import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.png';
import '../styles/Header.css';
import { FaSearch } from 'react-icons/fa';
import { Search } from '../screens/Search';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
    console.log("search:>>>>",searchQuery)
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-6 col-sm-6 logo">
            <img src={Logo} alt="" height={50} width={200} />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 logo">
            <div className="search-container mt-2">
              <input
                type="text"
                className="search-box"
                placeholder="Search For a Product.."
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button className="search-button" onClick={handleSearch}><FaSearch /></button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Header;