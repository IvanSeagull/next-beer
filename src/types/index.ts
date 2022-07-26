export type BeerCardProps = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  contributed_by: string;
};

export type BeerPageProps = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  contributed_by: string;
  food_pairing: string[];
  brewers_tips: string;
  abv: number;
};
