import Image from "next/image";
import Features from "@/components/Features";
import SectionTitle from "@/components/Common/SectionTitle";

const Platforms = () => {
  return (
    <>
      <section className="pt-[40px] pb-[40px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] w-[550px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/TestrunzMypage.png"
                  alt="about image"
                  width={550}
                  height={30}
                  //   fill
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Testrunz"
                paragraph="Introducing Testrunz, your streamlined solution for executing and tracking product experiments. Testrunz connects to industry-standard test instruments, providing real-time data, analyzing results, and generating reports."
                mb="84px"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Unity"
                  paragraph="Meet Unity, our advanced hardware module designed to interface with lab instruments and facilitate a seamless connection to Testrunz. With its 20-channel capacity for thermocouple, AI, DI, DO measurements and power product measurement features."
                  mb="74px"
                />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] w-[550px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/Discover.png"
                    alt="about-image"
                    // fill
                    // className="mx-auto max-w-full lg:mr-0"
                    width={550}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Features />
      </section>
    </>
  );
};

export default Platforms;
