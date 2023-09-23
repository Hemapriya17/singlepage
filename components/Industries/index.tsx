"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Industries = () => {
  return (
    <div>
      <div className="container">
        <SectionTitle
          title="Industries"
          paragraph=""
          center
        />
      </div>
      <section className="pt-[40px] pb-[40px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] w-[550px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/Personal.png"
                  alt="about image"
                  width={550}
                  height={30}
                  //   fill
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Personal care appliances"
                paragraph="Elevating personal care appliance testing. Enhance efficiency, ensure reliability. Craft products reflecting quality and care."
                mb="84px"
              />
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"> */}
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Home furnitures"
                  paragraph="Upholding top safety and quality standards for enduring, worry-free furniture. Confidence in comprehensive testing and compliance for lasting performance."
                  mb="74px"
                />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] w-[550px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/Furniture.png"
                    alt="about-image"
                    // fill
                    // className="mx-auto max-w-full lg:mr-0"
                    width={550}
                    height={30}
                  />
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] w-[550px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/Kitchen.png"
                  alt="about image"
                  width={550}
                  height={30}
                  //   fill
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Kitchen appliances"
                paragraph="Twinmo.ai supports kitchen appliance engineers, enhancing safety and performance. Streamlined documentation, real-time data, and analytics expedite product development."
                mb="84px"
              />
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"> */}
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Research & Education"
                  paragraph="Testrunz enables interdisciplinary collaboration among researchers and students, fostering innovation and accessibility in scientific research and education."
                  mb="74px"
                />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] w-[550px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/Research.png"
                    alt="about-image"
                    // fill
                    // className="mx-auto max-w-full lg:mr-0"
                    width={550}
                    height={30}
                  />
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Industries;
