import Faq from "./FAQ";

export default function FaqData() {

    const Data = [

        {
            id: 1,
            title: "Is TailGrids Well-documented?",
            details: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            id: 2,
            title: "Is TailGrids Well-documented?",
            details: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            id: 3,
            title: "Is TailGrids Well-documented?",
            details: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            id: 4,
            title: "Is TailGrids Well-documented?",
            details: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },

    ]

    return (
        <Faq props={Data} />
    );
}