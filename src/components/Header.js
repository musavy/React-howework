import React from "react";
import "../Styles/Header.css"





function Header(props) {
    return (
        <header>
            <section className="header-part">
                <div className="header-Title">
                    <img src={props.imgHeader} alt="computer"/>
                </div>
                <div className="header-Title">
                    <p><span>POWERFULLY SIMPLE</span> WITH A <span> SQUEEKY CLEAN</span> DESIGN.</p>
                    <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
                    <button className="learn-btn"> LEARN MORE </button>
                </div>
            </section >

            <div className="header-box">
                <div className="box-shadow">
                    <p>
                        Create a <span>Powerfull</span> solution
                        now
          </p>

                    <button className="btn-white">Get started</button>


                </div>
                <div className="bg-pattern">
                    <img src={props.borderImg} alt="border" />
                </div>
            </div>
        </header >
    )

}



export default Header;
