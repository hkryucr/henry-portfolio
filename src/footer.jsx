import React from 'react';
import "./footer.css";

class Footer extends React.Component {
    render() {
        return (
          <>
            <div className="footer-breaker"></div>
            <div className="footer-text" style={{fontSize: "0.85rem", lineHeight: "1.5rem", paddingTop: "2.5rem"}}>
                <div>Thanks you for visiting my website.</div>
                <div>I hope everyone is staying safe during theses unprecedented times.</div>
            </div>
          <div className="footer">
            <div className="footer-breaker"></div>
            <div className="footer-text">
              <div>© 2020 Made by Henry Ryu.</div>
            </div>
          </div>
          </>
        );
    }
}

export default Footer;