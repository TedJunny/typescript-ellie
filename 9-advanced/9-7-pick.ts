{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMeatadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  }

  function getVideoMetadata(id: string): VideoMeatadata {
    return {
      id: id,
      title: "title",
    };
  }
}
