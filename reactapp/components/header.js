import Link from "next/link"

export default function headerComponent() {
    return(
        <div className="header-container">
            <div className="logo--container">
                <div className="logo--container--logo">
                    <img src="https://img.icons8.com/officel/80/000000/circled-user-male-skin-type-5.png"/>
                </div>            
                <p className="header1">My Portfolio</p>
            </div>
            <div className="btn--container"> 
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/posts/about">About</Link></li>
                    <li><Link href="/contact/contact">Contact</Link></li>
                </ul>            
            </div>
            
        </div>
    )
};
