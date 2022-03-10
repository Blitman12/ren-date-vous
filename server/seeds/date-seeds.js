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
const antiquing = "/images/antiquing.jpg";
const bbq = "/images/bbq.jpg";
const bike = "/images/bike.jpg";
const camping ="/images/camping.jpg";
const cardboard = "/images/cardboard.jpg";
const chinese = "/images/chinese.jpg";
const concert = "/images/concert.jpg";
const detector = "/images/detector.jpg";
const disc = "/images/disc.jpg";
const games = "/images/games.jpg";
const garden = "/images/garden.jpg";
const hobbies = "/images/hobbies.jpg";
const balloon = "/images/balloon.jpg";
const italian = "/images/italian.jpg";
const karaoke = "/images/karaoke.jpg";
const lego = "/images/lego.jpg";
const lights = "/images/lightsOut.jpg";
const mexican = "/images/mexican.jpg";
const play = "/images/play.jpg";
const pottery = "/images/pottery.jpg";
const road = '/images/roadTrip.jpg';
const rock = '/images/rockClimbing.jpg';
const slow = '/images/slowDance.jpg';
const spa = '/images/spa.jpg';
const thai ='/images/thai.jpg';
const tourist = '/images/tourist.jpg';
const waterPark = '/images/waterPark.jpg';
const zoo = '/images/zoo.jpg';
const smores = '/images/smores.jpg';
const golf = '/images/golf.jpg';

const dateIdeas = [
  {
    title: 'Aquarium',
    description: 'Go to an aquarium and take at least 5 selfies!',
    categories: ['indoors'],
    image: aquarium,
    reviews: []
  },
  {
    title: 'Theatres',
    description: 'Choose a play or a movie!',
    categories: ['indoors'],
    image: theater,
    reviews: []
  },
  {
    title: 'Museum',
    description: 'Go to a local Museum!',
    categories: ['indoors'],
    image: museum,
    reviews: []
  },
  {
    title: 'Hiking',
    description: 'Go on a hike and take a few scenic pictures!',
    categories: ['outdoors'],
    image: hiking,
    reviews: []
  },
  {
    title: 'Dinner',
    description: 'Keep it classic and classy yet daring, find a restaurant nearby neither person has tried!',
    categories: ['food'],
    image: dinner,
    reviews: []
  },
  {
    title: 'Cooking Classes',
    description: 'Find a local cooking class and learn a new recipe!',
    categories: ['indoors'],
    image: cookingClasses,
    reviews: []
  },
  {
    title: 'Star Gazing',
    description: 'On a clear night, lay outside and relax with a view of the stars.',
    categories: ['outdoors'],
    image: StarGazing,
    reviews: []
  },
  {
    title: 'Picnic',
    description: "Gather some lunch favorite's and go enjoy a nice picnic!",
    categories: ['outdoors'],
    image: picnic,
    reviews: []
  },
  {
    title: 'Random Meal',
    description: 'Find a random recipe you have never made or had before and enjoy some new food right in your kitchen!',
    categories: ['food'],
    image: cookingDinner,
    reviews: []
  },
  {
    title: 'Pillow Fort',
    description: 'Who can build the better fort? You decide! Build a pillow fort either with, or against, one another. May the odds be ever in your favor.',
    categories: ['home'],
    image: pillowFort,
    reviews: []
  },
  {
    title: 'Horse Back Riding',
    description: 'Find a local business and go on a trail on horseback!',
    categories: ['outdoors'],
    image: horseback,
    reviews: []
  },
  {
    title: 'Peaceful Walk',
    description: 'Go on a peaceful walk.',
    categories: ['romantic'],
    image: walk,
    reviews: []
  },
  {
    title: 'Bowling',
    description: 'Who is the better bowler? One way to find out!',
    categories: ['indoors'],
    image: bowling,
    reviews: []
  },
  {
    title: 'Kayaking',
    description: 'Go kayaking and enjoy nature!',
    categories: ['wild'],
    image: kayaking,
    reviews: []
  },
  {
    title: 'Sky Diving',
    description: 'Go for the thrill of a lifetime! Please do remember to pull the parachute chord.',
    categories: ['wild'],
    image: skydiving,
    reviews: []
  },
  {
    title: 'Ice Skating',
    description: 'Go shred the ice! Bring a jacket it is a bit chilly.',
    categories: ['indoors'],
    image: iceSkating,
    reviews: []
  },
  {
    title: 'Fishing',
    description: 'Go put some food on your table with fishing! Or release it, whichever is legal.',
    categories: ['outdoors'],
    image: fishing,
    reviews: []
  },
  {
    title: 'Wine Tasting',
    description: 'Go taste some new wine at a local orchard, restaurant, or event. Drink responsibly!',
    categories: 'romantic',
    image: wine,
    reviews: []
  },
  {
    title: 'Paint Classes',
    description: 'Ever wanted to learn to paint? Find your local painting class! P.S: May contain alcohol.',
    categories: ['indoors'],
    image: paint,
    reviews: []
  },
  {
    title: 'Axe Throwing',
    description: 'Let loose some pent up work frustration! See who can throw an axe the best, safely of course.',
    categories: ['wild'],
    image: axe,
    reviews: []
  },
  {
    title: 'Shooting',
    description: 'Go shoot some guns, whether owned or rented! Make sure you wear ear/eye protection!',
    categories: ['wild'],
    image: shooting,
    reviews: []
  },
  {
    title: 'Archery',
    description: 'Time to tap into your inner medieval ranger! Go shoot a bow, whether you own one or rent one!',
    categories: ['wild'],
    image: archery,
    reviews: []
  },
  {
    title: 'Pool',
    description: 'Time to relax, go to your local water park or community pool and relax under the sun!',
    categories: ['outdoors'],
    image: pool,
    reviews: []
  },
  {
    title: 'Lazer tag',
    description: 'Who is the best at lazer tag? Time to find out!',
    categories: ['indoors'],
    image: lazer,
    reviews: []
  },
  {
    title: 'Gym',
    description: 'Is fitness your passion? Go hit the weights and set a new PR!',
    categories: ['indoors'],
    image: gym,
    reviews: []
  },
  {
    title: 'Arcade',
    description: 'Go to a local arcade and see how many tickets you win! Buy the other person a gift with your tickets.',
    categories: ['indoors'],
    image: arcade,
    reviews: []
  },
  {
    title: 'Go Karts',
    description: 'Find your local kart track and go burn some rubber!',
    categories: ['wild'],
    image: karts,
    reviews: []
  },
  {
    title: 'Dog Park',
    description: 'If you have dogs, time to treat them too! Go let them make new friends!',
    categories: ['outdoors'],
    image: dog,
    reviews: []
  },
  {
    title: 'Goodwill Gamble',
    description: 'Buy the other an outfit =  goodwill (and vice versa) and go to a restaurant in style! The one with the best reactions wins!',
    categories: ['wild'],
    image: clothing,
    reviews: []
  },
  {
    title: 'Trivia Night',
    description: 'Crack out a trivia app/game, time to see who really knows more!',
    categories: ['home'],
    image: trivia,
    reviews: []
  },
  {
    title: 'Art Exhibit',
    description: 'Go to your local Art Exhibit and enjoy the scenery!',
    categories: ['indoors'],
    image: art,
    reviews: []
  },
  {
    title: 'Karaoke',
    description: 'Flex your vocal skills with your special someone at a local karaoke bar!',
    categories: ['indoors'],
    image: karaoke,
    reviews: []
  },
  {
    title: 'Hot Air Balloon Ride',
    description: 'Get up and enjoy and early-morning hot air balloon ride to enjoy the scenic views of your city!',
    categories: ['romantic'],
    image: balloon,
    reviews: []
  },
  {
    title: 'Antiquing',
    description: "Find some history in your hometown by checking out the local antique shops. There's a story behind every item!",
    categories: ['indoors'],
    image: antiquing,
    reviews: []
  },
  {
    title: 'Rock Climbing',
    description: 'Whether in the great outdoors or at your local climbing gym, break a sweat with someone special practicing your skills getting vertical',
    categories: ['outdoors'],
    image: rock,
    reviews: []
  },
  {
    title: 'Attend a Local Play',
    description: "Get some culture by attending the latest theatre production at your city's local playhouse!",
    categories: ['indoors'],
    image: play,
    reviews: []
  },
  {
    title: "Build a Fire & Make S'mores",
    description: "Get cozy on a cold night, warm up with a fire and some s'mores",
    categories: ['romantic'],
    image: smores,
    reviews: []
  },
  {
    title: 'Miniature Golf',
    description: 'Known by many names, minigolf, mini-putt, goofy golf, crazy golf, or putt-putt, but no matter what you call it, we all know the game. So grab your club and give this date a wack!',
    categories: ['outdoors'],
    image: golf,
    reviews: []
  },
  {
    title: 'Game Night!',
    description: "You choose the theme. Go classic with either board games, card games or newer with video Games. Can't go wrong with good ol' Mario Kart! Better yet mix it up for hours of fun.",
    categories: ['home'],
    image: games,
    reviews: []
  },
  {
    title: 'Go for a Bike Ride',
    description: "Go for a bike ride around the neighborhood or somewhere new! Don't own a bike, then rent one! Better yet, rent a Tandem Bike and learn to work as a team!",
    categories: ['outdoors'],
    image: bike,
    reviews: []
  },
  {
    title: 'Camping',
    description: 'Want your date to last longer then a night! Then go camping, explore the outdoors. To make it even more personal, leave your electronics at home!',
    categories: ['outdoors'],
    image: camping,
    reviews: []
  },
  {
    title: 'Lights Out',
    description: "Go back to the 1800's and experience life without electricity! Have a no-tech evening. Pretend your power is out! Need help on what to do? Dinner by CandleLight, Tell Ghost Stories, Glow Stick Jewelry, Truth Or Dare, Card/Board Games, TALK, etc!",
    categories: ['home'],
    image: lights,
    reviews: []
  },
  {
    title: 'Slow Dance',
    description: 'Have an intimate evening at home! Dim the lights, turn on some slow music and dance the evening away!',
    categories: ['romantic'],
    image: slow,
    reviews: []
  },
  {
    title: 'Hit the Road for an Unplanned Day Trip',
    description: "Don't google just go! If there is a city near by you never been to but have always wondered what's there? Now's the time to check it out!",
    categories: ['wild'],
    image: road,
    reviews: []
  },
  {
    title: 'Play Tourist in Your Own City',
    description: "Go to all the tourist location's in our City!",
    categories: ['wild'],
    image: tourist,
    reviews: []
  },
  {
    title: 'See a Concert',
    description: 'Check out your local concerts and find one to attend!',
    categories: ['wild'],
    image: concert,
    reviews: []
  },
  {
    title: 'Swap Hobbies',
    description: 'Get to know your partners interests more by doing them! Split the day up doing each others favorite thing!',
    categories: ['indoors'],
    image: hobbies,
    reviews: []
  },
  {
    title: 'Metal Detector',
    description: 'Buy or rent a metal detector and go see what you can find.',
    categories: ['outdoors'],
    image: detector,
    reviews: []
  },
  {
    title: 'Water Park',
    description: 'Find a water park or local pull and enjoy a nice refreshing swim.',
    categories: ['outdoors'],
    image: waterPark,
    reviews: []
  },
  {
    title: 'Start a garden',
    description: 'Start a garden together.',
    categories: ['home'],
    image: garden,
    reviews: []
  },
  {
    title: 'Disc Golf',
    description: 'Find a place to play some Disc Golf.',
    categories: ['outdoors'],
    image: disc,
    reviews: []
  },
  {
    title: 'Legos',
    description: 'Check out the show Lego Masters and then see if you too can become a master! Buy a set and have some fun.',
    categories: ['home'],
    image: lego,
    reviews: []
  },
  {
    title: 'Cardboard War',
    description: 'Make your own cardboard weapons/ armor, then fight and see who wins!',
    categories: ['home'],
    image: cardboard,
    reviews: []
  },
  {
    title: 'Pottery',
    description: 'Take some pottery classes, or go to a paint your own pottery store',
    categories: ['indoors'],
    image: pottery,
    reviews: []
  },
  {
    title: 'Zoo',
    description: "Who doesn't love the zoo! Take a trip to your local zoo and admire all the animals",
    categories: ['outdoors'],
    image: zoo,
    reviews: []
  },
  {
    title: 'Spa Night',
    description: 'Hit up the drugstore for face masks, mani-pedi supplies and massage oil for a DIY pampering session that will improve your bond and your skin. ',
    categories: ['romantic'],
    image: spa,
    reviews: []
  },
  {
    title: 'Mexican food',
    description: 'Go to any restaurant/ fast food that service Mexican food',
    categories: ['food'],
    image: mexican,
    reviews: []
  },
  {
    title: 'Italian food',
    description: 'Find an Italian restaurant, and enjoy a delicious Dinner! Or get some Gelato! ',
    categories: ['food'],
    image: italian,
    reviews: []
  },
  {
    title: 'Chinese food',
    description: 'Get some chinese food to satisfy that hunger!',
    categories: ['food'],
    image: chinese,
    reviews: []
  },
  {
    title: 'Thai food',
    description: 'Find A Thai restaurant near you!',
    categories: ['food'],
    image: thai,
    reviews: []
  },
  {
    title: 'BBQ',
    description: "Don't be afraid to get dirty as you dive into some amazing tender BBQ!",
    categories: ['food'],
    image: bbq,
    reviews: []
  }
];

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/rendatevous',
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


