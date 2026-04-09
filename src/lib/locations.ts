export type Location = {
  slug: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  neighborhood: string;
  managerEmail: string;
};

export const locationList: Location[] = [
  {
    slug: "imperial",
    name: "Imperial Hwy (Main Office)",
    address: "1601 East Imperial Hwy, Los Angeles, CA 90059",
    phone: "(323) 892-2520",
    hours: "Mon–Fri 10am–6pm · Sat 11am–4pm · Sun Closed",
    neighborhood: "Los Angeles",
    managerEmail: "teddy@benjamintaxes.com",
  },
  {
    slug: "mlk-103rd",
    name: "MLK Jr Plaza · 103rd Street",
    address: "1601 East 103rd Street, Los Angeles, CA 90002",
    phone: "(323) 892-0205",
    hours: "Mon–Fri 10am–6pm · Sat 11am–4pm · Sun Closed",
    neighborhood: "Watts",
    managerEmail: "teddy@benjamintaxes.com",
  },
  {
    slug: "gage",
    name: "Gage Office",
    address: "6212 S Vermont Ave, Los Angeles, CA 90044",
    phone: "(323) 982-7929",
    hours: "Mon–Fri 10am–6pm · Sat 11am–4pm · Sun Closed",
    neighborhood: "South LA",
    managerEmail: "Sammy@benjamintaxes.com",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    address: "1252 Long Beach Blvd, Long Beach, CA 90813",
    phone: "(562) 242-0165",
    hours: "Mon–Fri 10am–6pm · Sat 11am–4pm · Sun Closed",
    neighborhood: "Long Beach",
    managerEmail: "Yonas@benjamintaxes.com",
  },
];
