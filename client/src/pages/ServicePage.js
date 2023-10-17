import { useState } from "react";

import electronics from "../assets/servicepageimages/electronics-removebg.png";

import ServicePageBlog from "../components/ServicePageBlog";

const ServicePage = () => {
  let brands = [
    "RUBIK",
    "LG",
    "SONY",
    "SAMSUNG",
    "WHIRLPOOL",
    "GODREJ",
    "ONIDA",
    "BLUE STAR",
    "ASUS",
    "ACER",
    "RECONNECT",
    "AMSTRAD",
    "HP",
    "SANYO",
    "BOSE",
    "HAVELLS",
    "BOSCH",
    "HAIER",
    "GENERAL",
    "ELECTROLUX",
    "PREETHI",
    "DELL",
    "DAIKIN",
    "CROMPTON",
    "BPL",
    "PHILIPS",
    "PANASONIC",
    "TCL",
    "CARRIER",
    "IFB",
    "JVC",
    "IMPEX",
    "LLOYD",
    "HITACHI",
    "YAMAHA",
    "VOLTAS",
    "TOSHIBA",
    "SUJATA",
    "SOLIDARE",
    "SHARP",
    "PRESTIGE",
    "JBL",
    "PIONEER",
    "BAJAJ",
    "USHA",
    "VGUARD",
    "BUTTERFLY",
    "others",
  ]; //new brands can be added

  brands = brands.sort();

  let products = [
    "television",
    "laptop",
    "ceiling fan",
    "washing machine",
    "home theatre",
    "amplifier",
    "pedestal fan",
    "PC/desktop",
    "monitor",
    "refrigerator",
    "dvd player",
    "microwave oven",
    "air conditioner",
    "others",
  ];
  products = products.sort();

  let ProductsUpper = products.map((product) => {
    return product.toUpperCase();
  });
  //console.log(ProductsUpper)

  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("Pick your Brand");
  const [product, setProduct] = useState("Pick your Product");

  const Submit = (e) => {
    console.log(customer);
    console.log(phone);
    console.log(brand);
    console.log(product);
    //snd api should be written here4

    //clearing everything from ui
    setCustomer("");
    setPhone("");
    setBrand("Pick your Brand");
    setProduct("Pick your Product");
  };

  return (
    <>
      <section class="relative  bg-blueGray-50">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src={electronics}
                  class="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>

            <div class="min-w-screen min-h-screen bg-white-900 flex items-center justify-center px-5">
              <section class="max-w-4xl p-6 mx-auto bg-white-600 rounded-md shadow-md dark:bg-gray-800">
                <h1 class="text-xl font-bold text-black capitalize dark:text-white">
                  Book an appointment
                </h1>
                <form>
                  <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="username"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        name="cname"
                        value={customer}
                        onChange={(e) => {
                          setCustomer(e.target.value);
                        }}
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="emailAddress"
                      >
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="password"
                      >
                        Contact Number
                      </label>
                      <input
                        name="cname"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Location
                      </label>
                      <input
                        id="passwordConfirmation"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Product Brand
                      </label>
                      <select
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        name="brand"
                        id="brand"
                        onChange={(e) => {
                          setBrand(e.target.value);
                        }}
                        value={brand}
                      >
                        <option value="">{brand}</option>
                        {brands.map((brand) => (
                          <option value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Product Name
                      </label>
                      <select
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        name="product"
                        id="product"
                        onChange={(e) => {
                          setProduct(e.target.value);
                        }}
                        value={product}
                      >
                        <option value="">{product}</option>
                        {ProductsUpper.map((product) => (
                          <option value={product}>{product}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label class="text-black dark:text-gray-200" id="date">
                        Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label
                        class="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Text Area
                      </label>
                      <textarea
                        id="textarea"
                        type="textarea"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      ></textarea>
                    </div>
                    <div>
                      <label class="text-black dark:text-gray-200">Image</label>
                      <div class="mt-1 flex justify-center px-6 pt-5 pb-2 border-2 border-red-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                          <svg
                            class="mx-auto h-10 w-12 text-white"
                            stroke="black"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label
                              for="file-upload"
                              class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span class="">Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                class="sr-only"
                              />
                            </label>
                            <p class="pl-1 text-black">or drag and drop</p>
                          </div>
                          <p class="text-xs text-black">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-end mt-6 px-10 py-10">
                      <button
                        class="px-10 py-1 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                        onClick={(e) => Submit(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
      <ServicePageBlog />

      <div className="flex bg-[#edf2f4] m-5 md:flex-row justify-around max-sm:flex-col p-3 rounded-lg">
        <div className="flex items-center justify-center">
          <div className="md:text-lg sm:max:text-sm sm:max:text-left inset-0 ">
            We provide top-notch service for quality electronics devices...
          </div>
          {/* <div className="md:text-lg sm:max:text-sm sm:max:text-left" >We provide top-notch service for quality electronics devices... </div> */}
        </div>

        {/* <div className="overflow-auto p-10">
          <h3>Enter the details</h3>
          <div className="flex flex-col">
            <label for="cname" className="pt-3">
              Customer name:
            </label>
            <br />
            <input
              className="focus:bg-[#d9d9d9] rounded-sm border-[#2b2d42] ring-1 ring-blue-500"
              type="text"
              name="cname"
              value={customer}
              onChange={(e) => {
                setCustomer(e.target.value);
              }}
            />

            <label for="cname" className="pt-3">
              Contact number:
            </label>
            <br />
            <input
              className="focus:bg-[#d9d9d9] rounded-sm border-[#2b2d42] ring-1 ring-blue-500"
              type="number"
              name="cname"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <label for="cname" className="pt-3">
              Brand:
            </label>
            <br />
            <select
              className="focus:bg-[#d9d9d9] rounded-sm border-[#2b2d42] ring-1 ring-blue-500"
              name="brand"
              id="brand"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              value={brand}
            >
              <option value="">{brand}</option>
              {brands.map((brand) => (
                <option value={brand}>{brand}</option>
              ))}
            </select>

            <label for="cname" className="pt-3">
              Product:
            </label>
            <br />
            <select
              className="focus:bg-[#d9d9d9] rounded-sm border-[#2b2d42] ring-1 ring-blue-500"
              name="product"
              id="product"
              onChange={(e) => {
                setProduct(e.target.value);
              }}
              value={product}
            >
              <option value="">{product}</option>
              {ProductsUpper.map((product) => (
                <option value={product}>{product}</option>
              ))}
            </select>

            <div className="flex items-center justify-center pt-4 ">
              <button
                className="bg-violet-600 hover:bg-[#06d6a0] rounded-md border-md flex items-center justify-center w-40 h-10"
                onClick={(e) => Submit(e)}
              >
                Submit
              </button>
            </div> */}
          {/* </div> */}
        </div>
      
    </>
  );
};

export default ServicePage;
