import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import CustomerReviews from "./components/CustomersReviews";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import PopProducts from "./components/PopProducts";
import Quality from "./components/Quality";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="relative">
     <Header/>
      <div className="xl: padding-1 wide:padding-r padding-b"><Hero/></div>
      <div className="padding"><PopProducts/></div>
      <div className="padding"><Quality/></div>
      <div className="padding-x py-10"><Services/></div>
      <div className="padding"><Offers/></div>
      <div className="bg bg-pale-blue padding"><CustomerReviews/></div>
      <div className="padding-x sm:py-32 py-16 w-full"><Subscribe/></div>
      <div className="bg-black padding-x padding-t pb-8"><Footer/></div>
    </div>
  );
}

export default App;
