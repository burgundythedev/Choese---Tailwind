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
  