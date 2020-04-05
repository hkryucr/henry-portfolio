import React from 'react';
import "./footer.css";

class Footer extends React.Component {
    render() {
        return (
          <div className="footer">
            <div className="footer-breaker"></div>
            <div className="footer-text">
                <div>© 2020 Made by Henry Ryu.</div>
            </div>
          </div>
        );
    }
}

export default Footer;