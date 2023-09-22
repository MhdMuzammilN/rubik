import React from "react";
import lg from "../assets/companylogos/LG.png";
import samsung from "../assets/companylogos/Samsung.png";
import butterfly from "../assets/companylogos/Butterfly.png";
import sujata from "../assets/companylogos/sujata.png";
import acer from "../assets/companylogos/Acer.png";
import crompton from "../assets/companylogos/Crompton.png";
import havells from "../assets/companylogos/Havells.png";
import lloyd from "../assets/companylogos/Lloyd.png";
import daikin from "../assets/companylogos/Daikin.png";
import philips from "../assets/companylogos/Philips.png";
import jvc from "../assets/companylogos/JVC.png";
import toshiba from "../assets/companylogos/Toshiba.png";

const CompanyLogos = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <div class="flex items-center lg:justify-center">
            <img src={lg} class="filter-none  hover:filter grayscale" alt="lg" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={samsung} class="filter-none  hover:filter grayscale" alt="samsung" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={butterfly} class="filter-none  hover:filter grayscale" alt="butterfly" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={sujata} class="filter-none  hover:filter grayscale" alt="sujata" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={acer} class="filter-none  hover:filter grayscale" alt="acer" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={crompton} class="filter-none  hover:filter grayscale" alt="crompton" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={havells} class="filter-none  hover:filter grayscale" alt="havells" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={lloyd} class="filter-none  hover:filter grayscale" alt="lloyd" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={daikin} class="filter-none  hover:filter grayscale" alt="daikin" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={philips} class="filter-none  hover:filter grayscale" alt="philips" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={jvc} class="filter-none  hover:filter grayscale" alt="jvc" />
          </div>
          <div class="flex items-center lg:justify-center">
            <img src={toshiba} class="filter-none  hover:filter grayscale" alt="toshiba" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
