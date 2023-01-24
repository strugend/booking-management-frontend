import React from "react"
import footerImage from "./footerImage11.png"
import footer_css from "./footer.css"

function Footer(){
    const year = new Date().getFullYear();
    const url = "#"
    return(
        <div>
            <div className="footer">
            <div className="copyrightFooter">
                <p className="footer_para_1">
                © {year} YouCanBookMe Ltd
                </p>
            </div>
            
            <div className="footerLinks">
            <p className="footer_para"><a className="footer_para_link" href={url}>Terms</a></p>
            <p className="footer_para"><a className="footer_para_link" href={url}>Privacy</a></p>
            <p className="footer_para"><a className="footer_para_link" href={url}>Contact Sales</a></p>
            <p className="footer_para"><a className="footer_para_link" href={url}>Language:en</a></p>

            </div>
            
            
            
            
            
            <img src={footerImage} alt="Girl in a jacket" 
            style={{
                width: "50px",
                height: "40px",
                position: "absolute",
                paddingTop: "5px",
                right: "10px"
              }}></img>

            </div>
            
        </div>
    )
}

export default Footer;