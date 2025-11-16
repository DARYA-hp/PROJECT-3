
import { GiCheckMark } from "react-icons/gi";

function ProDesc() {
  const check = [
    { icon: <GiCheckMark />, text: "2 Stories" },
    { icon: <GiCheckMark />, text: "Central Heating" },
    { icon: <GiCheckMark />, text: "Fire Place" },
    { icon: <GiCheckMark />, text: "Lawn" },
    { icon: <GiCheckMark />, text: "Bike Path" },
    { icon: <GiCheckMark />, text: "Dual Sinks" },
    { icon: <GiCheckMark />, text: "Home Theater" },
    { icon: <GiCheckMark />, text: "Marble Floors" },
    { icon: <GiCheckMark />, text: "Central Cooling" },
    { icon: <GiCheckMark />, text: "Electric Range" },
    { icon: <GiCheckMark />, text: "Laundry Room" },
    { icon: <GiCheckMark />, text: "Swimming Pool" },
  ];

  return (
    <>
      <div className="pl-28 pt-14">
        <p className="text-[#1DAEFF] text-[21px] font-[600]">Description</p>
        <p className="pt-8 leading-[1.5] w-[873px] text-[16px] text-[#585981A6] dark:text-gray-300 font-[400]">
          Enchanting three bedroom, three bath home with spacious one bedroom,
          one bath cabana, in-laws quarters. Charming living area features
          fireplace and fabulous art deco details. Formal dining room.
          Remodelled kitchen with granite white cabinetry and stainless
          appliances. Lovely master bedroom has updated bath, beautiful view
          of the pool. Guest bedrooms have walk-in, cedar closets. Delightful
          backyard; majestic oaks surround the free form pool and expansive
          patio, wet bar and grill. Enchanting three bedroom,
        </p>
      </div>

      <div className="pl-28 pt-12">
        <div className="grid grid-cols-3 gap-y-6 w-[905px]">
          {check.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#3A3A60] dark:text-gray-200 text-[16px]"
            >
              <span className="text-[#1DAEFF] font-[800] text-[15px]">
                {item.icon}
              </span>
              <p className="font-[500] text-[#585981DE] dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProDesc;
