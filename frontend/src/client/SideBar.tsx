import { FC } from "react";

const SideBar: FC = () => {
  return (
    <aside className="flex flex-col gap-8">
      <a className="bg-gray-500 text-white p-2 rounded-xl">+ Ask Question</a>
      <a>
        <span className="bg-gray-400 p-1 rounded-lg mr-2">🔥</span> Trending
      </a>
      <a>
        <span className="bg-gray-400 p-1 rounded-lg mr-2">📚</span> Categories
      </a>
      <a>
        <span className="bg-gray-400 p-1 rounded-lg mr-2">🔖</span> Bookmarks
      </a>
      <a>
        <span className="bg-gray-400 p-1 rounded-lg mr-2">📝</span> Answered
        Questions
      </a>
    </aside>
  );
};

export default SideBar;
