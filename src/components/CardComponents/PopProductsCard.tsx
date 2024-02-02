import star from "../../assets/icons/star.png";
import { PropsProductsCard } from "../../models/types";

const PopProductsCard = ({ imgURL, name, price }: PropsProductsCard) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[200px] h-[250px]" src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rate-icon" width={30} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-custom-blue text-1xl leading-normal ">
        {price}
      </p>
    </div>
  );
};

export default PopProductsCard;
