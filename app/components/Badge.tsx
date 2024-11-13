import React from "react";

const Badge = ({ bg, text }: { bg: string; text: string }) => {
  const textColor = getTextColor(bg);
  //   console.log(textColor);
  return (
    <div
      className={`text-xs  font-bold  w-fit px-2 rounded-md  ${textColor} ${bg}`}
    >
      {text}
    </div>
  );
};
const getTextColor = (bg: string) => {
  const mapped = bg.replace("bg", "text");

  const textcolor = mapped.replace("-100", "-500");
  console.log(textcolor);
  return textcolor;
};

export default Badge;
