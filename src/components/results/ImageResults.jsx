const ImageResults = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {results?.map(({ image, link: { href, title } }, index) => (
        <a
          href={href}
          key={index}
          className="sm:p-3 p-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image?.src} alt={title} loading="lazy" />
          <p className="w-36 break-words text-small mt-2">{title}</p>
        </a>
      ))}
    </div>
  );
};
export default ImageResults;
