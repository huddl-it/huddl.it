import { FC } from "react";

const SideBar: FC = () => {
    return (
        <aside className="flex flex-col gap-8 pr-10">
            <a className="ease-in-out transition-all bg-white p-3 rounded-xl border-2 hover:border-purple-700 cursor-pointer hover:shadow-2xl">
                + Ask Question
            </a>
            <a className="ease-in-out transition-all hover:bg-white  p-3 text-lg rounded-xl hover:shadow-2xl flex items-center gap-3 cursor-pointer">
                🔥 Trending
            </a>
            <a className="ease-in-out transition-all hover:bg-white  p-3 text-lg rounded-xl hover:shadow-2xl flex items-center gap-3 cursor-pointer">
                📚 Categories
            </a>
            <a className="ease-in-out transition-all hover:bg-white  p-3 text-lg rounded-xl hover:shadow-2xl flex items-center gap-3 cursor-pointer">
                🔖 Bookmarks
            </a>
            <a className="ease-in-out transition-all hover:bg-white  p-3 text-lg rounded-xl hover:shadow-2xl flex items-center gap-3 cursor-pointer">
                📝 Answered Questions
            </a>
        </aside>
    );
};

export default SideBar;
