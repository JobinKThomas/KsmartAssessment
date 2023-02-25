import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGear,
  faCircleQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <StyledHeader>
      <Logo>Grave Sites Management</Logo>
      <div className="header__center">
        <Select>
          <option className="option">Maintain</option>
          <option className="option">Maintain2</option>
        </Select>
        <Link>Payments</Link>
        <Link>Reports</Link>
      </div>
      <div className="headerbuttons">
        <Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faGear} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </Link>

        <Userinfo>
          <Users onClick={() => setShowProfile(!showProfile)}>
            <span className="UserinfoName">JS</span>
            <div className="user-name">
              <div>John Snow</div>
              <small className="user-info-name">Municipality Officer</small>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </Users>
          {showProfile && (
            <ul className="user-info">
              <li>
                <span>johnsnow@gmail.com</span>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          )}
        </Userinfo>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #444;
  color: #eee;
  padding: 10px 20px;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: center;
  }
  .headerlogo {
    width: 250px;
  }
  .headerbuttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 767px) {
      display: block;
      text-align: center;
    }
  }
`;

const Logo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #eee;
`;

const Select = styled.select`
  padding: 8px;
  background: none;
  border: none;
  color: #fff;
  border-radius: 20px;
`;

const Link = styled.a`
  padding: 8px;
  background: none;
  border: none;
  color: #fff;
  border-radius: 20px;
`;

const Userinfo = styled.div`
  display: flex;
  margin-left: 20px;
  position: relative;

  .header__user-profile {
    display: flex;
    align-items: center;
  }
  .UserinfoName {
    width: 50px;
    height: 50px;
    background-color: green;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  .user-info {
    position: absolute;
    top: 100%;
    padding: 0;
    background: #444;
    right: 0;
    margin: 0;
    list-style: none;
  }
  .user-info li {
    padding: 10px 12px;
    border-bottom: 1px solid #9999;
  }
`;

const Users = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    jusyify-content: center;
    align-items: center;
  }
`;
