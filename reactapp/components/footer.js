export default function footercomponent(){
    return (
        <div className="footer--container">
            <div className="footer--container--text">
                <p className="header1">FIND ME ON</p>
                <p className="header5">Feel free to <span className="sub--container">connect</span> with me</p>
            </div>
            <ul className="footer--container--contact">
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-github"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
                <li><i className="fa fa-whatsapp"></i></li>
            </ul>
            <div className="footer--container--copyright">
                <p>Designed and Developed by Nithish</p>
                <p>Copyright © 2022 NK</p>
            </div>
        </div>
    )
}