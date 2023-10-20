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
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [brand, setBrand] = useState("Pick your Brand");
  const [product, setProduct] = useState("Pick your Product");
  const [date,setDate] = useState(null);
  const [problem,setProblem] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const Submit = (e) => {
    e.preventDefault();
    console.log(customer);
    console.log(phone);
    console.log(email);
    console.log(address);
    console.log(brand);
    console.log(product);
    console.log(date);
    console.log(problem);
    console.log(imageFile);
    //snd api should be written here4

    // let data = {"customer":customer, "phone":phone,"email":email,
    // "address":address,"brand":brand,"product":product,
    // "date":date,"problem":problem,"imageFile":imageFile}

    const sendData = async ()=>{
      try{
        const formData = new FormData();
        formData.append('customer',customer);
        formData.append('phone',phone);
        formData.append('email',email);
        formData.append('address',address);
        formData.append('brand',brand);
        formData.append('product',product);
        formData.append('date',date);
        formData.append('problem',problem);
        formData.append('imageFile',imageFile);

      const response = await fetch(
        'http://localhost:4000/service/',
        {
          method:'POST',
          mode: "cors",
         body:formData  
        }
      );
      
      const responseData = await response.json();
      console.log("response data ", responseData);
      }
      catch(e){
        console.log("error is " + e);
      }
    }
    sendData();

    //clearing everything from ui
    setCustomer("");
    setPhone("");
    setEmail("");
    setAddress("");
    setBrand("Pick your Brand");
    setProduct("Pick your Product");
    setDate("");
    setProblem("");
    setImageFile(null);
  };

  return (
    <>
      <section className="relative  bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src={electronics}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>

            <div className="min-w-screen min-h-screen bg-white-900 flex items-center justify-center px-5">
              <section className="max-w-4xl p-6 mx-auto bg-white-600 rounded-md shadow-md dark:bg-gray-800">
                <h1 className="text-xl font-bold text-black capitalize dark:text-white">
                  Book an appointment
                </h1>
                <form>
                  <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-black dark:text-gray-200"
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-black dark:text-gray-200"
                        for="emailAddress"
                      >
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-black dark:text-gray-200"
                        for="contactNumber"
                      >
                        Contact Number
                      </label>
                      <input
                        name="phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Address
                      </label>
                      <input
                        value={address}
                        onChange={(e)=>{setAddress(e.target.value)}}
                        id="passwordConfirmation"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Product Brand
                      </label>
                      <select
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
                        className="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Product Name
                      </label>
                      <select
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
                      <label className="text-black dark:text-gray-200" id="date">
                        Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label
                        className="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Problem/Issue
                      </label>
                      <textarea
                        id="textarea"
                        type="textarea"
                        value={problem}
                        onChange={(e)=>{setProblem(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      ></textarea>
                    </div>
                    <div>
                      <label className="text-black dark:text-gray-200">Image</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-2 border-2 border-red-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-10 w-12 text-white"
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
                          <div className="flex text-sm text-gray-600">
                          <img src={imageFile} height="40px" width="40px" alt="no Img"/>
                            <label
                              for="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span className="">Upload a file</span>
                              <input
                                id="file-upload"
                                name="imageFile"
                                type="file"
                                className="sr-only"
                                onChange={(e)=>{
                                  setImageFile(e.target.files[0])
                                }}
                              />
                              
                            </label>
                            
                            <p className="pl-1 text-black">or drag and drop</p>
                          </div>
                          <p className="text-xs text-black">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-6 px-10 py-10">
                      <button
                        className="px-10 py-1 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
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
        </div>
        </div>
      
    </>
  );
};

export default ServicePage;
