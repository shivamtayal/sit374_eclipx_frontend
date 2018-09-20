import React from "react";
import namor from "namor";
import "./searchVehicle.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newVehicle = () => {
  const activeChance = Math.random();
  return {
    businessUnit: namor.generate({ words: 1, numbers: 0 }),
    VIN: namor.generate({ words: 1, numbers: 0 }),
    make: namor.generate({ words: 1, numbers: 0 }),
    model: namor.generate({ words: 1, numbers: 0 }),
    manufacturer: namor.generate({ words: 1, numbers: 0 }),
    campaign: namor.generate({ words: 1, numbers: 0 }),
    vin: namor.generate({ words: 1, numbers: 0 }),
    registration: namor.generate({ words: 1, numbers: 0 }),
    recallslinked: Math.floor(Math.random() * 100),
    active:
      activeChance > 0.3
        ? "yes"
        : "no"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newVehicle(),
      children: range(10).map(newVehicle)
    };
  });
}

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
