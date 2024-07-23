/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

// import { useTranslation } from "react-i18next";
// import { StepperWithContent } from "./Stepper";

// const ShipmentStatus = ({
//   currentStatus,
//   promisedDate,
//   trackingNumber,
//   lastUpdate,
// }) => {
//   const { t } = useTranslation();

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "DELIVERED":
//         return "text-green-500";
//       case "CANCELLED":
//         return "text-bosta-red";
//       case "DELIVERED_TO_SENDER":
//         return "text-yellow-600";
//       default:
//         return "text-bosta-red";
//     }
//   };

//   return (
//     <div className="flex flex-col border border-[#e4e7ec] shadow-sm rounded-lg p-6 mb-6">
//       <div className="flex lg:flex-row flex-col justify-between items-start mb-4 gap-4">
//         <div className="flex-2 flex flex-col justify-between items-start gap-1">
//           <span className="text-[13px] font-medium text-[#667085]">
//             {t("shipmentNumber")} {trackingNumber}
//           </span>
//           <span
//             className={`text-lg font-bold ${getStatusClass(currentStatus)}`}
//           >
//             {t(currentStatus)}
//           </span>
//         </div>
//         <div className="flex-1 flex  justify-around  gap-10">
//           <div>
//             <div className="text-[13px] text-[#667085] mb-1">
//               {t("lastUpdate")}
//             </div>
//             <div className="text-base font-bold text-gray-800">
//               {new Date(lastUpdate).toLocaleDateString()}
//             </div>
//           </div>
//           <div>
//             <div className="text-[13px] text-[#667085] mb-1">
//               {t("merchantName")}
//             </div>
//             <div className="text-base font-bold text-gray-800">SOUQ.COM</div>
//           </div>
//           <div>
//             <div className="text-[13px] text-[#667085] mb-1">
//               {t("deliveryTime")}
//             </div>
//             <div className="text-base font-bold text-gray-800">
//               {new Date(promisedDate).toLocaleDateString()}
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <StepperWithContent currentStatus={currentStatus} />
//     </div>
//   );
// };

// export default ShipmentStatus;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { StepperWithContent } from "./Stepper";

const ShipmentStatus = ({
  currentStatus,
  promisedDate,
  trackingNumber,
  lastUpdate,
}) => {
  const { t } = useTranslation();

  const getStatusClass = (status) => {
    switch (status) {
      case "DELIVERED":
        return "text-green-500";
      case "CANCELLED":
        return "text-bosta-red";
      case "DELIVERED_TO_SENDER":
        return "text-yellow-600";
      default:
        return "text-bosta-red";
    }
  };

  return (
    <div className="flex flex-col border border-[#e4e7ec] shadow-sm rounded-lg p-6 mb-6">
      <div className="flex lg:flex-row flex-col justify-between items-start mb-4 gap-4">
        <div className="flex-2 flex flex-col justify-between items-start gap-1">
          <span className="text-[13px] font-medium text-[#667085]">
            {t("shipmentNumber")} {trackingNumber}
          </span>
          <span
            className={`text-lg font-bold ${getStatusClass(currentStatus)}`}
          >
            {t(currentStatus)}
          </span>
        </div>
        <div className="flex-1 flex justify-around gap-10">
          <div>
            <div className="text-[13px] text-[#667085] mb-1">
              {t("lastUpdate")}
            </div>
            <div className="text-base font-bold text-gray-800">
              {new Date(lastUpdate).toLocaleDateString()}
            </div>
          </div>
          <div>
            <div className="text-[13px] text-[#667085] mb-1">
              {t("merchantName")}
            </div>
            <div className="text-base font-bold text-gray-800">SOUQ.COM</div>
          </div>
          <div>
            <div className="text-[13px] text-[#667085] mb-1">
              {t("deliveryTime")}
            </div>
            <div className="text-base font-bold text-gray-800">
              {new Date(promisedDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <StepperWithContent currentStatus={currentStatus} />
    </div>
  );
};

export default ShipmentStatus;
