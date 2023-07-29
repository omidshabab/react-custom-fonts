import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-estedad space-y-5">
        <p className="text-xl text-justify">
          سلام خوبی این اولین پیام این برنامه هست که به زبان فارسیه!
        </p>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="outline"
        >
          تعداد کلیک هست: {count}
        </Button>
        
      </div>
    </>
  );
}

export default App;
