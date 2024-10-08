import Cta from "./Cta";

export default function CtaData() {

    const Data = [
        {
            id: 1,
            title: "What Are You Looking For?",
            subTitle: "Get Started Now",
            textDetails: "There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.",
            btnDetails: "Let's have a meeting"
        }
    ]

    return (
        <Cta props={Data} />
    );
}