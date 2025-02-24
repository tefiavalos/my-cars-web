export interface Model {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
  }
  
  export interface ModelDetails extends Model {
    title: string;
    description: string;
    model_features: {
      name: string;
      description: string;
      image: string;
    }[];
    model_highlights: {
      title: string;
      content: string;
      image: string;
    }[];
  }
  