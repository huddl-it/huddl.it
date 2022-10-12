import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Layout from "./client/Layout";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <div className="flex flex-col gap-6">
                <div className="bg-white/70 backdrop-blur-xl px-12 py-8 rounded-xl max-w-3xl cursor-pointer">
                    <h2 className="text-xl font-bold mb-2 hover:underline">
                        How to be cool like Ritvik Pendyala?
                    </h2>
                    <p>
                        I have seen Ritvik Pendyala in and around the campus. I
                        want to be as cool as him. Please someone give tips to
                        become like Ritvik sir. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quo sint saepe ut tenetur
                        adipisci ipsam officiis, deserunt harum pariatur autem
                        nobis voluptas quod dignissimos aut nihil laborum
                        fugiat, magnam earum. I have seen Ritvik Pendyala in and
                        around the campus. I want to be as cool as him. Please
                        someone give tips to become like Ritvik sir. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Quo sint
                        saepe ut tenetur adipisci ipsam officiis, deserunt harum
                        pariatur autem nobis voluptas quod dignissimos aut nihil
                        laborum fugiat, magnam earum.
                    </p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl px-12 py-8 rounded-xl max-w-3xl cursor-pointer">
                    <h2 className="text-xl font-bold mb-2 hover:underline">
                        How to be cool like Tejdeep Chippa?
                    </h2>
                    <p>
                        I have seen Tejdeep Chippa in and around the campus. I
                        want to be as productive as him. Please someone give
                        tips to become such businessman like Chippa sir. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Quo
                        sint saepe ut tenetur adipisci ipsam officiis, deserunt
                        harum pariatur autem nobis voluptas quod dignissimos aut
                        nihil laborum fugiat, magnam earum. I have seen Ritvik
                        Pendyala in and around the campus. I want to be as cool
                        as him. Please someone give tips to become like Ritvik
                        sir. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quo sint saepe ut tenetur adipisci ipsam officiis,
                        deserunt harum pariatur autem nobis voluptas quod
                        dignissimos aut nihil laborum fugiat, magnam earum.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default App;
