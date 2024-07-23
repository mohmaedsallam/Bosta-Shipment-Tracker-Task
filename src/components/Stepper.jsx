// /* eslint-disable react/prop-types */
// import { useTranslation } from "react-i18next";
// import {
//   CheckIcon,
//   UserIcon,
//   TruckIcon,
//   HomeIcon,
// } from "@heroicons/react/24/outline";
// import "./stepper.css";
// export function StepperWithContent({ currentStatus }) {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   const steps = [
//     { label: t("TICKET_CREATED"), icon: HomeIcon },
//     { label: t("DELIVERED_TO_SENDER"), icon: TruckIcon },
//     { label: t("PACKAGE_RECEIVED"), icon: TruckIcon },
//     { label: t("DELIVERED"), icon: UserIcon },
//   ];

//   const getActiveStep = () => {
//     switch (currentStatus) {
//       case "CREATED":
//         return 0;
//       case "DELIVERED_TO_SENDER":
//         return 1;
//       case "DELIVERED":
//         return 3;
//       case "CANCELLED":
//         return -1;
//       default:
//         return 2;
//     }
//   };

//   const activeStep = getActiveStep();

//   const getStatusColor = () => {
//     switch (currentStatus) {
//       case "DELIVERED":
//         return "green-500";
//       case "CANCELLED":
//         return "red-500";
//       case "DELIVERED_TO_SENDER":
//         return "yellow-500";
//       default:
//         return "bosta-red";
//     }
//   };

//   const statusColor = getStatusColor();

//   return (
//     <div className={`w-full px-4 py-8 ${isRTL ? "rtl" : "ltr"} font-cairo`}>
//       <div className="relative flex items-center justify-between w-full">
//         <div
//           className={` absolute  top-2/4 h-0.5 w-[87%] md:w-[90%] lg:w-[92%] xl:w-[95%] -translate-y-2/4 bg-gray-300 ${
//             isRTL ? "right-4" : "left-4"
//           }`}
//         ></div>
//         <div
//           className={`absolute ${
//             isRTL ? "right-0" : "left-0"
//           } top-2/4 h-0.5 -translate-y-2/4 transition-all duration-500 bg-${statusColor}`}
//           style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
//         ></div>
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={` relative flex flex-col items-center justify-between top-3 ${
//               isRTL ? "right-[-30px]" : "left-[-28px]"
//             }`}
//           >
//             <div
//               className={` relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300   ${
//                 index <= activeStep ? `bg-${statusColor}` : "bg-gray-300"
//               } rounded-full place-items-center`}
//             >
//               {index <= activeStep ? (
//                 <CheckIcon className="w-5 h-5" />
//               ) : (
//                 <step.icon className="w-5 h-5" />
//               )}
//             </div>
//             <div className="mt-2 w-max text-center">
//               <h6
//                 className={`block font-sans text-xs antialiased font-semibold leading-relaxed tracking-normal ${
//                   index <= activeStep ? `text-${statusColor}` : "text-gray-500"
//                 }`}
//               >
//                 {step.label}
//               </h6>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import {
  CheckIcon,
  UserIcon,
  TruckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import "../index.css";
export function StepperWithContent({ currentStatus }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const steps = [
    { label: t("TICKET_CREATED"), icon: HomeIcon },
    { label: t("DELIVERED_TO_SENDER"), icon: TruckIcon },
    { label: t("PACKAGE_RECEIVED"), icon: TruckIcon },
    { label: t("DELIVERED"), icon: UserIcon },
  ];

  const getActiveStep = () => {
    switch (currentStatus) {
      case "CREATED":
        return 0;
      case "DELIVERED_TO_SENDER":
        return 1;
      case "DELIVERED":
        return 3;
      case "CANCELLED":
        return -1;
      default:
        return 2;
    }
  };

  const activeStep = getActiveStep();

  const getStatusColor = () => {
    switch (currentStatus) {
      case "DELIVERED":
        return "green-500";
      case "CANCELLED":
        return "red-500";
      case "DELIVERED_TO_SENDER":
        return "yellow-500";
      default:
        return "bosta-red";
    }
  };

  const statusColor = getStatusColor();

  return (
    <div
      className={`w-[87%] md:w-[90%] lg:w-[92%] xl:w-[95%] px-4 py-8  ${
        isRTL ? "rtl" : "ltr"
      } font-cairo`}
    >
      <div className="relative flex items-center justify-between ">
        <div
          className={`absolute top-2/4 h-0.5 w-[87%] md:w-[90%] lg:w-[92%] xl:w-[95%] -translate-y-2/4 bg-gray-300 ${
            isRTL ? "right-4" : "left-4"
          }`}
        ></div>
        <div
          className={`absolute ${
            isRTL ? "right-0" : "left-0"
          } top-2/4 h-0.5 -translate-y-2/4 transition-all duration-500 bg-yellow bg-${statusColor}`}
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-between top-3 ${
              isRTL ? "right-[-30px]" : "left-[-28px]"
            }`}
          >
            <div
              className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 ${
                index <= activeStep ? `bg-${statusColor}` : "bg-gray-300"
              } rounded-full place-items-center`}
            >
              {index <= activeStep ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>
            <div className="mt-2 w-max text-center">
              <h6
                className={`  block   text-xs antialiased font-semibold leading-relaxed tracking-normal ${
                  index <= activeStep ? `text-${statusColor}` : "text-gray-500"
                }`}
              >
                {step.label}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
