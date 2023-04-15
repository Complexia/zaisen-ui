// components/PromotionForm.tsx
import { useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskSDK from "@metamask/sdk";

import { useSelector } from "react-redux";
import { PromosMainABI } from '../abis/promotionMainABI';
import Link from 'next/link';


const PromotionForm = () => {
  let accountFrom: any = useSelector((state: any) => state.account.account);
  let accountTo: any = "sdsd";
  let abi: any = PromosMainABI();
  let functionName = "createPromotion"

  let _params = [44787, 3, "hsdh", "0x740e65d093db34a7ffbb144a2caff7489eb10ba4"];

  //let response = callFunction(accountFrom, accountTo, abi, functionName, _params, 12);
  //console.log(response)
  const [step, setStep] = useState(1);
  const [params, setParams] = useState<any>({
    name: '',
    description: '',
    numberOfClaims: '',
    sismoGroupId: '',
  });

  const handleInputChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log(params);
    
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Name of Promotion:</label>
            <input
              type="text"
              name="name"
              value={params.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Description of Promotion:</label>
            <input
              type="text"
              name="description"
              value={params.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Number of Claims:</label>
            <input
              type="text"
              name="numberOfClaims"
              value={params.numberOfClaims}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 4:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Sismo Group ID (Optional):</label>
            <input
              type="text"
              name="sismoGroupId"
              value={params.sismoGroupId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
      {renderStep()}
      <div className="mt-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Next
          </button>
        ) : (

        
            //js object declare here
            <>
            {(() => {
                

                const href = {
                    pathname: '/create',
                    query: params,
                    as: `/create?${new URLSearchParams(params).toString()}`,
                };
                
                return (
                    <Link href={href}>
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Submit
                        </button>
                    </Link>
                );
              })()}

          
          </>
        )}
      </div>
    </div>
  );
};

const CreatePromotion = () => {
    return (
        <div className='h-screen text-black font-bold'>
            <PromotionForm />
        </div>
    )
}

export default CreatePromotion;
