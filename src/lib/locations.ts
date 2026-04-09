export type Location = {
  slug: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  neighborhood: string;
};

export const locationList: Location[] = [
  {
    slug: "imperial",
    name: "Imperial Hwy (Main Office)",
    address: "1601 East Imperial Hwy, Los Angeles, CA 90059",
    phone: "(323) 892-2520",
    hours: "Mon–Fri 9am–6pm · Sat 10am–4pm",
    neighborhood: "Los Angeles",
  },
  {
    slug: "mlk-103rd",
    name: "MLK Jr Plaza · 103rd Street",
    address: "1601 East 103rd Street, Los Angeles, CA 90002",
    phone: "(323) 892-0205",
    hours: "Mon–Fri 9am–6pm · Sat 10am–4pm",
    neighborhood: "Watts",
  },
  {
    slug: "gage",
    name: "Gage Office",
    address: "6212 S Vermont Ave, Los Angeles, CA 90044",
    phone: "(323) 982-7929",
    hours: "Mon–Fri 9am–6pm · Sat 10am–4pm",
    neighborhood: "South LA",
  },
  {
    slug: "compton",
    name: "Compton",
    address: "623 S Long Beach Blvd, Compton, CA 90221",
    phone: "(323) 982-7929",
    hours: "Mon–Fri 9am–6pm · Sat 10am–4pm",
    neighborhood: "Compton",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    address: "1252 Long Beach Blvd, Long Beach, CA 90813",
    phone: "(562) 242-0165",
    hours: "Mon–Fri 9am–6pm · Sat 10am–4pm",
    neighborhood: "Long Beach",
  },
];
