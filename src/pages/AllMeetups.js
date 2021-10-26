import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch("https://dgs-dev.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for(const key in data){
          const meetup = {
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setloadedMeetups(meetups);
      });

  },[]);

if (isLoading) {
  return <section>
    <p>Loading...</p>
  </section>
  
}

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupPage;
