 import  quality from "../assets/images/distance.jpg";

const Quality = () => {
  return (
    <div
    id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
  >
    <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        We Provide You
        <span className='text-custom-blue'> Super </span>
        <span className='text-custom-blue'>Quality </span> Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring premium comfort and style, our meticulously crafted footwear
        is designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className='mt-11'>
      <p className="font-Sixtyfour">
          Quality Street!
        </p>
      </div>
    </div>

    <div className='flex-1 flex justify-center items-center'>
      <img
        src={quality}
        alt='product detail'
        width={400}
        height={300}
        className='object-contain rounded-xl'
      />
    </div>
  </div>
  );
};

export default Quality;
