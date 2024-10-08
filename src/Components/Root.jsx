import AboutData from './About/AboutData'
import ContactData from './Contact/ContactData'
import CtaData from './CTA/CtaData'
import FaqData from './FAQ/FaqData'
import FeaturesData from './Features/FeaturesData'
import FooterData from './Footer/FooterData'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import PropertyData from './Property/PropertyData'
import TeamData from './Team/TeamData'

export default function Root() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturesData />
            <PropertyData />
            <AboutData />
            <CtaData />
            <FaqData />
            <TeamData />
            <ContactData />
            <FooterData />
        </>
    );
}