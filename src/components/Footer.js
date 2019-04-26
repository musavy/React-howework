import React from "react";
import "../Styles/Footer.css"
function Footer(props) {
  return (
    <div>
      <footer>
        <div className="box-footer">
          <div className="footer-box1">
            <h4>About Us</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
                          sunt assumenda ratione voluptatem natus itaque odio doloremque neque
            maiores qui ullam, <br /><br />quisquam laboriosam placeat quos
                eaque molestias illum sint incidunt.
</p>

          </div>

          <div className="footer-box1">
            <h4>Latest tweets</h4>
            <p>
              <span className="text-white">@Lorem, ipsum</span> dolor sit amet
           consectetur adipisicing elit. Commodi sunt assumenda ratione
</p>
{" "}
<p>
              voluptatem natus itaque odio doloremque
            <span className="text-white">@neque maiores qui</span> ullam, quisquam
  
</p>
{" "}

<p>

              laboriosam placeat quos eaque
            <span className="text-white">@molestias</span>
            illum sint incidunt.
</p>
          </div>

          <div className="footer-box1">
            <h4>Latest posts</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
            {" "}

            <p>Elit Commodi sunt assumenda ratione voluptatem</p>
            {" "}

            <p>natus itaque odio doloremque neque maiores</p>
            {" "}

            <p>
              qui ullam, quisquam laboriosam placeat quos eaque molestias illum
              sint incidunt.
          </p>
          </div>

<div className="footer-box1">
<h4>flickr</h4>

<div className="flicker-box">

<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>
<div className="flbox"><img src="#"alt=""/></div>


</div>

</div>
</div>

<div className="bottom-box">
<div className="social-box">
<p>
 Copyright&copy; 2003-2012 ventus inc. all rights reserved.
             
</p>
<div className="social-container">

{props.face}
              {props.pint}
{props.tweet}
{props.facebook}
{props.pint}
              {props.vimeo}
              {props.twit}

</div>

</div>

          <a href="#top"><i id="up-icon" className="fas fa-arrow-circle-up"></i></a>
</div>





      </footer>
    </div>
  );
}

export default Footer;