import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Parts from './Parts';
import Reviews from './Reviews';
import Subscribe from './Subscribe';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Subscribe></Subscribe>
            <BusinessSummary></BusinessSummary>
            <Contact></Contact>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;