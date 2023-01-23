import Image from 'next/image'
import Sample from '../components/sample';

export default function homepageContent(){
    return(
        <div>
            <div className="main--container">
                <div className="img--container">
                    <Image src={require('../public/static/images/graphic.jpg')}/>
                </div>
                <div className="text--container">
                    <h1>Hello!<span class="wave">👋🏾</span></h1>
                    <h1 className='sub--container'>Myself Nithish</h1>
                    <Sample/>            
                </div>        
            </div>
            <div className='second--container'>
                <div className='header--container'>
                    <p className='header1'>LET ME <span className='sub--container'>INTRODUCE</span> MYSELF</p>
                </div>
                <div className='content--container'>
                    <div className='text--container'>
                        {/* <p>I did my schooling in TVS MATRICULATION Higher secondary school MADURAI, TN. And my UG IN KLN College</p> */}
                        <p>From my 6th standard of school i was curious to design an website on my own so the very first tag that made me to fell in love with web development is "marquee"" tag. </p>
                        <p>I am very much interested in designing and developing in responsive web applications . </p>
                        <p>Very fluent with classics like Javascript,python.</p>
                        <p>Had some hands on in databricks and spark architecture in data engineering</p>
                    </div>
                    <div className='img-container'> 
                        <Image src={require('../public/static/images/profile.svg')}/>
                    </div>
                </div>                
            </div>
        </div>
        

        

    )
}