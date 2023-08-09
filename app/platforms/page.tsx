import Breadcrumb from "@/components/Common/Breadcrumb";
import Platforms from "@/components/Platforms";


const PlatformPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Your All-in-One Experimentation Platform for Data Driven Decisions"
        description="We provide a unified platform, Testrunz, for tracking, analyzing, and reporting your product experiments throughout the entire development lifecycle. Paired with our state-of-the-art hardware module, Unity, you're now equipped to make data-driven decisions with confidence and precision."
      />

    <Platforms/>
    </>
  );
};

export default PlatformPage;
