import React from "react";

const MoreInformationCard = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

   
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="px-4 sm:px-0">
      <h1 className="text-xl font-semibold leading-7 text-[#044389]">MORE INFORMATION FOR CITY 🏙️</h1>
      <p className="mt-1 max-w-2xl text-sm font-semibold leading-6 text-[#015239]">More details to ensure this is the city that you want!</p>
    </div>
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]">Crime Rate 🚫:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">percentage/score</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]"> Walk Score:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">Yes or No</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]"> Transit Score:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">Yes or No</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]"> Bike Score:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">Yes or No</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]">Weather: </dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">lowest temperature: _____
          <br />
          average temperature: _____
          <br />
          highest temperature: _____
          
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]">City Description:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
        </div>
      </dl>
    </div>
    </div>
  </div>







  );
};

export default MoreInformationCard;
