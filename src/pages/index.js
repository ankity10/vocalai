import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import img from '@site/static/img/shape.svg'

import Heading from '@theme/Heading';
import styles from './index.module.css';


const style = `
.navbar__logo {
  height: 3.2rem;
}
.navbar__inner {
   margin-top: 5px !important;
}

.scroll_nav{
margin-top:5px;
}
 .hero__title{
    font-size: 4.2rem;
    color: #000;
    
    }
.navbar__inner{
 max-width: 1200px;
 margin-left: auto;
 margin-right: auto;
  margin-top: 30px;
}

.navbar--fixed-top {
  box-shadow: none;
}

a.navbar__brand{
  margin-right: 3rem;
}

.navbar__item{
  padding: 0 20px;
  font-size: 16px;
}

.navbar{
  height: auto
}


@media (max-width: 1281px) {
  
}



@media (max-width: 996px) {

    .hero__title{
    font-size: 3.4rem;
    
    }
    
    h3.heading {
    font-size: 2.6rem;
    margin-bottom: 40px;
    }
.heading_src-components-HomepageFeatures-styles-module{
font-size: 2.6rem
}
  .navbar__inner {
    margin-top: 0px;
  }
  
  div.sec1 {
    padding: 25px 40px;
  }
  div.benefit{
    width: 100%;
  }
  div.benefit-content{
    max-width:500px;
    padding: 10px 10px;
  }
}



@media (max-width: 660px) {

  div.benefit-content h4{
    font-size: 1.6rem;
  }
  div.benefit-content p{
    font-size: 1rem;
  }
  div.benefit-content{
    padding: 0px 0px;
  }
}

@media (max-width: 481px) {
.sec2_src-components-HomepageFeatures-styles-module{
padding: 25px 40px;
}
}

@media (max-width: 320px){

}


`

function WhyChooseUs() {

    return (
        <div className="sec1">
            <h3 className="heading">Why Choose <span
                style={{
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(90deg, rgba(28,81,188,1) 0%, rgba(34,106,199,1) 7%, rgba(39,127,208,1) 14%, rgba(45,153,219,1) 20%, rgba(52,185,233,1) 28%, rgba(61,223,249,1) 36%, rgba(64,236,255,1) 42%, rgba(72,216,249,1) 48%, rgba(89,173,235,1) 57%, rgba(105,134,223,1) 65%, rgba(117,102,213,1) 75%, rgba(128,76,204,1) 88%, rgba(136,55,198,1) 100%)',
                    backgroundClip: 'text'
                }}>Vocal AI</span> Over DIY?</h3>
            <div className="benefits-wrap">
                <div className="benefit">
                    <div className='benefit-content'>
                        <img src='img/fast_v1.svg'></img>
                        <h4>10x Faster Deployment</h4>
                        <p>Launch production-ready voice bots in days, not months.</p>

                    </div>
                </div>
                <div className="benefit">
                    <div className='benefit-content'>
                        <img src='img/cost saving_v1.svg'></img>
                        <h4>Cost-Effective Scaling</h4>
                        <p>Pay only for what you use, avoiding upfront infrastructure costs. </p>

                    </div>

                </div>
                <div className="benefit">
                    <div className='benefit-content'>
                        <img src='img/improvement.svg'></img>
                        <h4>Instant Voice Response</h4>
                        <p>Deployed on high speed infra for lightning-fast interactions with the platform.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#fff",}}>
            <img className="il-left" src='img/left.svg'></img>

            <div className="container" style={{textAlign: "center"}}>
                <Heading as="h1" className="hero__title">

                    Transform Your Customer Experience with <span
                    style={{color: 'transparent', backgroundImage: 'linear-gradient(90deg, rgba(28,81,188,1) 0%, rgba(34,106,199,1) 7%, rgba(39,127,208,1) 14%, rgba(45,153,219,1) 20%, rgba(52,185,233,1) 28%, rgba(61,223,249,1) 36%, rgba(64,236,255,1) 42%, rgba(72,216,249,1) 48%, rgba(89,173,235,1) 57%, rgba(105,134,223,1) 65%, rgba(117,102,213,1) 75%, rgba(128,76,204,1) 88%, rgba(136,55,198,1) 100%)', backgroundClip: 'text'}}>AI Voice Agents</span>

                </Heading>
                <p className="hero__subtitle" style={{color: "#000", maxWidth: "60%", margin: "auto"}}>
                    Automate customer interactions with AI voice agents, reducing costs and improving efficiency. Handle
                    inquiries, bookings, and more with 24/7 availability and seamless system integration.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="docs/introduction" style={{background: "#2677cc", color: "#fff", fontWeight: 300}}>
                        Get Started
                    </Link>
                </div>
            </div>
            <img className="il-right" src='img/right.svg'></img>


        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div>
            <style>{style}</style>
            <Layout
                title={`AI ${siteConfig.title}`}
                description="Description will go into a meta tag in <head />">
                <HomepageHeader/>

                <WhyChooseUs/>

                <main>


                    <HomepageFeatures/>

                </main>

            </Layout>
        </div>

    );
}

