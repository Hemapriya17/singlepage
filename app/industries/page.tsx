import Breadcrumb from "@/components/Common/Breadcrumb";
import Industries from "@/components/Industries";

const IndustriesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Bringing the Power of Experimentation to All Industries"
        description="Whether you're creating kitchen appliances, personal care appliances, or home furniture, Twinmo is here to ensure your product innovation, testing, and quality control processes are efficient, accurate, and compliant."
      />

    <Industries/>
    </>
  );
};

export default IndustriesPage;