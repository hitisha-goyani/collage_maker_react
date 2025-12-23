// // helper to create empty slots
// const makeSlots = (count) =>
//   Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     image: null
//   }));

// export const TEMPLATE_CATEGORIES = [

//   /* ================= BIRTHDAY ================= */
//   {
//   category: "Birthday 🎂",
//   templates: [

//     // SIMPLE & CLEAN
//     { id: 1, name: "Birthday Classic 4", columns: 2, slots: makeSlots(4) },

//     // SOCIAL MEDIA STYLE
//     { id: 2, name: "Birthday Party 6", columns: 3, slots: makeSlots(6) },

//     // GRID HEAVY
//     { id: 3, name: "Birthday Blast 9", columns: 3, slots: makeSlots(9) },

//     // STORY / POSTER STYLE
//     { id: 4, name: "Birthday Story 3", columns: 1, slots: makeSlots(3) },

//     // WIDE BANNER
//     { id: 5, name: "Birthday Banner 5", columns: 5, slots: makeSlots(5) },

//     // KIDS STYLE
//     { id: 6, name: "Kids Birthday Fun 8", columns: 4, slots: makeSlots(8) },

//     // MEMORY WALL
//     { id: 7, name: "Birthday Memories 12", columns: 4, slots: makeSlots(12) },

//     // INSTAGRAM GRID
//     { id: 8, name: "Birthday Insta Grid 6", columns: 3, slots: makeSlots(6) },

//     // PHOTO ALBUM
//     { id: 9, name: "Birthday Album 10", columns: 5, slots: makeSlots(10) },

//     // BIG PARTY
//     { id: 10, name: "Birthday Mega Party 15", columns: 5, slots: makeSlots(15) }
//   ]
// },

//   /* ================= ANNIVERSARY ================= */
//   {
//     category: "Anniversary 💍",
//     templates: [
//       { id: 4, name: "Love Story 3", columns: 3, slots: makeSlots(3) },
//       { id: 5, name: "Couple Moments 5", columns: 2, slots: makeSlots(5) },
//       { id: 6, name: "Wedding Memories 8", columns: 4, slots: makeSlots(8) }
//     ]
//   },

//   /* ================= FRIENDS ================= */
//   {
//   category: "Friends 👯",
//   templates: [

//     // SIMPLE & CLEAN
//     { id: 50, name: "Best Friends 4", columns: 2, slots: makeSlots(4) },

//     // SOCIAL MEDIA STYLE
//     { id: 51, name: "Friends Hangout 6", columns: 3, slots: makeSlots(6) },

//     // MEMORY WALL
//     { id: 52, name: "Friends Memories 8", columns: 4, slots: makeSlots(8) },

//     // GROUP SELFIES
//     { id: 53, name: "Squad Selfies 9", columns: 3, slots: makeSlots(9) },

//     // TRAVEL WITH FRIENDS
//     { id: 54, name: "Friends Trip 10", columns: 5, slots: makeSlots(10) },

//     // STORY / REEL STYLE
//     { id: 55, name: "Friends Story 3", columns: 1, slots: makeSlots(3) },

//     // INSTAGRAM GRID
//     { id: 56, name: "Friends Insta Grid 6", columns: 3, slots: makeSlots(6) },

//     // BIG GROUP
//     { id: 57, name: "Group Fun 12", columns: 4, slots: makeSlots(12) },

//     // PARTY NIGHT
//     { id: 58, name: "Party Night 15", columns: 5, slots: makeSlots(15) },

//     // ALBUM STYLE
//     { id: 59, name: "Friends Album 16", columns: 4, slots: makeSlots(16) }
//   ]
// },

//   /* ================= FAMILY ================= */
//   {
//     category: "Family 👨‍👩‍👧‍👦",
//     templates: [
//       { id: 10, name: "Family Memories 4", columns: 2, slots: makeSlots(4) },
//       { id: 11, name: "Big Family 9", columns: 3, slots: makeSlots(9) },
//       { id: 12, name: "Family Album 12", columns: 4, slots: makeSlots(12) }
//     ]
//   },

//   /* ================= TRAVEL ================= */
//   {
//     category: "Travel ✈️",
//     templates: [
//       { id: 13, name: "Travel Highlights 5", columns: 3, slots: makeSlots(5) },
//       { id: 14, name: "Trip Memories 8", columns: 4, slots: makeSlots(8) },
//       { id: 15, name: "World Tour 10", columns: 5, slots: makeSlots(10) }
//     ]
//   },

//   /* ================= FESTIVAL ================= */
//   {
//     category: "Festival 🎉",
//     templates: [
//       { id: 16, name: "Diwali Special 6", columns: 3, slots: makeSlots(6) },
//       { id: 17, name: "Christmas Collage 8", columns: 4, slots: makeSlots(8) },
//       { id: 18, name: "New Year Party 9", columns: 3, slots: makeSlots(9) }
//     ]
//   },

//   /* ================= BUSINESS ================= */
//   {
//     category: "Business 💼",
//     templates: [
//       { id: 19, name: "Team Introduction 4", columns: 2, slots: makeSlots(4) },
//       { id: 20, name: "Office Moments 6", columns: 3, slots: makeSlots(6) },
//       { id: 21, name: "Company Event 9", columns: 3, slots: makeSlots(9) }
//     ]
//   }

// ];
const makeSlots = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    image: null,
    radius: 0  
  }));

export const TEMPLATE_CATEGORIES = [

  {
    category: "Birthday",
    icon: "gift",
    templates: [
      { id: 1, name: "Birthday Hero Duo", columns: 1, slots: makeSlots(2) },
      { id: 2, name: "Birthday Story Stack", columns: 1, slots: makeSlots(3) },
      { id: 3, name: "Birthday Balanced", columns: 2, slots: makeSlots(4) },
      { id: 4, name: "Birthday Highlights", columns: 3, slots: makeSlots(5) },
      { id: 5, name: "Birthday Party Grid", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Friends",
    icon: "users",
    templates: [
      { id: 10, name: "Bestie Side-by-Side", columns: 2, slots: makeSlots(2) },
      { id: 11, name: "Friends Reel", columns: 1, slots: makeSlots(3) },
      { id: 12, name: "Hangout Frames", columns: 2, slots: makeSlots(4) },
      { id: 13, name: "Squad Moments", columns: 3, slots: makeSlots(5) },
      { id: 14, name: "Friends Wall", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "College",
    icon: "book",
    templates: [
      { id: 20, name: "College Before & After", columns: 1, slots: makeSlots(2) },
      { id: 21, name: "Campus Journey", columns: 1, slots: makeSlots(3) },
      { id: 22, name: "College Moments", columns: 2, slots: makeSlots(4) },
      { id: 23, name: "Campus Life", columns: 3, slots: makeSlots(5) },
      { id: 24, name: "Final Year Grid", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Couple",
    icon: "heart",
    templates: [
      { id: 30, name: "Love Duo Focus", columns: 1, slots: makeSlots(2) },
      { id: 31, name: "Love Story", columns: 1, slots: makeSlots(3) },
      { id: 32, name: "Together Moments", columns: 2, slots: makeSlots(4) },
      { id: 33, name: "Us Time", columns: 2, slots: makeSlots(5) },
      { id: 34, name: "Couple Memories", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Family",
    icon: "home",
    templates: [
      { id: 40, name: "Family Compare", columns: 2, slots: makeSlots(2) },
      { id: 41, name: "Family Timeline", columns: 1, slots: makeSlots(3) },
      { id: 42, name: "Family Frames", columns: 2, slots: makeSlots(4) },
      { id: 43, name: "Home Stories", columns: 3, slots: makeSlots(5) },
      { id: 44, name: "Family Album", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Kids",
    icon: "smile",
    templates: [
      { id: 50, name: "Kids Fun Duo", columns: 2, slots: makeSlots(2) },
      { id: 51, name: "Play Story", columns: 1, slots: makeSlots(3) },
      { id: 52, name: "Kids Squares", columns: 2, slots: makeSlots(4) },
      { id: 53, name: "Fun Moments", columns: 3, slots: makeSlots(5) },
      { id: 54, name: "Kids Party Grid", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Pets",
    icon: "paw",
    templates: [
      { id: 60, name: "Pet Hero Duo", columns: 1, slots: makeSlots(2) },
      { id: 61, name: "Pet Day Story", columns: 1, slots: makeSlots(3) },
      { id: 62, name: "Cute Paws", columns: 2, slots: makeSlots(4) },
      { id: 63, name: "Pet Moments", columns: 3, slots: makeSlots(5) },
      { id: 64, name: "Pet Play Grid", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Travel",
    icon: "map",
    templates: [
      { id: 70, name: "Travel Compare", columns: 2, slots: makeSlots(2) },
      { id: 71, name: "Journey Story", columns: 1, slots: makeSlots(3) },
      { id: 72, name: "Travel Highlights", columns: 2, slots: makeSlots(4) },
      { id: 73, name: "Trip Moments", columns: 3, slots: makeSlots(5) },
      { id: 74, name: "Travel Grid", columns: 3, slots: makeSlots(6) }
    ]
  },

  {
    category: "Festival",
    icon: "star",
    templates: [
      { id: 80, name: "Festival Lights Duo", columns: 2, slots: makeSlots(2) },
      { id: 81, name: "Festival Story", columns: 1, slots: makeSlots(3) },
      { id: 82, name: "Festival Frames", columns: 2, slots: makeSlots(4) },
      { id: 83, name: "Celebration Burst", columns: 3, slots: makeSlots(5) },
      { id: 84, name: "Festival Party Grid", columns: 3, slots: makeSlots(6) }
    ]
  }

];
