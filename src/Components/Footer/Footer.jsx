/* eslint-disable react/prop-types */

export default function Footer({ socialIcon, aboutUs, featureData, latestBlog }) {
    return (
        <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <a href="javascript:void(0)" className="mb-6 inline-block  max-h-[100px]">
                                <img src="/images/logo/logo.svg" alt="logo" className="max-w-full" />
                            </a>
                            <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                                We create digital experiences for brands and companies by using
                                technology.
                            </p>
                            <div className="-mx-3 flex items-center">
                                {
                                    socialIcon.map((elem) => {
                                        return (

                                            <a key={elem.id} href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                                                {elem.svg}
                                            </a>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
                            <ul>
                                {
                                    aboutUs.map((elem) => {
                                        return (
                                            <li key={elem.id}>
                                                <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                                    {elem.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
                            <ul>
                                {
                                    featureData.map((elem) => {
                                        return (
                                            <li key={elem.id}>
                                                <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                                    {elem.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
                            <div className="flex flex-col gap-5"> {/* Add gap here */}
                                {
                                    latestBlog.map((elem) => {
                                        return (
                                            <div key={elem.id} className="flex items-center gap-[25px]">
                                                <a href={elem.blogLink} className="group flex items-center gap-[25px]">
                                                    <div className="overflow-hidden rounded">
                                                        <img src={elem.img} alt="blog" />
                                                    </div>
                                                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                                                        {elem.name}
                                                    </span>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}