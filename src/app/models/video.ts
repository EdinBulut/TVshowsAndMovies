export interface Video {
  id: number;
  results: VideoResults[];
}

export interface VideoResults {
  key: string;
  name: string;
}
