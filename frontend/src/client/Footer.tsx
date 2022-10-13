import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="text-gray-800 flex justify-between px-2 pb-12 pt-8">
            <div className="w-1/3 flex flex-col gap-2">
            

                
                <img src="./src/assets/iter.png" alt=""  className="ml-0 pl-0 w-20" />
                <p className="text-black/75">
                    huddl, a IIITD Forum is a platform for students to share
                    their knowledge, experience and ask questions about the
                    IIITD.
                </p>
                <p className="text-black font-medium text-sm opacity-60">
                    © 2022 huddl. All Rights Reserved
                </p>
            </div>
            <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-1 text-sm">
                    <h3 className="font-bold text-base">PAGES</h3>
                    <a href="#">
                        <a
                            href=""
                            className="bg_slider text-gray-500  hover:text-white hover:font-semibold "
                        >
                            Questions
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Experiences
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            About
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Contact us
                        </a>
                    </a>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h3 className="font-bold text-base">HELP US</h3>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Support Us
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Contribute
                        </a>
                    </a>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h3 className="font-bold text-base">FOLLOW US</h3>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            aedIn
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Twitter
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Instagram
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500  hover:text-white hover:font-semibold"
                        >
                            Blog
                        </a>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
