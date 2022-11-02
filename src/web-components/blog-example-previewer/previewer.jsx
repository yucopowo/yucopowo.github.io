import React from 'react';
// import './previewer.less';

const Previewer = (props) => {
    const { url } = props;
    const origin = window.location.origin;

    console.log(origin);
    return (
        <div>




            <div className="browserWindow_my1Q">
                <div className="browserWindowHeader_jXSR">
                    <div className="buttons_uHc7">
                        <span className="dot_giz1" style={{"background": "rgb(242, 95, 88)"}}></span>
                        <span className="dot_giz1" style={{"background": "rgb(251, 190, 60)"}}></span>
                        <span className="dot_giz1" style={{"background": "rgb(88, 203, 66)"}}></span>
                    </div>
                    <div className="browserWindowAddressBar_Pd8y text--truncate">
                        {origin+''+url || 'http://localhost:3000'}
                    </div>
                    <div className="browserWindowMenuIcon_Vhuh">
                        <div>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                        </div>
                    </div>
                </div>
            </div>


            <iframe width="100%" height="600" src={url} frameBorder="no"></iframe>











        </div>
    );
};

export default Previewer;
