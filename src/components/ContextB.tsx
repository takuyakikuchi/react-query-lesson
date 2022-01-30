import { VFC } from "react";
import { useStateContext } from "../context/StateProvider";

export const ContextB: VFC = () => {
  const { setDark } = useStateContext();

  console.log('rendered ContextB');
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">ContextB</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => setDark(false)}
      >
        dark mode off
      </button>
    </div>   
  )
}
