export interface IProduct {
  name: string;
  shortDescription: string;
  id: string;
  images: Image[];
  category: Category;
}

export interface Image {
  alt: string;
  src: string;
}

export interface Category {
  name: string;
  id: string;
}
