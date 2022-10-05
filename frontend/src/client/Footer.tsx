import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="text-gray-800 flex justify-between px-2 pb-12 pt-8">
            <div className="w-1/3 flex flex-col gap-2">
                <h1 className="text-5xl font-semibold font-poppins">huddl</h1>
                <p className="text-black/75">
                    huddl, a IIITD Forum is a platform for students to share
                    their knowledge, experience and ask questions about the
                    IIITD.
                </p>
                <p className="text-gray-500 font-medium text-sm">
                    © 2022 huddl. All Rights Reserved
                </p>
            </div>
            <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-1 text-sm">
                    <h3 className="font-bold text-base">PAGES</h3>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            Questions
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            Experiences
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            About
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
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
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            Support Us
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
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
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            aedIn
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            Twitter
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
                        >
                            Instagram
                        </a>
                    </a>
                    <a href="#">
                        <a
                            href=""
                            className="text-gray-500 hover:underline hover:text-gray-700"
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
