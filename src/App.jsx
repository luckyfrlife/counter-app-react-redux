import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-indigo-700">
      <div className="bg-white rounded shadow text-center pt-8 text-lg font-medium">
        <h2 className="px-4">Counter App using React Redux</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
