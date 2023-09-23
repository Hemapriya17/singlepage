import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/Discover.png"
                alt="about image"
              
             ></img>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Vertically Integrated Solution"
                paragraph="Streamline experiments effortlessly with Twinmo's Testrunz: integrated hardware and software for seamless, efficient execution, minimizing setup and maximizing productivity."
                // mb="205px"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
