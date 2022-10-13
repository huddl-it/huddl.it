import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="flex justify-between py-8 items-center">
            <img src="./src/assets/iter.png" alt=""  className="mr-0 pr-0 h-10 align-top" />
            
            <input
                type="text"
                className="w-1/3 rounded-md p-1 py-2 px-3 placeholder:text-bold placeholder-gray-500 focus:shadow-2xl focus:outline-purple-700"
                placeholder="Have a Question?"
            />
            <div className="flex gap-10">
                <a href="#">
                    <a
                        href=""
                        className="text-gray-700 hover:underline hover:text-purple-700 navitem"
                    >
                        Explore
                    </a>
                </a>
                <a href="#">
                    <a
                        href=""
                        className="text-gray-700 hover:underline hover:text-purple-700 navitem"
                    >
                        Questions
                    </a>
                </a>
                <a href="#">
                    <a
                        href=""
                        className="text-gray-700 hover:underline hover:text-purple-700 navitem"
                    >
                        Experiences
                    </a>
                </a>
            </div>
            <div className="flex gap-10 items-center">
                <img
                    className="hover:opacity-75"
                    alt="Notification Bell"
                    src="/src/assets/bell.png"
                    width={25}
                    height={25}
                />
            </div>
        </div>
    );
};

export default Header;
