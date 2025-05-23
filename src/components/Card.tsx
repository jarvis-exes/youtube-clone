import { Link } from "react-router-dom";
import type { HomePageVideos } from "../Types";

const Card = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="w-64 h-60 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-grey-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-44 w-72"
            alt="Video Thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              className="h-9 w-9 rounded-full"
              alt="channel image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
