/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import problemImage from "../assets/shrug-concept-illustration.png"; // Adjust the import path as necessary

const DeliveryAddress = ({ address, className }) => {
  const { t } = useTranslation();

  return (
    <div className={`bg-white ${className} `}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {t("deliveryAddress")}
      </h3>
      <div className="border border-[#e4e7ec] shadow-sm rounded-lg p-4 mb-6">
        <p className="text-base text-gray-600">{t("address")}</p>
      </div>
      <div className="border border-[#e4e7ec] shadow-sm rounded-lg p-5 flex justify-between items-center	">
        <img src={problemImage} alt="Having problem" className="w-16 h-16" />
        <div className="justify-center items-center ">
          <p className=" text-gray-800 text-sm font-bold mb-2">
            {t("havingProblem")}
          </p>
          <button className="px-4 py-2 w-full   text-white rounded-md bg-bosta-red  hover:bg-red-700 transition-all">
            {t("reportProblem")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
