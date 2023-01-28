import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const YtPreview = (props: any) => {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);
  if (!id) {
    return;
  }
  return (
    <div>
      {renderDefault({ ...props })}
      <LiteYouTubeEmbed title="" id={id} />
    </div>
  );
};
