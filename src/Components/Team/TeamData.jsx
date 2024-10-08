import Team from "./Team";

export default function TeamData() {

    const Data = [
        {
            id: 1,
            img: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-01.png",
            name: "Melissa Tatcher",
            designation: "Marketing Expert"
        },
        {
            id: 2,
            img: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png",
            name: "Stuard Ferrel",
            designation: "Digital Marketer"
        },
        {
            id: 3,
            img: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
            name: "Eva Hudson",
            designation: "Creative Designer"
        },
        {
            id: 4,
            img: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png",
            name: "Jackie Sanders",
            designation: "Founder of Facebook"
        },

    ]

    return (
        <Team props={Data} />
    );
}