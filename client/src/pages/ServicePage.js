import { useState } from "react";

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
  ];
  products = products.sort();

  let ProductsUpper = products.map(
    (product) => {
    return product.toUpperCase();
  });
  //console.log(ProductsUpper)

  const [customer,setCustomer] = useState('') 
  const [phone,setPhone] = useState('')
  const [brand,setBrand] = useState(null)
  const [product,setProduct] = useState(null)
  console.log(customer)
  console.log(phone)
  console.log(brand)
  console.log(product)
  const Submit = (e)=>{
    
    
  
  }

  return (
    <div className="flex bg-[#edf2f4] m-5 md:flex-row justify-around max-sm:flex-col p-3 rounded-lg">
      <div className="relative">
        <div className="md:text-lg sm:max:text-sm sm:max:text-left inset-0">
          We provide top-notch service for quality electronics devices...{" "}
        </div>
        {/* <div className="md:text-lg sm:max:text-sm sm:max:text-left" >We provide top-notch service for quality electronics devices... </div> */}
      </div>

      <div className="overflow-auto p-10">
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
            onChange={(e)=>{setCustomer(e.target.value)}}
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
            onChange={(e)=>{setPhone(e.target.value)}}
          />

          <label for="cname" className="pt-3">
            Brand:
          </label>
          <br />
          <select
            className="focus:bg-[#d9d9d9] rounded-sm border-[#2b2d42] ring-1 ring-blue-500"
            name="brand"
            id="brand"
            onChange={(e)=>{setBrand(e.target.value)}}
          >
            <option value="">Pick your brand</option>
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
            name="produtc"
            id="product"
            onChange={(e)=>{setProduct(e.target.value)}}
          >
            <option value="">Pick your Product</option>
            {ProductsUpper.map((product) => (
              <option value={product}>{product}</option>
            ))}
          </select>

          <div className="flex items-center justify-center pt-4 ">
          <button className="bg-violet-600 hover:bg-[#06d6a0] rounded-md border-md flex items-center justify-center w-40 h-10" 
          onClick={Submit()}>Submit</button>

          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
