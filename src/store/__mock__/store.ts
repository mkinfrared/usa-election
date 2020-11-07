import { createStore } from "redux";

import reducers from "../reducers";

const initialStore = {
  votes: {
    isRunning: true,
    isDone: false,
    states: [
      {
        name: "Alabama",
        abbreviation: "AL",
        votes: 9,
        totalVote: 2297624,
        democrat: 340,
        republican: 332
      },
      {
        name: "Alaska",
        abbreviation: "AK",
        votes: 3,
        totalVote: 172031,
        democrat: 346,
        republican: 325
      },
      {
        name: "Arizona",
        abbreviation: "AZ",
        votes: 11,
        totalVote: 3060449,
        democrat: 350,
        republican: 321
      },
      {
        name: "Arkansas",
        abbreviation: "AR",
        votes: 6,
        totalVote: 1219812,
        democrat: 327,
        republican: 344
      },
      {
        name: "California",
        abbreviation: "CA",
        votes: 55,
        totalVote: 12570927,
        democrat: 314,
        republican: 357
      },
      {
        name: "Colorado",
        abbreviation: "CO",
        votes: 9,
        totalVote: 3121389,
        democrat: 118,
        republican: 153
      },
      {
        name: "Connecticut",
        abbreviation: "CT",
        votes: 7,
        totalVote: 1724932,
        democrat: 135,
        republican: 135
      },
      {
        name: "Delaware",
        abbreviation: "DE",
        votes: 3,
        totalVote: 502384,
        democrat: 130,
        republican: 140
      },
      {
        name: "District of Columbia",
        abbreviation: "DC",
        votes: 3,
        totalVote: 279152,
        democrat: 134,
        republican: 136
      },
      {
        name: "Florida",
        abbreviation: "FL",
        votes: 29,
        totalVote: 11031440,
        democrat: 147,
        republican: 123
      },
      {
        name: "Georgia",
        abbreviation: "GA",
        votes: 16,
        totalVote: 4958191,
        democrat: 70,
        republican: 72
      },
      {
        name: "Hawaii",
        abbreviation: "HI",
        votes: 4,
        totalVote: 573854,
        democrat: 73,
        republican: 69
      },
      {
        name: "Idaho",
        abbreviation: "ID",
        votes: 4,
        totalVote: 862232,
        democrat: 77,
        republican: 65
      },
      {
        name: "Illinois",
        abbreviation: "IL",
        votes: 20,
        totalVote: 5366408,
        democrat: 63,
        republican: 79
      },
      {
        name: "Indiana",
        abbreviation: "IN",
        votes: 11,
        totalVote: 2959758,
        democrat: 68,
        republican: 74
      },
      {
        name: "Iowa",
        abbreviation: "IA",
        votes: 6,
        totalVote: 1686724,
        democrat: 23,
        republican: 13
      },
      {
        name: "Kansas",
        abbreviation: "KS",
        votes: 6,
        totalVote: 1320528,
        democrat: 14,
        republican: 22
      },
      {
        name: "Kentucky",
        abbreviation: "KY",
        votes: 8,
        totalVote: 2121113,
        democrat: 22,
        republican: 14
      },
      {
        name: "Louisiana",
        abbreviation: "LA",
        votes: 8,
        totalVote: 2147314,
        democrat: 15,
        republican: 21
      },
      {
        name: "Maine",
        abbreviation: "ME",
        votes: 4,
        totalVote: 770576,
        democrat: 20,
        republican: 16
      },
      {
        name: "Maryland",
        abbreviation: "MD",
        votes: 10,
        totalVote: 2165706,
        democrat: 0,
        republican: 0
      },
      {
        name: "Massachusetts",
        abbreviation: "MA",
        votes: 11,
        totalVote: 3416461,
        democrat: 0,
        republican: 0
      },
      {
        name: "Michigan",
        abbreviation: "MI",
        votes: 16,
        totalVote: 5533164,
        democrat: 0,
        republican: 0
      },
      {
        name: "Minnesota",
        abbreviation: "MN",
        votes: 10,
        totalVote: 3262546,
        democrat: 0,
        republican: 0
      },
      {
        name: "Mississippi",
        abbreviation: "MS",
        votes: 6,
        totalVote: 1036509,
        democrat: 0,
        republican: 0
      },
      {
        name: "Missouri",
        abbreviation: "MO",
        votes: 10,
        totalVote: 3010314,
        democrat: 0,
        republican: 0
      },
      {
        name: "Montana",
        abbreviation: "MT",
        votes: 3,
        totalVote: 602777,
        democrat: 0,
        republican: 0
      },
      {
        name: "Nebraska",
        abbreviation: "NE",
        votes: 5,
        totalVote: 926347,
        democrat: 0,
        republican: 0
      },
      {
        name: "Nevada",
        abbreviation: "NV",
        votes: 6,
        totalVote: 1222331,
        democrat: 0,
        republican: 0
      },
      {
        name: "New Hampshire",
        abbreviation: "NH",
        votes: 4,
        totalVote: 798982,
        democrat: 0,
        republican: 0
      },
      {
        name: "New Jersey",
        abbreviation: "NJ",
        votes: 14,
        totalVote: 3250002,
        democrat: 0,
        republican: 0
      },
      {
        name: "New Mexico",
        abbreviation: "NM",
        votes: 5,
        totalVote: 922516,
        democrat: 0,
        republican: 0
      },
      {
        name: "New York",
        abbreviation: "NY",
        votes: 29,
        totalVote: 7264353,
        democrat: 0,
        republican: 0
      },
      {
        name: "North Carolina",
        abbreviation: "NC",
        votes: 15,
        totalVote: 5461810,
        democrat: 0,
        republican: 0
      },
      {
        name: "North Dakota",
        abbreviation: "ND",
        votes: 3,
        totalVote: 361279,
        democrat: 0,
        republican: 0
      },
      {
        name: "Ohio",
        abbreviation: "OH",
        votes: 18,
        totalVote: 5701651,
        democrat: 0,
        republican: 0
      },
      {
        name: "Oklahoma",
        abbreviation: "OK",
        votes: 7,
        totalVote: 1558627,
        democrat: 0,
        republican: 0
      },
      {
        name: "Oregon",
        abbreviation: "OR",
        votes: 7,
        totalVote: 2298062,
        democrat: 0,
        republican: 0
      },
      {
        name: "Pennsylvania",
        abbreviation: "PA",
        votes: 20,
        totalVote: 6639262,
        democrat: 0,
        republican: 0
      },
      {
        name: "Rhode Island",
        abbreviation: "RI",
        votes: 4,
        totalVote: 500390,
        democrat: 0,
        republican: 0
      },
      {
        name: "South Carolina",
        abbreviation: "SC",
        votes: 9,
        totalVote: 2504235,
        democrat: 0,
        republican: 0
      },
      {
        name: "South Dakota",
        abbreviation: "SD",
        votes: 3,
        totalVote: 422673,
        democrat: 0,
        republican: 0
      },
      {
        name: "Tennessee",
        abbreviation: "TN",
        votes: 11,
        totalVote: 3049471,
        democrat: 0,
        republican: 0
      },
      {
        name: "Texas",
        abbreviation: "TX",
        votes: 38,
        totalVote: 11266215,
        democrat: 0,
        republican: 0
      },
      {
        name: "Utah",
        abbreviation: "UT",
        votes: 6,
        totalVote: 1172355,
        democrat: 0,
        republican: 0
      },
      {
        name: "Vermont",
        abbreviation: "VT",
        votes: 3,
        totalVote: 350178,
        democrat: 0,
        republican: 0
      },
      {
        name: "Virginia",
        abbreviation: "VA",
        votes: 13,
        totalVote: 4386031,
        democrat: 0,
        republican: 0
      },
      {
        name: "Washington",
        abbreviation: "WA",
        votes: 12,
        totalVote: 3750036,
        democrat: 0,
        republican: 0
      },
      {
        name: "West Virginia",
        abbreviation: "WV",
        votes: 5,
        totalVote: 786272,
        democrat: 0,
        republican: 0
      },
      {
        name: "Wisconsin",
        abbreviation: "WI",
        votes: 10,
        totalVote: 3297420,
        democrat: 0,
        republican: 0
      },
      {
        name: "Wyoming",
        abbreviation: "WY",
        votes: 3,
        totalVote: 276528,
        democrat: 0,
        republican: 0
      }
    ]
  },
  candidates: [
    {
      name: "Mr. Garrison",
      imageSrc: "/static/media/President_Garrison.2d66863d.png",
      party: "republican"
    },
    {
      name: "Hillary Clinton",
      imageSrc: "/static/media/Hillary-clinton-s20.8382fcff.png",
      party: "democrat"
    }
  ]
};

const store = createStore(reducers, initialStore as any);

export { store };
