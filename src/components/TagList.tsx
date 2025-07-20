import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
}

function TagList({ title, tags }: TagListProps) {
  return (
    <section
      className="mt-8 px-6 max-w-5xl mx-auto"
      aria-labelledby="taglist-heading"
    >
      <h2
        id="taglist-heading"
        className="text-white text-lg font-semibold mb-4"
      >
        {title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge
            key={`${tag}-${index}`}
            className="bg-gray-800 text-white hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white cursor-pointer px-4 py-2 rounded-full transition-colors duration-200"
            tabIndex={0}
            aria-label={`Tag: ${tag}`}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default TagList;
