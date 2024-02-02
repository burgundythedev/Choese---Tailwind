import star from "../../assets/icons/star.png";
import { PropsReviewsCard } from "../../models/types";

const Reviews = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: PropsReviewsCard) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-base mt-6 max-w-sm text-justify font-montserrat leading-7 text-slate-gray">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="w-full mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default Reviews;
