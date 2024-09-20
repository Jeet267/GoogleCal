import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-full md:w-64 lg:w-64 m-auto mx-auto">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
