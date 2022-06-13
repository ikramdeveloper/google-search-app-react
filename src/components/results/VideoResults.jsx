import ReactPlayer from "react-player";

const VideoResults = ({ results }) => {
  return (
    <div className="flex flex-wrap">
      {results?.map((item, index) => (
        <div key={index} className="p-2">
          {item?.additional_links?.[0].href && (
            <ReactPlayer
              url={item.additional_links?.[0].href}
              controls
              width="355px"
              height="200px"
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default VideoResults;
