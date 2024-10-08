import AuthButtons from "./AuthenticButtons";
import NavMenus from "./NavMenus";

export default function Navbar() {

    const navSvg = "public/images/logo/logo.svg";

    return (
        <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="flex w-full items-center justify-between px-4 py-3">
                        <a href="index.html" className="navbar-logo block w-60 max-w-full px-4">
                            <img src={navSvg} alt="logo" className="header-logo h-12" />
                        </a>
                        <ul className="hidden lg:flex ">
                            <NavMenus />
                        </ul>

                        <div className="sm:flex">
                            <AuthButtons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}