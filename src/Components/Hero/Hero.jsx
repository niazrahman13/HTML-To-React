import HeroButton from "./HeroButton";
import HeroImageSection from "./HeroImageSection";

export default function Hero() {
    return (
        <div id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div className="hero-content  mx-auto max-w-[780px] text-center">
                            <h1
                                className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                                {`We'll build house of your dream`}
                            </h1>
                            <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                                We have 9000 more review and our customers trust on out property and quality products.
                            </p>

                            {/* Herro Button */}

                            <HeroButton />

                        </div>
                    </div>
                    {/* Hero Image Section */}
                    <HeroImageSection />
                </div>
            </div>
        </div>
    );
}