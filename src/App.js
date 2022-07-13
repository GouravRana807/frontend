import React from 'react';
import './App.css';
import $ from 'jquery';

const App = () => {
  window.onload = function () {
    $('.nav').click(function () {
      $('#mySidenav').css('width', '70px');
      $('#main').css('margin-left', '70px');
      $('.logo').css('visibility', 'hidden');
      $('.logo span').css('visibility', 'visible');
      $('.logo span').css('margin-left', '-10px');
      $('.icon-a').css('visibility', 'hidden');
      $('.icons').css('visibility', 'visible');
      $('.icons').css('margin-left', '-8px');
      $('.nav').css('display', 'none');
      $('.nav2').css('display', 'block');
    });

    $('.nav2').click(function () {
      $('#mySidenav').css('width', '300px');
      $('#main').css('margin-left', '300px');
      $('.logo').css('visibility', 'visible');
      $('.icon-a').css('visibility', 'visible');
      $('.icons').css('visibility', 'visible');
      $('.nav').css('display', 'block');
      $('.nav2').css('display', 'none');
    });
  };
  return (
    <>
      <div>
        <div id="mySidenav" className="sidenav">
          <p className="logo">
            <span>
              <img
                className="yoj"
                src="../public/img/icons8-image-30.png"
                width="30px"
                height="40px"
                alt=""
              />
            </span>
          </p>
          <a href="#" className="icon-a  ">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-home-30.png"
              alt=""
              style={{ visibility: 'visible', marginLeft: '8px' }}
            />{' '}
            Home
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Pos
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Profile
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/menu.png"
              alt=""
            />
            Templates
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-fugue-30.png"
              alt=""
            />
            Customer Login
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Franchies Login
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Services
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-chart-bar-48.png"
              alt=""
            />
            Contact
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-setting-48.png"
              alt=""
            />
            About Us
          </a>
         
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-fugue-30.png"
              alt=""
            />
            Log Out
          </a>
        </div>
        <div id="main">
          <div className="head">
            <div className="col-div-6">
              <span
                style={{
                  fontSize: '30px',
                  cursor: 'pointer',
                  color: 'rgb(22, 21, 21)',
                  position: 'relative',
                  zIndex: '900',
                }}
                className="nav"
              >
                ☰
              </span>
              <span
                style={{
                  fontSize: '30px',
                  cursor: 'pointer',
                  color: 'rgb(22, 21, 21)',
                  position: 'relative',
                  zIndex: '900',
                }}
                className="nav2"
              >
                ☰
              </span>
            </div>

            <div className="col-div-6">

            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>
          <br />
          <div className="loke">
            <div>
              <div className="uid">
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Design Your Card
                      <br />
                      <span>Design your visting Card in 2  minutes</span>
                    </p>
                  
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Save to device
                      <br />
                      <span>digital visting card to accesible form anywhere</span>
                    </p>
                  
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Share
                      <br />
                      <span>Share with friends and collaguess through a variety of channels</span>
                    </p>
                  
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Gallary
                      <br />
                      <span>View you creativity at one place</span>
                    </p>
                 
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <br />
              <br />
            </div>

       
          </div>
          <div className="uid">
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Design Your Card
                      <br />
                      <span>Design your visting Card in 2  minutes</span>
                    </p>
                  
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Save to device
                      <br />
                      <span>digital visting card to accesible form anywhere</span>
                    </p>
                  
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Share
                      <br />
                      <span>Share with friends and collaguess through a variety of channels</span>
                    </p>
                  
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      Gallary
                      <br />
                      <span>View you creativity at one place</span>
                    </p>
                 
                  </div>
                </div>
              </div>
     
        </div>
      </div>
    </>
  );
};

export default App;
