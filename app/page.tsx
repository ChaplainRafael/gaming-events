import ExploreBtn from "@/components/ExploreBtn"
import events from "@/lib/constants"
import EventCard from "@/components/EventCard"

const page = () => {
  return (
    <section>
      <h1 className="text-center">The hub for every gaming event you cant miss</h1>
      <p className="text-center mt-5">all the events you should grind</p>
    
    <ExploreBtn/>

    <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
    </section>
  )
}

export default page
