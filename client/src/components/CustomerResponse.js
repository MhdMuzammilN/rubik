import customerservice from "../assets/homepageicons/customerservice.png"
import brandtag from "../assets/homepageicons/brandtag.png"
import fastdelivery from "../assets/homepageicons/fastdelivery.png"
import technicianservice from "../assets/homepageicons/technicianservice.png"

const CustomerResponse = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div class="col-span-2 mb-8">
          <p class="text-lg font-medium text-purple-600 dark:text-purple-500">
          Rubik in our hood
          </p>
          <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Trusted by many
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Your Electronics Lifeline: Quality Spare Parts and Expert Services
          </p>
          <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="#"
                class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Explore Legality Guide
                <svg
                  class="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Visit the Trust Center
                <svg
                  class="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
          <img src={customerservice} class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"/>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">
              9am - 11pm
            </h3>
            <p class="font-light text-gray-500 dark:text-gray-400">
            We're open 7 days a week.
            </p>
          </div>
          <div>
            <img src={brandtag} class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"/>
       
            <h3 class="mb-2 text-2xl font-bold dark:text-white">Most brands</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">
              We sell parts of almost all
            </p>
          </div>
          <div>
          <img src={fastdelivery} class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"/>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">
              All India Delivery
            </h3>
            <p class="font-light text-gray-500 dark:text-gray-400">
              Shipment availability
            </p>
          </div>
          <div>
          <img src={technicianservice} class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"/>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">Seasoned Experts</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">
              Company trained technicians
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerResponse;
