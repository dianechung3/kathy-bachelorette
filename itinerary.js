// ✏️ Edit this file to update the site — no other code changes needed.
//
// Each event is one "track". Fields:
//   time      – shown on the card and in the tracklist ("6:30 PM", or loose like "Morning")
//   title     – the big headline
//   location  – small caps line under the date (also used for the directions link)
//   notes     – optional: what's happening, what to bring, etc.
//   map       – optional: place to search for the "Directions" link (defaults to location; false = no link)
//   look      – optional: id of an outfit in LOOKS below, adds a "What to wear" link
//   photo     – optional: image file for this track (defaults to kathy.png)
//   song      – optional: the stop's theme song, shown like the "now playing" track
//   artist    – optional: who sings it
//   spotify   – optional: Spotify track ID (the part after open.spotify.com/track/) so it plays on the card

const TRIP = {
  theme: "Vino Before Vows",
  title: "Kathy’s Bachelorette",
  dates: "November 13-15, 2026",
  place: "Sonoma Valley",
  coverPhoto: "kathy.png",
  secondsPerTrack: 8,  // how long each stop shows when you hit play (lofi or no sound)
  secondsPerSong: 30,  // how long each stop shows when theme songs are playing
  // Paste a Spotify playlist link here to embed it, e.g. "https://open.spotify.com/playlist/..."
  playlist: "",
};

const ITINERARY = [
  {
    day: "Friday",
    date: "Nov 13",
    events: [
      { time: "4:00 PM", title: "Check In", location: "Twin Oaks Villa", map: false, notes: "Decor goes up first, while there's still daylight for the photo wall. Shoes off at the door!", song: "Location", artist: "Khalid", spotify: "152lZdxL1OR0ZMW6KquMif" },
      { time: "Before dinner", title: "Welcome Toast", location: "The Kitchen Island", map: false, notes: "Coupes, wine charms, and the signature pour: The Blushing Bride.", song: "Kiss Me More", artist: "Doja Cat ft. SZA", spotify: "748mdHapucXQri7IAO8yFK" },
      { time: "6:30 PM", title: "Dinner at El Dorado Kitchen", location: "El Dorado Kitchen", notes: "Special but relaxed. Party of six.", look: "fri", song: "Best Part", artist: "Daniel Caesar ft. H.E.R.", spotify: "1RMJOxR6GRPsBHL8qeC2ux" },
      { time: "Evening", title: "Nightcap & Hot Tub", location: "Twin Oaks Villa", map: false, notes: "Robes on, voices down. Quiet hours start at 10:00 PM.", song: "Snooze", artist: "SZA", spotify: "4iZ4pt7kvcaH6Yo8UoZ4s2" },
    ],
  },
  {
    day: "Saturday",
    date: "Nov 14",
    events: [
      { time: "Morning", title: "Sleep In", location: "Twin Oaks Villa", map: false, notes: "Coffee, pastries, no alarms, no agenda.", song: "Aruarian Dance", artist: "Nujabes", spotify: "4sUTagdmyuyAxd7RvbygpQ" },
      { time: "Late morning", title: "DIY Spa Morning", location: "The Hot Tub", map: false, notes: "Robes, face masks, bath salts, and a long soak in the 7-person hot tub.", song: "Good Days", artist: "SZA", spotify: "3YJJjQPAbDT7mGpX3WtQ9A" },
      { time: "Midday", title: "Scribe Winery", location: "Scribe Winery", notes: "The tasting includes food, so this is lunch too. Settle in on the hacienda patio.", look: "wineries", song: "Juicy", artist: "Doja Cat", spotify: "20GMdpeWHUEtjAdpdy4YIt" },
      { time: "Afternoon", title: "Bubbles at Gloria Ferrer", location: "Gloria Ferrer", notes: "Taste of Carneros flight on the terrace. Group photos against the vines.", look: "wineries", song: "Leave the Door Open", artist: "Silk Sonic", spotify: "7MAibcTli4IisCtbHKrGMh" },
      { time: "Late afternoon", title: "Get Glam", location: "Twin Oaks Villa", map: false, notes: "Back to the house to change into something a little nicer, then rideshare into town.", look: "sat-dinner", song: "Water", artist: "Tyla", spotify: "5aIVCx5tnk0ntmdiinnYvw" },
      { time: "6:30 PM", title: "The Girl & the Fig", location: "The Girl & the Fig", notes: "The celebration dinner. Veil on for the entrance 👰‍♀️", look: "sat-dinner", song: "Single Ladies (Put a Ring on It)", artist: "Beyoncé", spotify: "2ZBNclC5wm4GtiWaeh0DMx" },
    ],
  },
  {
    day: "Sunday",
    date: "Nov 15",
    events: [
      { time: "10:00 AM", title: "Check Out", location: "Twin Oaks Villa", map: false, notes: "Bags packed before brunch. One last group photo before we go.", song: "Crazy in Love", artist: "Beyoncé ft. JAY-Z", spotify: "5IVuqXILoxVWvWEPm82Jxr" },
      { time: "10:15 AM", title: "Sunflower Caffé", location: "Sunflower Caffé", notes: "Quick brunch on the Plaza. No reservations, so two early birds go ahead to hold a table.", song: "Coffee", artist: "Miguel", spotify: "6vMpPxLV0F5Diwcs6awI1Z" },
      { time: "11:00 AM", title: "Head Home", location: "Sonoma Valley", map: false, notes: "Hugs all around. Next stop: the wedding 💍", song: "Best Friend", artist: "Saweetie ft. Doja Cat", spotify: "2etHQJxIbV0soyPhelVs9Y" },
    ],
  },
];

// What to wear. Shown in the "What to Wear" section; events link to these by id.
const STYLE = {
  palette: [
    { name: "Wine", color: "#7a1f35" },
    { name: "Burgundy", color: "#5c1a2b" },
    { name: "Cream", color: "#f3e8d6" },
    { name: "Camel", color: "#b98a5a" },
    { name: "Olive", color: "#6b6a3a" },
    { name: "Chocolate", color: "#4a2e22" },
    { name: "Gold", color: "#c9a14a" },
  ],
  intro: "No strict dress codes! Each event has a loose color theme so group photos look coordinated, but wear any outfit you love. The looks below are just ideas.",
  rule: "The only rule: Kathy is the only one in white. Everyone else stays in the wine-and-neutrals palette (no white, no neon).",
  tips: [
    "Layers: 60s by day, crisp at night. Bring the real coat, not the cute one.",
    "Shoes: stilettos sink into vineyard gravel, so boots, flats, or block heels are easiest at the wineries.",
    "No shoes inside the house.",
  ],
};

// Outfit illustrations. Each figure is built from these options:
//   color      – top or dress color          sleeves – "long" or "none" (slip dress)
//   bottom     – "pants", "mini", "midi", "maxi" (skirt uses color; pants use pantsColor)
//   knit/satin – fabric texture               layer – { color, long: true } blazer or coat
//   shoes      – { type: "ankle" | "knee" | "heels" | "slippers", color }
//   stole, sash, veil, pearls, gold, pj       – extras (stole takes a color)
//   bag        – crossbody bag color
//   palette (per look) – the girls' color theme for that event
const LOOKS = [
  {
    id: "fri",
    moment: "Friday welcome dinner",
    theme: "Black + wine",
    palette: [["Black", "#1d1a1a"], ["Wine", "#7a1f35"], ["Burgundy", "#5c1a2b"]],
    bride: "Anything white or cream: a dress, white jeans + a sweater, whatever feels cute.",
    girls: "Any dress, or a top + jeans, in black and wine tones. Throw a coat or blazer over it, since evenings get chilly.",
    brideLook: { color: "#f7f0e4", knit: true, bottom: "pants", pantsColor: "#fbf8f2", sash: true, shoes: { type: "ankle", color: "#fdfbf7" } },
    girlsLooks: [
      { color: "#7a1f35", knit: true, bottom: "pants", pantsColor: "#2b3448", layer: { color: "#1d1a1a" }, shoes: { type: "ankle", color: "#1d1a1a" } },
      { color: "#1d1a1a", bottom: "mini", shoes: { type: "knee", color: "#1d1a1a" } },
      { color: "#5c1a2b", knit: true, bottom: "midi", layer: { color: "#1d1a1a", long: true }, shoes: { type: "ankle", color: "#1d1a1a" } },
    ],
  },
  {
    id: "wineries",
    moment: "Saturday wineries",
    theme: "Warm neutrals",
    palette: [["Camel", "#b98a5a"], ["Cream", "#f3e8d6"], ["Olive", "#6b6a3a"], ["Rust", "#a4482a"], ["Brown", "#4a2e22"]],
    bride: "A cozy cream sweater dress + boots, or white jeans + a chunky sweater. Cute in photos, warm on the patio.",
    girls: "Sweater dresses, long-sleeve midis, or jeans + a cozy sweater in camel, cream, olive, rust, or brown. They glow against the fall vines. Finish with boots and a cute jacket you can take on and off.",
    tip: "Gloria Ferrer sits in breezy Carneros, so skip flowy minis. Boots or flats are best on gravel and grass, a crossbody keeps your hands free for glasses, and skip strong perfume (it messes with the tasting). Toss a light rain jacket in your bag just in case.",
    brideLook: { color: "#f7f0e4", knit: true, bottom: "midi", sash: true, shoes: { type: "knee", color: "#d9c3a5" } },
    girlsLooks: [
      { color: "#a4482a", knit: true, bottom: "midi", bag: "#4a2e22", shoes: { type: "knee", color: "#4a2e22" } },
      { color: "#f3e8d6", knit: true, bottom: "pants", pantsColor: "#2b3448", layer: { color: "#b98a5a", long: true }, bag: "#1d1a1a", shoes: { type: "ankle", color: "#4a2e22" } },
      { color: "#6b6a3a", bottom: "midi", layer: { color: "#4a2e22" }, bag: "#b98a5a", shoes: { type: "knee", color: "#4a2e22" } },
    ],
  },
  {
    id: "sat-dinner",
    moment: "Saturday celebration dinner",
    theme: "All shades of wine",
    palette: [["Cranberry", "#9b2c45"], ["Wine", "#7a1f35"], ["Burgundy", "#5c1a2b"], ["Merlot", "#4a1424"]],
    bride: "A cute white dress, a step up from the rest of the weekend.",
    girls: "Dress it up a little, but no need to go fancy: any nice dress or going-out outfit in a shade of wine or burgundy. A row of reds with Kathy in white is THE photo of the weekend. Bring a coat.",
    brideLook: { color: "#fbf8f2", sleeves: "none", bottom: "midi", veil: true, pearls: true, shoes: { type: "heels", color: "#f3e8d6" } },
    girlsLooks: [
      { color: "#7a1f35", sleeves: "none", bottom: "midi", gold: true, shoes: { type: "heels", color: "#c9a14a" } },
      { color: "#5c1a2b", bottom: "mini", gold: true, shoes: { type: "heels", color: "#1d1a1a" } },
      { color: "#9b2c45", knit: true, bottom: "midi", gold: true, shoes: { type: "ankle", color: "#1d1a1a" } },
    ],
  },
];

// House notes. Set to null to hide the section.
const HOUSE = {
  name: "Twin Oaks Villa",
  facts: [
    ["Check in", "Friday from 4:00 PM"],
    ["Check out", "Sunday by 10:00 AM"],
    ["Quiet hours", "10:00 PM – 9:00 AM (steep fines, so voices down)"],
    ["Shoes", "Off inside the house"],
    ["Hot tub", "7-person, open year-round"],
    ["Pool", "Closed in November"],
  ],
  rooms: [
    ["Master king", "Kathy 👰‍♀️"],
    ["Twin room #1", "Esther & Sharon"],
    ["Twin room #2", "Rachel & Rana"],
    ["Pool house", "Diane"],
  ],
};
