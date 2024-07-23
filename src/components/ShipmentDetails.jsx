/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

const ShipmentDetails = ({ events, className }) => {
  const { i18n, t } = useTranslation();

  return (
    <div className={`bg-white  ${className}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {t("shipmentDetails")}
      </h3>
      <div className={`  border border-[#e4e7ec] shadow-sm rounded-lg  `}>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th
                className={`${
                  i18n.language === "en" ? "text-left" : "text-right"
                } p-2 text-slate-600`}
              >
                {t("branch")}
              </th>
              <th
                className={`${
                  i18n.language === "en" ? "text-left" : "text-right"
                } p-2 text-slate-600`}
              >
                {t("date")}
              </th>
              <th
                className={`${
                  i18n.language === "en" ? "text-left" : "text-right"
                } p-2 text-slate-600`}
              >
                {t("time")}
              </th>
              <th
                className={`${
                  i18n.language === "en" ? "text-left" : "text-right"
                } p-2 text-slate-600`}
              >
                {t("details")}
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2">{t(event.hub) || t("unknown")}</td>
                <td className="p-2">
                  {new Date(event.timestamp).toLocaleDateString()}
                </td>
                <td className="p-2">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </td>
                <td className="p-2">
                  {t(event.state)}
                  <br />
                  {event.reason && ` (${t(event.reason)})`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentDetails;
