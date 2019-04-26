import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
 import Footer from './components/Footer'; 

function App() {
    return (

        <div>
            <Header

                imgHeader="./img/Header.png"
                borderImg="./img/Border.jpg"



            />

            <Main

                imgPlace="./img/place.png"
                MainImg="./img/border.jpg"
                const mobileIcon={<i className="fas fa-mobile-alt"></i>}
                const desktopIcon={< i className="fas fa-desktop"></i >}
                const laptopIcon={< i className="fas fa-laptop"></i >}
                const recycleIcon={< i className="fas fa-recycle"></i >}

            />


                        <Footer

const facebook={ <i className="fab fa-facebook-square"></i>}
const tweet={<i className="fab fa-twitter-square"></i>}
const vimeo={ <i className="fab fa-vimeo-square"></i>}
const pint={<i className="fab fa-pinterest-square"></i>}
const face={ <i className="fab fa-facebook-square"></i>}
const twit={<i className="fab fa-twitter-square"></i>}



/>  





        </div >

    )

}

export default App;
