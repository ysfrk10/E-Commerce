import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useCount } from "@/contexts/countContext";
export default function Counter() {
  const { count, setCount } = useCount();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          count === 1 ? null : setCount(Number(count) - 1);
        }}
        className="font-semibold border cursor-pointer
            inline-flex justify-center items-center py-[4px] px-[4px] text-[15px] border-[black]/50 dark:border-[white]/50"
      >
        <RemoveIcon />
      </button>
      <span className="text-[20px] mx-4">{count}</span>
      <button
        onClick={() => {
          setCount(Number(count) + 1);
        }}
        className="font-semibold border cursor-pointer 
            inline-flex justify-center items-center py-[4px] px-[4px] text-[15px] border-[black]/50 dark:border-[white]/50"
      >
        <AddIcon />
      </button>
    </div>
  );
}
