import React, { useEffect, useState } from "react";

const EventRegistration = () => {
  const [events, setEvents] = useState([
    {
      _id: "1",
      name: "Ar Rahman Musical event",
      location: "Chennai",
      imageURL:
        "https://framerusercontent.com/images/X1wW6A4rTZfAJHSqU86hbNz30.jpg",
    },
    {
      _id: "2",
      name: "Harish jeyaraj Event",
      location: "Singapore",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMo12NHsbLnpX2SYYhrT9Bo1DbVevmq7XHQ&s",
    },
    {
      _id: "3",
      name: "Aniruth Event",
      location: "Malaysia",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuWJ4zkgYvkYGISgN-CkoGfHC1Pelb45wng&s",
    },
    {
      _id: "4",
      name: "Santhosh Narayanan Event",
      location: "Chennai",
      imageURL:
        "https://th-i.thgim.com/public/entertainment/movies/sqei7u/article66562858.ece/alternates/FREE_1200/Santhosh%20Narayanan.jpg",
    },
    {
      _id: "5",
      name: "VidyaSagar Event",
      location: "Bangalore",
      imageURL: "https://i.ytimg.com/vi/jWJ3EJq4Wv0/maxresdefault.jpg",
    },
    {
      _id: "6",
      name: "Deva Music Event",
      location: "Chennai",
      imageURL:
        "https://s.yimg.com/ny/api/res/1.2/4w_YqhrWbXFAONbjUvCmTA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/mmail.com.my/93d0412ec0fd0d83bf21c706360f4bc2",
    },
    {
      _id: "7",
      name: "Yuvan sankar Event",
      location: "Singapore",
      imageURL:
        "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_760,c_fill,h_380,g_face/f_auto,w_660,c_thumb,h_380,g_west/c_crop%2Cg_custom%2Fv1708344096%2Ft93tu6cz57wscmmfiysz.jpg",
    },
  ]);

  // const [registeredEvent, SetRegisteredEvent] = useState(
  //   new Set(JSON.parse(localStorage.getItem("registeredEvent")) || [])
  // );
  // const [registeredEvents, setRegisteredEvents] = useState(
  //   new Set(JSON.parse(localStorage.getItem("registeredEvents")) || [])
  // );

  // const [registeredEvents, setRegisteredEvents] = useState(() => {
  //   const storedEvents =
  //     JSON.parse(localStorage.getItem("registeredEvents")) || [];
  //   return new Set(storedEvents);
  // });

  const storedData = localStorage.getItem("registeredEvents");
  const storedEvent = storedData ? JSON.parse(storedData) : null;

  const [registeredEvents, setRegisteredEvents] = useState(
    new Set(storedEvent || [])
  );
  console.log(registeredEvents);

  const userId = "12345";

  // useEffect(() => {
  //   if (registerEvent.size > 0) {
  //     localStorage.setItem(
  //       "registeredEvent",
  //       JSON.stringify([...registeredEvents])
  //     );
  //   }
  // }, [registeredEvents]);

  // console.log(registeredEvent);

  const registerEvent = (eventId) => {
    if (registeredEvents.has(eventId)) return;
    setRegisteredEvents((prev) => {
      const updateSet = new Set([...prev, eventId]);
      console.log(updateSet);
      localStorage.setItem("registeredEvents", JSON.stringify([...updateSet]));
      return updateSet;
    });
  };

  return (
    <div>
      <h1 className="text-2xl my-5 mx-10 font-sans text-purple-800 font-bold">
        Event Registration :
      </h1>
      <div className="grid grid-cols-5 gap-4 mx-5 my-5">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4  rounded-lg w-60 h-30 aspect-square   shadow-lg"
          >
            <img
              src={event.imageURL}
              alt={event.name}
              className="w-full h-40  object-cover rounded-lg mb-2"
            />
            <h1 className="text-[13px] text-slate-50 font-sans tracking-[2px font-bold]">
              {event.name}
            </h1>
            <p className="text-rose-600 text-[12px] my-2 rounded-full font-bold bg-[#f8d6df] w-[90px] text-center">
              {event.location}
            </p>
            <button
              onClick={() => registerEvent(event._id)}
              className={`mt-3 px-4 py-2 rounded-lg w-full  text-lime-100 font-mono font-bold ${
                registeredEvents.has(event._id)
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#060613] hover:bg-[#08081f]"
              }`}
            >
              {registeredEvents.has(event._id)
                ? "Already Registered"
                : "Register"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventRegistration;
