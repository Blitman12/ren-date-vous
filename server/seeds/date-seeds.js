const mongoose = require('mongoose');
const { Date } = require('../models');
const db = require('../config/connection')
const aquarium = "/images/aquarium.jpg";
const theater = "/images/theater.jpg";
const museum = "/images/museum.jpg";
const hiking = "/images/hiking.jpg";
const dinner = "/images/Dinner.jpg";
const cookingClasses = "/images/cooking-classes.jpg";
const cookingDinner = "/images/cooking-dinner.jpg";
const StarGazing = "/images/starGazing.jpg";
const picnic = "/images/picnic.jpg";
const shooting = "/images/Shooting.jpg";
const art = "/images/art.jpg";
const archery = "/images/archery.jpg";
const axe = "/images/axe-throwing.jpg";
const pillowFort = "/images/pillowFort.jpg";
const horseback = "/images/horseback.jpg";
const walk = "/images/walk.jpg";
const bowling = "/images/bowling.jpg";
const skydiving = "/images/skydiving.jpg";
const kayaking = "/images/kayaking.jpg";
const fishing = "/images/fishing.jpg";
const iceSkating = "/images/ice-skating.jpg";
const wine = "/images/wine.jpg";
const paint = "/images/paint.jpg";
const pool = "/images/pool.jpg";
const trivia = "/images/trivia.jpg";
const clothing = "/images/clothing.jpg";
const dog = "/images/dog.jpg";
const karts = "/images/karts.jpg";
const arcade = "/images/arcade.jpg";
const lazer = "/images/lazerTag.jpg";
const gym = "/images/gym.jpg";

const dateIdeas = [
  {
    title: 'Aquarium',
    description: 'Go to an aquarium and take at least 5 selfies!',
    categories: ['Indoors'],
    image: aquarium,
    reviews: []
  },
  {
    title: 'Theatres',
    description: 'Choose a play or a movie!',
    categories: ['Indoors'],
    image: theater,
    reviews: []
  },
  {
    title: 'Museum',
    description: 'Go to a local Museum!',
    categories: ['Indoors'],
    image: museum,
    reviews: []
  },
  {
    title: 'Hiking',
    description: 'Go on a hike and take a few scenic pictures!',
    categories: ['Outdoors'],
    image: hiking,
    reviews: []
  },
  {
    title: 'Dinner',
    description: 'Keep it classic and classy yet daring, find a restaurant nearby neither person has tried!',
    categories: ['Food'],
    image: dinner,
    reviews: []
  },
  {
    title: 'Cooking Classes',
    description: 'Find a local cooking class and learn a new recipe!',
    categories: ['Indoors'],
    image: cookingClasses,
    reviews: []
  },
  {
    title: 'Star Gazing',
    description: 'On a clear night, lay outside and relax with a view of the stars.',
    categories: ['Outdoors'],
    image: StarGazing,
    reviews: []
  },
  {
    title: 'Picnic',
    description: "Gather some lunch favorite's and go enjoy a nice picnic!",
    categories: ['Outdoors'],
    image: picnic,
    reviews: []
  },
  {
    title: 'Random Meal',
    description: 'Find a random recipe you have never made or had before and enjoy some new food right in your kitchen!',
    categories: ['Food'],
    image: cookingDinner,
    reviews: []
  },
  {
    title: 'Pillow Fort',
    description: 'Who can build the better fort? You decide! Build a pillow fort either with, or against, one another. May the odds be ever in your favor.',
    categories: ['Home'],
    image: pillowFort,
    reviews: []
  },
  {
    title: 'Horse Back Riding',
    description: 'Find a local business and go on a trail on horseback!',
    categories: ['Outdoors'],
    image: horseback,
    reviews: []
  },
  {
    title: 'Peaceful Walk',
    description: 'Go on a peaceful walk.',
    categories: ['Romantic'],
    image: walk,
    reviews: []
  },
  {
    title: 'Bowling',
    description: 'Who is the better bowler? One way to find out!',
    categories: ['Indoors'],
    image: bowling,
    reviews: []
  },
  {
    title: 'Kayaking',
    description: 'Go kayaking and enjoy nature!',
    categories: ['Wild'],
    image: kayaking,
    reviews: []
  },
  {
    title: 'Sky Diving',
    description: 'Go for the thrill of a lifetime! Please do remember to pull the parachute chord.',
    categories: ['Wild'],
    image: skydiving,
    reviews: []
  },
  {
    title: 'Ice Skating',
    description: 'Go shred the ice! Bring a jacket it is a bit chilly.',
    categories: ['Indoors'],
    image: iceSkating,
    reviews: []
  },
  {
    title: 'Fishing',
    description: 'Go put some food on your table with fishing! Or release it, whichever is legal.',
    categories: ['Outdoors'],
    image: fishing,
    reviews: []
  },
  {
    title: 'Wine Tasting',
    description: 'Go taste some new wine at a local orchard, restaurant, or event. Drink responsibly!',
    categories: 'Romantic',
    image: wine,
    reviews: []
  },
  {
    title: 'Paint Classes',
    description: 'Ever wanted to learn to paint? Find your local painting class! P.S: May contain alcohol.',
    categories: ['Indoors'],
    image: paint,
    reviews: []
  },
  {
    title: 'Axe Throwing',
    description: 'Let loose some pent up work frustration! See who can throw an axe the best, safely of course.',
    categories: ['Wild'],
    image: axe,
    reviews: []
  },
  {
    title: 'Shooting',
    description: 'Go shoot some guns, whether owned or rented! Make sure you wear ear/eye protection!',
    categories: ['Wild'],
    image: shooting,
    reviews: []
  },
  {
    title: 'Archery',
    description: 'Time to tap into your inner medieval ranger! Go shoot a bow, whether you own one or rent one!',
    categories: ['Wild'],
    image: archery,
    reviews: []
  },
  {
    title: 'Pool',
    description: 'Time to relax, go to your local water park or community pool and relax under the sun!',
    categories: ['Outdoors'],
    image: pool,
    reviews: []
  },
  {
    title: 'Lazer tag',
    description: 'Who is the best at lazer tag? Time to find out!',
    categories: ['Indoors'],
    image: lazer,
    reviews: []
  },
  {
    title: 'Gym',
    description: 'Is fitness your passion? Go hit the weights and set a new PR!',
    categories: ['Indoors'],
    image: gym,
    reviews: []
  },
  {
    title: 'Arcade',
    description: 'Go to a local arcade and see how many tickets you win! Buy the other person a gift with your tickets.',
    categories: ['Indoors'],
    image: arcade,
    reviews: []
  },
  {
    title: 'Go Karts',
    description: 'Find your local kart track and go burn some rubber!',
    categories: ['Wild'],
    image: karts,
    reviews: []
  },
  {
    title: 'Dog Park',
    description: 'If you have dogs, time to treat them too! Go let them make new friends!',
    categories: ['Outdoors'],
    image: dog,
    reviews: []
  },
  {
    title: 'Goodwill Gamble',
    description: 'Buy the other an outfit =  goodwill (and vice versa) and go to a restaurant in style! The one with the best reactions wins!',
    categories: ['Wild'],
    image: clothing,
    reviews: []
  },
  {
    title: 'Trivia Night',
    description: 'Crack out a trivia app/game, time to see who really knows more!',
    categories: ['Home'],
    image: trivia,
    reviews: []
  },
  {
    title: 'Art Exhibit',
    description: 'Go to your local Art Exhibit and enjoy the scenery!',
    categories: ['Indoors'],
    image: art,
    reviews: []
  },
  // {
  //   title: 'Karaoke',
  //   description: 'Flex your vocal skills with your special someone at a local karaoke bar!',
  //   categories: ['Indoors'],
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: 'Hot Air Balloon Ride',
  //   description: 'Get up and enjoy and early-morning hot air balloon ride to enjoy the scenic views of your city!',
  //   categories: ['Romantic'],
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: 'Antiquing',
  //   description: "Find some history in your hometown by checking out the local antique shops. There's a story behind every item!",
  //   categories: ['Indoors'],
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: 'Rock Climbing',
  //   description: 'Whether in the great outdoors or at your local climbing gym, break a sweat with someone special practicing your skills getting vertical',
  //   categories: ['Outdoors'],
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: 'Attend a Local Play',
  //   description: "Get some culture by attending the latest theatre production at your city's local playhouse!",
  //   categories: ['Indoors'],
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: "Build a Fire & Make S'mores",
  //   description: "Get cozy on a cold night, warm up with a fire and some s'mores",
  //   categories: ['Romantic'],
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
  // {
  //   title: '',
  //   description: '',
  //   categories: '',
  //   image: '',
  //   reviews: []
  // },
];

mongoose.connect(
  process.env.SEED_MONGODB_URI || 'mongodb://localhost:27017/rendatevous',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  Date.deleteMany({}, () => {

    Date.insertMany(dateIdeas, (err, docs) => {
      if (err) {
        console.log(err)
      }
      console.log(docs);
      mongoose.disconnect();
    })
  })
})


