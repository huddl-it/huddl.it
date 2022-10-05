import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Layout from "./client/Layout";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <h1 className="text-7xl font-dm">Hi Mom!</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </Layout>
    );
}

export default App;
