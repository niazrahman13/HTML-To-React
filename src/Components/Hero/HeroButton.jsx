export default function HeroButton() {
    return (
        <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
            <li>
                <a href="https://links.tailgrids.com/play-download"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color">
                    Book Now
                </a>
            </li>
            <li>
                <a href="https://github.com/tailgrids/play-tailwind" target="_blank"
                    className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark">
                    Contact Us
                </a>
            </li>
        </ul>
    );
}