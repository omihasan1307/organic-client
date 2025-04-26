import React from "react";

const AdditionalInfo = () => {
  const infos = [
    { label: "Weight", value: "1kg" },
    { label: "Dimensions", value: "20 × 30 × 40 cm" },
    { label: "Materials", value: "Organic Cotton" },
    { label: "Color", value: "White, Black" },
    { label: "Size", value: "S, M, L, XL" },
  ];

  return (
    <div className="space-y-3">
      {infos.map((info, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-2"
        >
          <span className="text-gray-500 font-medium">{info.label}</span>
          <span className="text-gray-700">{info.value}</span>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInfo;
