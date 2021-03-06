const NewsResults = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56">
      {results?.["entries"]?.map(({ links, id, title, source }) => (
        <section key={id} className="md:w-2/5 w-full">
          <a
            href={links?.[0]?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
          </a>
          <div className="flex gap-4">
            <a
              href={source?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              {source?.href}
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};
export default NewsResults;
