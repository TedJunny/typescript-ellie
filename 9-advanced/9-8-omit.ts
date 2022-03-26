{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMeatadata = Omit<Video, "url" | "data">;

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
