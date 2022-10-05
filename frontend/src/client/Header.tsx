import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="flex justify-between py-5 items-center">
            <h1 className="text-4xl font-bold font-poppins">huddl</h1>
            <input
                type="text"
                className="w-1/3 rounded-md p-1 px-3 placeholder:text-bold placeholder-gray-500"
                placeholder="Have a Question?"
            />
            <div className="flex gap-10">
                <a href="#">
                    <a
                        href=""
                        className="text-gray-500 hover:underline hover:text-gray-700"
                    >
                        Explore
                    </a>
                </a>
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
            </div>
            <div className="flex gap-10 items-center">
                <img
                    className="hover:opacity-75"
                    alt="Notification Bell"
                    src="/src/assets/bell.png"
                    width={25}
                    height={25}
                />
                <a href="/profile">
                    {/* <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="w-9 h-9 rounded-full"
                    /> */}
                </a>
            </div>
        </div>
    );
};

export default Header;
