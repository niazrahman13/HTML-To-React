import About from "./About";

export default function AboutData() {

    const Data = [

        {
            id: 1,
            title: "Innovative Tools for Real Estate Excellence",
            textFirst: "The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market with interactive guides and personalized consultations led by industry experts.",
            textSecond: "The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.",
            btnText: "Know More"
        }

    ];

    const aboutImage = [
        {
            img1: "public/images/about/about-image-01.jpg",
            img2: "public/images/about/about-image-02.jpg"
        }
    ]

    return (
        <About props={Data} image={aboutImage} />
    );
}