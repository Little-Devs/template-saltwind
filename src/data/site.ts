export const site = {
  id: "saltwind-inn",
  name: "Saltwind Inn",
  place: "Port Campbell hinterland · Shipwreck Coast · Victoria",
  meta: {
    title: "Saltwind Inn — Eleven rooms on the Shipwreck Coast",
    description:
      "Eleven rooms in a 1928 timber house in the Port Campbell hinterland, restored 2022. Sourdough breakfasts, a tide board by the door, Gibson Steps and hinterland walks. No spa — the coast does that work.",
  },
  logo: {
    text: "Saltwind Inn",
    mark: "SI",
    sub: "Port Campbell",
  },
  fonts: {
    display: "Instrument Serif",
    ui: "Outfit",
  },
  colors: {
    salt: "#f3eee6",
    ink: "#1c2422",
    kelp: "#2f5e4e",
    rust: "#b85c38",
    dusk: "#3d4a6b",
    foam: "#fffcf7",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+61 3 5550 1840",
    phoneHref: "tel:+61355501840",
    address: "40 Saltwind Track, Port Campbell VIC 3269",
  },
  sections: {
    hero: true,
    rooms: true,
    table: true,
    coast: true,
    stay: true,
    contact: true,
  },
  nav: [
    { href: "#rooms", label: "Rooms", section: "rooms" as const },
    { href: "#table", label: "The Table", section: "table" as const },
    { href: "#coast", label: "Coast", section: "coast" as const },
    { href: "#stay", label: "Stay", section: "stay" as const },
    { href: "#contact", label: "Enquire", section: "contact" as const },
  ],
  hero: {
    kicker: "Port Campbell · Victoria",
    title: "Eleven rooms in a 1928 timber house, three minutes from the sea.",
    lead:
      "Saltwind is an inn, not a resort. Breakfast at the long table, a tide board by the front door, and the swell forecast read aloud before anyone decides anything.",
    weather: "This morning — W 22 kn, gusting 34 · swell 2.4 m at 12 s · water 14 °C",
    primaryCta: { label: "See the rooms", href: "#rooms" },
    secondaryCta: { label: "Write for dates", href: "mailto:sales@little.cloud" },
    facts: [
      { value: "11", label: "rooms in the old house" },
      { value: "1928", label: "timber, restored 2022" },
      { value: "0", label: "spas on the premises" },
    ],
  },
  rooms: {
    kicker: "Sleep",
    title: "Named for the coves, not the market",
    intro:
      "Every room looks somewhere real — a gorge, a river mouth, the paddock that runs to the clifftop. Linen sheets, wool blankets for the southerly change, and windows that open onto weather.",
    note: "Five more rooms sit along the back verandah — write and we'll match the cove to your week.",
    items: [
      {
        name: "Loch Ard",
        kind: "Queen double",
        aspect: "Front corner · gorge light",
        note: "The corner room with the good light. Iron bed, writing table, and the shipwreck coast doing its slow work outside.",
        tone: "lochard",
        bed: "left",
      },
      {
        name: "Gibson",
        kind: "Queen double",
        aspect: "Seaward · steps track",
        note: "Named for the staircase below. You can count the swell sets from the window and decide about swimming over a second coffee.",
        tone: "gibson",
        bed: "top",
      },
      {
        name: "Sherbrook",
        kind: "Twin",
        aspect: "Garden side · quiet",
        note: "Two singles for sisters, fathers, and long readers. Looks down the orchard to the paddock the cattle swap in autumn.",
        tone: "sherbrook",
        bed: "right",
      },
      {
        name: "Muttonbird",
        kind: "Attic double",
        aspect: "Under the eaves · dark skies",
        note: "Up with the shearwaters. Small, warm, and the best window for the Milky Way from roughly October on.",
        tone: "muttonbird",
        bed: "top",
      },
      {
        name: "Curdies",
        kind: "King, sofa bed",
        aspect: "River side · largest",
        note: "The big room, after the river mouth. Fits a family of four and everyone's wet towels without complaint.",
        tone: "curdies",
        bed: "left",
      },
      {
        name: "Grotto",
        kind: "Single",
        aspect: "Back wing · writers' pick",
        note: "A narrow room with a deep window and a shelf that has held a lot of notebooks. Rust-coloured light in the afternoon.",
        tone: "grotto",
        bed: "bottom",
      },
    ],
  },
  table: {
    kicker: "The Table",
    title: "Sourdough first, then whatever the boats ran",
    intro:
      "Breakfast is for guests, cooked to order at the long table on the first floor. There is no restaurant and no room service — the day starts once, together, and then everyone goes outside.",
    service: [
      { label: "Long table", value: "7:30 – 9:30, first floor" },
      { label: "Picnic box", value: "$18 — bread, fruit, a flask" },
      { label: "Dinner", value: "Port Campbell's to answer; we book you in" },
      { label: "Tea & coffee", value: "whenever you find the kettle" },
    ],
    plates: [
      {
        title: "Sourdough",
        note: "the starter came from Timboon in 2019 — baked at six, cut thick",
      },
      {
        title: "Bass Strait fish",
        note: "when the boats run — smoked, or fried in butter with wild greens",
      },
      {
        title: "Orchard fruit",
        note: "apples and pears off the hinterland, stewed or cold from the bowl",
      },
      {
        title: "Farm eggs",
        note: "scrambled soft on the end piece, salt and plenty of pepper",
      },
      {
        title: "Preserves",
        note: "quince, blackberry, green tomato — whatever put up well last season",
      },
    ],
  },
  coast: {
    kicker: "The Coast",
    title: "Walks, tides, and weather off the Southern Ocean",
    manifesto:
      "The house sits in the hinterland above Port Campbell. The clifftop track starts behind the orchard, Gibson Steps are down the road, and the night sky is the point of the whole place. There is no spa — there is a coast, and it is better at the job.",
    walks: [
      { name: "Gibson Steps", note: "86 stairs down to the beach — swimmable on quiet days" },
      { name: "Discovery Walk", note: "the clifftop loop into town, 4.5 km, wind-scoured" },
      { name: "Timboon rail trail", note: "hinterland kilometres through dairy country, distillery at the end" },
      { name: "Night sky", note: "no streetlights past the gate; the Milky Way does the rest" },
    ],
    weather: {
      heading: "This morning",
      rows: [
        { label: "Wind", value: "W 22 kn, gusting 34" },
        { label: "Swell", value: "2.4 m at 12 s, from 215°" },
        { label: "Water", value: "14 °C — wetsuit weather" },
        { label: "Swim call", value: "under a metre, and only then" },
      ],
      note: "The board at the front door is rewritten whenever the wind turns.",
    },
    tides: {
      heading: "Tides at Gibson Steps — this week",
      note: "Chalked up in the hall each Sunday. † runs past midnight.",
      days: [
        { day: "Mon", tides: [["H", "01:58"], ["L", "08:09"], ["H", "14:20"], ["L", "20:31"]] },
        { day: "Tue", tides: [["H", "02:47"], ["L", "08:58"], ["H", "15:09"], ["L", "21:20"]] },
        { day: "Wed", tides: [["H", "03:36"], ["L", "09:47"], ["H", "15:58"], ["L", "22:09"]] },
        { day: "Thu", tides: [["H", "04:25"], ["L", "10:37"], ["H", "16:47"], ["L", "22:58"]] },
        { day: "Fri", tides: [["H", "05:14"], ["L", "11:26"], ["H", "17:36"], ["L", "23:47"]] },
        { day: "Sat", tides: [["H", "06:03"], ["L", "12:15"], ["H", "18:25"], ["L", "00:36†"]] },
        { day: "Sun", tides: [["H", "06:52"], ["L", "13:05"], ["H", "19:14"], ["L", "01:25†"]] },
      ],
    },
  },
  stay: {
    kicker: "Stay",
    title: "Seasonal rates, and how the house runs",
    rates: {
      note: "Per room, per night, two guests, breakfast in. Australian dollars. Write for single nights, longer stays, and the whole house.",
      rows: [
        { season: "Winter", dates: "Jun – Aug", range: "$180 – $260" },
        { season: "Shoulder", dates: "Sep – Nov", range: "$220 – $320" },
        { season: "Summer", dates: "Dec – Feb", range: "$290 – $420" },
        { season: "Easter & long weekends", dates: "by enquiry", range: "from $360" },
      ],
    },
    rules: [
      "Check-in from 3 pm. The track is gravel — drive it slow.",
      "Two-night minimum on summer weekends.",
      "Quiet after 10:30 — the walls are 1928 hoop pine.",
      "Dogs by arrangement; there are sheep on the back boundary.",
      "Swimming only when the swell allows. Ask at breakfast.",
      "No spa, no gym, no minibar. There is a verandah, a record player, and the coast.",
      "Paid on arrival — no deposit, no booking engine, no app.",
    ],
  },
  enquiry: {
    kicker: "Write to us",
    title: "Names, dates, and what the wind's doing",
    intro:
      "Tell us who's coming and when. We answer within a day — faster when it's blowing a gale and nobody's going out.",
    form: {
      note: "Opens your mail app, addressed to the inn.",
      fields: {
        name: "Name",
        email: "Email",
        dates: "Dates",
        datesPlaceholder: "Fri 12 – Sun 14 Sep",
        note: "Note",
        notePlaceholder: "Rooms, dogs, allergies, weather hopes…",
      },
      submit: "Send enquiry",
    },
  },
  footer: {
    tagline: "Eleven rooms on the Shipwreck Coast.",
    credit: "A Little Web Co. template",
    legal: "© 2026 Saltwind Inn · MIT licensed",
  },
} as const;

export type Site = typeof site;
