import { CiGrid2H, CiGrid2V } from "react-icons/ci";

interface GridProps {
  setIsGrid: (value: boolean) => void;
  isGrid: boolean;
}

const Grid = ({ setIsGrid, isGrid }: GridProps) => {
  return (
    <div>
      <div className="flex text-2xl gap-2">
        {/* Grid View */}
        <div
          onClick={() => setIsGrid(true)}
          className={`p-2 rounded-md cursor-pointer border ${
            isGrid
              ? "border-basicColor text-basicColor"
              : "border-gray-300 text-gray-400"
          }`}
        >
          <CiGrid2H className="w-6 h-6" />
        </div>

        {/* List View */}
        <div
          onClick={() => setIsGrid(false)}
          className={`p-2 rounded-md cursor-pointer border ${
            !isGrid
              ? "border-basicColor text-basicColor"
              : "border-gray-300 text-gray-400"
          }`}
        >
          <CiGrid2V className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
