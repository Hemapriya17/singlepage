import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Customized Support for Your Product Needs"
        description="We understand the uniqueness of every product, and we're ready to provide tailored support. Fill in our contact form and let us know whether your focus is Innovation, Testing, or Quality Control. Tell us about your problem or objective, and we'll schedule a consultation."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
