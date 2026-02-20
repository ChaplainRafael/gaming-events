export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
  {
    image: "/images/event1.webp",
    title: "Fortnite World Cup 2025",
    slug: "fortnite-world-cup-2025",
    location: "New York, NY, USA",
    date: "2025-07-25",
    time: "12:00 PM",
  },
  {
    image: "/images/event2.webp",
    title: "League of Legends Championship 2026",
    slug: "lol-championship-2026",
    location: "Los Angeles, CA, USA",
    date: "2026-10-15",
    time: "05:00 PM",
  },
  {
    image: "/images/event3.webp",
    title: "Dota 2 International 2025",
    slug: "dota2-international-2025",
    location: "Seattle, WA, USA",
    date: "2025-08-15",
    time: "03:00 PM",
  },
  {
    image: "/images/event4.webp",
    title: "Overwatch League Finals 2025",
    slug: "overwatch-league-finals-2025",
    location: "Dallas, TX, USA",
    date: "2025-09-10",
    time: "07:00 PM",
  },
  {
    image: "/images/event5.webp",
    title: "PUBG Global Championship 2026",
    slug: "pubg-global-championship-2026",
    location: "Berlin, Germany",
    date: "2026-11-20",
    time: "01:00 PM",
  },
  {
    image: "/images/event6.webp",
    title: "Call of Duty League Championship 2026",
    slug: "cod-league-championship-2026",
    location: "Toronto, Canada",
    date: "2026-12-05",
    time: "04:00 PM",
  },
  {
    image: "/images/events-full.png",
    title: "Esports Festival 2026",
    slug: "esports-festival-2026",
    location: "Singapore",
    date: "2026-09-30",
    time: "10:00 AM",
  },
];

export default events;