import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const renderBoxes = () => {
    const boxes = [];
    const numberOfBoxes = Math.floor(count / 5);
    for (let i = 0; i < numberOfBoxes; i++) {
      boxes.push(<div key={i} className="h-16 w-16 bg-blue-500 m-2"></div>);
    }
    return boxes;
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex border border-blue-600 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded bg-green-500 font-semibold text-xl mr-2"
        >
          Increment By Value
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded bg-green-500 font-semibold text-xl"
        >
          Increment
        </button>
        <h1 className="text-3xl px-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded bg-red-500 font-semibold text-xl mr-2"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="px-3 py-2 rounded bg-red-500 font-semibold text-xl"
        >
          Decrement By Value
        </button>
      </div>
      <div className="flex mt-4">{renderBoxes()}</div>
    </div>
  );
}

export default App;
