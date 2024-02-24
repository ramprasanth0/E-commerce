import './index.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: 'grey' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="#" alt="Brand Logo" width="100" height="100" />
                        <p>Label</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
