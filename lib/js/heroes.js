// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

const sombra = {
  name: "sombra",
  type: "offense",
  difficulty: "3/3",
  img: "sombra.png",
  saying: "EVERYTHING CAN BE HACKED… AND EVERYONE.",
  story:
    "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
  abilities: [
    {
      name: "MACHINE PISTOL",
      description:
        "Sombra’s fully-automatic machine pistol fires in a short-range spread."
    },
    {
      name: "HACK",
      description:
        "Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
    },
    {
      name: "STEALTH",
      description:
        "Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
    },
    {
      name: "TRANSLOCATOR",
      description:
        "Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
    },
    {
      name: "EMP",
      description:
        "Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
    },
    {
      name: "MACHINE PISTOL",
      description:
        "Sombra’s fully-automatic machine pistol fires in a short-range spread."
    }
  ]
};

const lucio = {
  name: "lucio",
  type: "support",
  difficulty: "2/3",
  img: "lucio.png",
  saying: "COME ON, LET'S BRING IT TOGETHER.",
  story:
    "Lúcio is an international celebrity who inspires social change through his music and actions Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows.But Lúcio's close-knit community was thrown into chaos when the multinational Vishkar Corporation secured a contract to redevelop large tracts of the city. Lúcio and his neighbors had been told that the development would improve their lives. However, that promise never became a reality. Vishkar imposed controls on the residents in the name of building a more orderly society: enforcing curfews, cracking down on what the company perceived as lawless behavior, and exploiting the populace as a cheap labor force.  Lúcio wouldn't stand for it. He stole Vishkar sonic technology that had been used to suppress the people, and he converted it into a tool to rally them to action. In a popular uprising, they drove Vishkar out of their neighborhoods. Lúcio's leadership made him a star overnight and a symbol for positive social change. His music skyrocketed in popularity. Whereas he had once performed locally, he was now filling arenas across the world. With his newfound fame, Lúcio realizes that he has an opportunity to make a difference and change the world for the better.",
  abilities: [
    {
      name: "SONIC AMPLIFIER",
      description:
        "Lucio can hit his enemies with sonic prjectiles or knock them back with blasts of sound."
    },
    {
      name: "CROSSFADE",
      description:
        "Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health."
    },
    {
      name: "AMP IT UP",
      description:
        "Lúcio increases the volume on his speakers, boosting the effects of his songs."
    },
    {
      name: "SOUND BARRIER",
      description:
        "Lúcio increases the volume on his speakers, boosting the effects of his songs."
    }
  ]
};

const mercy = {
  name: "mercy",
  type: "support",
  difficulty: "1/3",
  img: "mercy.png",
  saying: "HEROES NEVER DIE.",
  story:
    "Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.",
  abilities: [
    {
      name: "CADUCEUS STAFF",
      description:
        "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal."
    },
    {
      name: "CADUCEUS BLASTER",
      description: "Mercy shoots a round from her sidearm."
    },
    {
      name: "GUARDIAN ANGEL",
      description:
        "Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments."
    },
    {
      name: "RESURRECT",
      description:
        "Mercy brings a dead ally back into the fight with full health."
    },
    {
      name: "ANGELIC DESCENT",
      description:
        "Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights."
    },
    {
      name: "VALKYRIE",
      description:
        "Gain the ability to fly. Mercy’s abilities are enhanced."
    }
  ]
};

const heroes=[
    sombra,
    lucio,
    mercy,
];

// 2) Create an array called "heroes" and store all of the hero object in the array

// 3) In "index.html", create a form that allows the user to create
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler

// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
