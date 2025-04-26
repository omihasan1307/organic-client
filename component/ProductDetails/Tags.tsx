import { Tag } from "lucide-react";

const Tags = () => {
  const tags = ["Organic", "Vegan", "Gluten-Free", "Popular", "New", "On Sale"];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-basicColor hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2"
        >
          <Tag /> {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
