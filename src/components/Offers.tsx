import offer from "../assets/images/distance2.jpg";

const Offers = () => {
  return (
    <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offers"
          className="object-contain rounded-xl"
          width={400}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-custom-blue">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <p className="font-Sixtyfour bg-custom-blue text-white p-5 rounded-md">
            Best Buy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
