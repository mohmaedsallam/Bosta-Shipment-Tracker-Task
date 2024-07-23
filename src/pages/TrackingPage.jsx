import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchShipment } from "../redux/shipmentSlice";
import ShipmentStatus from "../components/ShipmentStatus";
import DeliveryAddress from "../components/DeliveryAddress";
import ShipmentDetails from "../components/ShipmentDetails";

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const {
    data: shipmentData,
    status,
    error,
  } = useSelector((state) => state.shipment);

  const handleTracking = () => {
    dispatch(fetchShipment(trackingNumber));
  };

  return (
    <div className="my-8">
      <div className="flex mb-8">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder={t("trackingNumber")}
          className={` ${
            i18n.language === "en" ? `rounded-l-md` : `rounded-r-md`
          } flex-grow p-2 text-lg border border-[#e4e7ec] shadow-sm focus:outline-[#d6eff2]`}
        />
        <button
          onClick={handleTracking}
          className={` ${
            i18n.language === "en" ? `rounded-r-md` : `rounded-l-md`
          } px-6 py-2 text-lg text-white shadow-sm bg-bosta-red  hover:bg-red-700 transition-all`}
        >
          {t("trackShipment")}
        </button>
      </div>
      {status === "loading" && <p>{t("loading")}</p>}
      {status === "failed" && <p>{t("error", { error })}</p>}
      {status === "succeeded" && shipmentData && (
        <>
          <ShipmentStatus
            currentStatus={shipmentData.CurrentStatus.state}
            promisedDate={shipmentData.PromisedDate}
            trackingNumber={shipmentData.TrackingNumber}
            lastUpdate={shipmentData.CreateDate}
            // className="col-span-3 row-span-2"
          />
          <div className="grid grid-cols-3 gap-3">
            <ShipmentDetails
              events={shipmentData.TransitEvents}
              className=" col-span-3 lg:col-span-2"
            />
            <DeliveryAddress
              address={shipmentData.address}
              className=" col-span-3 lg:col-span-1"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TrackingPage;
