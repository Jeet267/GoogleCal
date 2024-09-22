import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-5 py-6 flex justify-around items-center gap-4">
      <img src={logo} alt="calendar" className="w-10 h-10" />
      <h1 className=" text-xl text-blue-500 font-bold">Calendar</h1>

      <div className="flex items-center gap-4">
        {/* Add Clerk Authentication */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Calendar Controls */}
        <button onClick={handleReset} className="border square py-6 px-6">
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-blue-600">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-blue-600">
            chevron_right
          </span>
        </button>
      </div>

      {/* Display Current Month and Year */}
      <h2 className="hidden md:ml-4 md:text-xl md:text-gray-500 md:font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
