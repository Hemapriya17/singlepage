import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
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
                mb="205px"
              />
            </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="The Power of Rapid Experimentation"
                paragraph="Transform the way you discover, test, and learn. Our state-of-the-art Experimentation Platform is designed to accelerate your experimentation process, allowing you to make informed decisions quickly. Plan and execute experiments with ease, without ever beating around the bush."
                mb="44px"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSectionTwo;
