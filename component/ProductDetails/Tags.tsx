import { Tag } from "lucide-react";

const Tags = ({ tag }: { tag: any }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tag.map((tag: any, index: any) => (
        <span
          key={index}
          className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-basicColor hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2"
        >
          <Tag /> {tag?.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
