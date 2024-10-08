import Contact from "./Contact";

export default function ContactData() {

    const Data = [

        {
            id: 1,
            location: "401 Broadway, 24th Floor, Orchard Cloud View, London",
            mail1: "info@yourdomain.com",
            mail2: "contact@yourdomain.com"
        }

    ]

    return (
        <Contact props={Data} />
    );
}