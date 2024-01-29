export type ImgURLType = {
    bigShoe: string;
    thumbnail: string;
  };
  
  export type ShoeCardProps = {
    imgURL: ImgURLType;
    changeBigShoeImage: (shoe: string) => void; 
    bigShoeImg: string;
    index: number; 
  };
  export type PropsProductsCard = {
    imgURL: string;
    name: string;
    price: string;
  };
  
  export type PropsServicesCard = {
    imgURL: string;
    label: string;
    subtext: string;
  };