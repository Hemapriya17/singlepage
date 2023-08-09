"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";


const PricingPage = () => {

  return (
    <>
    <Breadcrumb
      pageName="Simple and Affordable Pricing"
      description="At Twinmo, we believe that simplicity and affordability should go hand in hand. That's why we've designed our pricing structure to be straightforward and budget-friendly, ensuring that you get the most value out of every penny you spend."
    />
    <Pricing />
  </>
  );
};

export default PricingPage;
