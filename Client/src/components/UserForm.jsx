import React, { useState } from "react";
export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.fullName || "");
  const [age, setAge] = useState(user?.age || "");
  const [periodCycle, setPeriodCycle] = useState(user?.periodCycle || "");
  const [lastPeriod, setLastPeriod] = useState(user?.lastPeriod || "");
  const [weight, setWeight] = useState(user?.weight || "");

  function handleDetailsChange(propName, value) {
    if (propName === "age") setAge(value);
    if (propName === "periodCycle") setPeriodCycle(value);
    if (propName === "lastPeriod") setLastPeriod(value);
    if (propName === "weight") setWeight(value);
  }

  return (
    <div>
      <form
        className=""
        onSubmit={(e) =>
          onSave(e, {
            name: userName,
            age,
            periodCycle,
            weight,
            lastPeriod,
          })
        }
      >
        <label>
          First and Last name
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            disabled={true}
            value={user?.email}
            placeholder={user?.email}
          />
        </label>

        <label>
          Cycle Length
          <input
            type="text"
            value={periodCycle}
            onChange={(e) => handleDetailsChange("periodCycle", e.target.value)}
          />
        </label>

        <label>
          Last Period
          <input
            type="date"
            value={lastPeriod}
            onChange={(e) => handleDetailsChange("lastPeriod", e.target.value)}
          />
        </label>

        <label>
          Weight
          <input
            type="number"
            value={weight}
            onChange={(e) => handleDetailsChange("weight", e.target.value)}
          />
        </label>

        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => handleDetailsChange("age", e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="my-2 w-full px-6 py-3 bg-primary500 text-white rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}
