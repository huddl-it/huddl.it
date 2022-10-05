import { FC, PropsWithChildren } from "react";

const Question: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl px-12 py-8 rounded-xl max-w-3xl cursor-pointer">
      <h2 className="text-xl font-bold mb-2 hover:underline">
        How to be cool like Ritvik Pendyala?
      </h2>
      <p>
        I have seen Ritvik Pendyala in and around the campus. I want to be as
        cool as him. Please someone give tips to become like Ritvik sir. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quo sint saepe ut
        tenetur adipisci ipsam officiis, deserunt harum pariatur autem nobis
        voluptas quod dignissimos aut nihil laborum fugiat, magnam earum. I have
        seen Ritvik Pendyala in and around the campus. I want to be as cool as
        him. Please someone give tips to become like Ritvik sir. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quo sint saepe ut tenetur
        adipisci ipsam officiis, deserunt harum pariatur autem nobis voluptas
        quod dignissimos aut nihil laborum fugiat, magnam earum.
      </p>
    </div>
  );
};

export default Question;
