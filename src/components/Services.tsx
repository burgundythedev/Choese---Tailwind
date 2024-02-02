import { services } from "../models/index";
import ServiceCard from "./CardComponents/ServiceCard";

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;
