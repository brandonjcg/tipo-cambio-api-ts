export interface ExchangeData {
  rss: {
    channel: {
      item: {
        title: string;
        description: string;
        pubDate: string;
      }[];
    };
  };
}
