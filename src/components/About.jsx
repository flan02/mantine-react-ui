//import { Grid, SimpleGrid } from "@mantine/core";
import companyLogo from "../assets/images/logo.svg";

function About() {
  return (
    <main className="profile-page">
      <section className="relative py-16 bg-slate-200">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-col w-full min-w-0 -mt-40 break-words rounded-lg shadow-xl sm:mt-0 bg-slate-100">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                  <div className="relative">
                    <img
                      src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                      alt="..."
                      className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16 max-w-150-px"
                    ></img>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                  <div className="px-3 py-6 mt-32 sm:mt-0">
                    <button
                      className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none sm:mr-2"
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12 lg:order-1">
                  <div className="flex justify-center pt-8 -mt-4">
                    <div className="px-3 mr-4 text-center sm:p-3">
                      <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        +320
                      </span>
                      <span className="text-sm text-blueGray-400">Clients</span>
                    </div>
                    <div className="px-3 mr-4 text-center sm:p-3">
                      <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        +25000
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Transfers
                      </span>
                    </div>
                    <div className="px-3 text-center sm:p-3 lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        +1000
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Contracts
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="w-[200px] h-[200px] rounded-full mx-auto border border-gray-400 bg-slate-500 ">
                  <img
                    src={companyLogo}
                    alt="Easy Bank"
                    className="mx-auto mt-[90px] w-[180px] text-center"
                  />
                </div>

                <div className="mt-4 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
                  <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
                  Palo Alto, California
                </div>
                <div className="mt-10 mb-2 text-blueGray-600">
                  <i className="mr-2 text-lg fas fa-briefcase text-blueGray-400"></i>
                  Solution Bank | Be Crypto
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
                  A new revolutionary bank
                </div>
              </div>
              <div className="py-10 mt-10 text-center border-t border-blueGray-200">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-9/12">
                    <p className="mb-4 font-serif text-lg leading-relaxed b-4 text-slate-400">
                      At easybank, we specialize in providing secure and
                      reliable solutions for storing your cryptocurrencies. With
                      cutting-edge technology and a dedicated team of experts,
                      we guarantee maximum protection and quick access to your
                      digital assets, so you can manage your investments with
                      total confidence.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8 bg-blueGray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 mx-auto text-center md:w-6/12">
                <div className="py-1 font-semibold text-md text-blueGray-500">
                  Made with{" "}
                  <a
                    href="https://www.mantine.dev/"
                    className="underline text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Mantine
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-emerald-400 hover:text-emerald-600 hover:underline"
                    target="_blank"
                  >
                    {" "}
                    Dan Chanivet
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default About;
