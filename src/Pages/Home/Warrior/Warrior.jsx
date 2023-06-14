import { Fade } from "react-awesome-reveal";
import classesTime from "../../../assets/classtime.jpg";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
const Warrior = () => {
  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img className="w-full rounded-md" src={classesTime} alt="" />
              <Fade direction="left">
                <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                  <div className="overflow-hidden bg-white rounded">
                    <div className="px-10 py-6">
                      <div className="flex items-center">
                        <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                          100%
                        </p>
                        <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                          fitness, boosting <br />
                          flexibility coordination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div>
              <Fade direction="right">
                <h3 className="font-semibold text-2xl text-red-500">
                  Discover More
                </h3>
                <h2 className="mt-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                  Benefits Of Learning Martial Arts
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Learning martial arts goes far beyond acquiring self-defense
                  skills. It is a transformative journey that offers numerous
                  benefits for individuals of all ages and backgrounds.
                </p>
              </Fade>
              <div>
                {/* ------------------ */}

                <section className="py-8 bg-gray-50">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-5 py-8 bg-white">
                      <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
                        <div className="">
                          <img
                            className="w-[100px] mx-auto mb-4 h-[90px]"
                            src={icon1}
                            alt=""
                          />
                          <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">
                              Maintain Stamina
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                              Endurance, Vitality.
                            </p>
                          </div>
                        </div>

                        <div className="">
                          <img
                            className="w-[100px] mx-auto mb-4 h-[90px]"
                            src={icon2}
                            alt=""
                          />
                          <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">
                              Increase Strength
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                              Power, Resilience.
                            </p>
                          </div>
                        </div>

                        <div className="">
                          <img
                            className="w-[100px] mx-auto mb-4 h-[90px]"
                            src={icon3}
                            alt=""
                          />
                          <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">
                              Self Defense
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                              Power, Fortitude.
                            </p>
                          </div>
                        </div>

                        <div className="">
                          <img
                            className="w-[100px] mx-auto mb-4 h-[90px]"
                            src={icon4}
                            alt=""
                          />
                          <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">
                              its Cool
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                              Awesome
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ------------------ */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warrior;
