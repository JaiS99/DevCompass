const projectIdeas = [{
    name: "TravelMate",
    description: "An app/website that personally recommends you places to go and things to do!",
  },
  {
    name: "StudyPal",
    description: "A website/app where you can find a study buddy!",
  },
  {
    name: "QuestionSolver",
    description: "An app like Photomath where you can take a picture of any type of question and expect an answer!",
  },{
    name: "FitQuest",
    description: "Virtual Fitness Trainer: An app that provides personalized workout routines and tracks your progress, giving feedback and motivation to help you achieve your fitness goals.",
  },
  {
    name: "LingoPlay",
    description: "Language Learning Game: Create an interactive game that makes language learning enjoyable and immersive, using gamification techniques to engage users in learning new languages.",
  },
  {
    name: "GreenScan",
    description: "Eco-Friendly Shopping Assistant: Develop an app that scans barcodes of products to provide information on their environmental impact, helping users make more sustainable shopping choices.",
  },
  {
    name: "MindCare",
    description: "Mental Health Support Platform: Build a website or app that offers resources, online counseling, and support groups for individuals dealing with mental health challenges.",
  },
  {
    name: "VirtualConnect",
    description: "Virtual Event Platform: Design a platform for hosting and attending virtual events, conferences, and workshops.",
  },

  {
    name: "RecipeMaster",
    description: "An app that suggests recipes and cooking instructions based on the ingredients you have at home!",
  },
  {
    name: "PetPal",
    description: "A social platform where pet owners can connect, share their pets' photos, and exchange pet care tips.",
  },
  {
    name: "EcoWarrior",
    description: "A game app that educates users about environmental issues and encourages eco-friendly actions in real life.",
  },
  {
    name: "DreamSaver",
    description: "An app that helps users record and analyze their dreams to uncover patterns and meanings.",
  },
  {
    name: "TechTutor",
    description: "A website that offers coding tutorials and exercises for beginners to advanced developers.",
  },
  {
    name: "SkillSwap",
    description: "A platform where users can exchange skills with others in their community (e.g., language exchange, guitar lessons).",
  },
  {
    name: "HomeHarmony",
    description: "An app that organizes household chores and schedules to promote harmony among family members.",
  },
  {
    name: "HealthyWallet",
    description: "A budgeting app that tracks expenses and suggests ways to save money while maintaining a healthy lifestyle.",
  },
  {
    name: "GardenGuru",
    description: "An app that provides personalized gardening tips and reminders based on users' plant selections.",
  },
  {
    name: "ARCityTour",
    description: "An augmented reality app that offers interactive city tours with historical and cultural information.",
  },
  {
    name: "HealthGuard",
    description: "A wearable device and app combo that monitors vital signs and alerts emergency contacts in case of health emergencies.",
  },
  {
    name: "MusicMentor",
    description: "An app that offers music lessons, personalized practice schedules, and progress tracking for aspiring musicians.",
  },
  {
    name: "GreenCommute",
    description: "A platform that connects commuters with similar routes to carpool or bike together, reducing carbon emissions.",
  },
  {
    name: "TidyTech",
    description: "An app that helps users declutter and organize their digital files and emails.",
  },
  {
    name: "CampusConnect",
    description: "A social networking app exclusively for students and faculty to connect and collaborate within their campus community.",
  },
  {
    name: "FoodRescue",
    description: "An app that connects restaurants, grocery stores, and individuals to donate surplus food to local food banks.",
  },
  {
    name: "MediMate",
    description: "A medication reminder app with a feature to notify caregivers or family members in case of missed doses.",
  },
  {
    name: "HomeFit",
    description: "An app that provides guided home workout routines and tracks fitness progress with personalized recommendations.",
  },
  {
    name: "HealthyBite",
    description: "A nutrition app that analyzes users' dietary habits and offers personalized meal plans for a healthier lifestyle.",
  },
  {
    name: "EduPlay",
    description: "An educational gaming platform that teaches various subjects through interactive and engaging games.",
  },
  {
    name: "NeighborhoodWatch",
    description: "A community-based app that alerts users about local safety concerns and suspicious activities.",
  },
  {
    name: "MoodJournal",
    description: "An app to track and analyze users' moods, helping them identify emotional patterns and manage stress.",
  },
  {
    name: "ArtGallery360",
    description: "A virtual reality app that offers a 360-degree tour of art galleries and exhibitions worldwide.",
  },
  {
    name: "WasteLess",
    description: "An app that provides tips and challenges to help users reduce waste and adopt eco-friendly habits.",
  },
  {
    name: "FitPet",
    description: "A fitness app designed for pets and pet owners to stay active and healthy together.",
  },
  {
    name: "TravelLocal",
    description: "A platform that promotes local travel experiences and connects travelers with authentic local guides.",
  },
  {
    name: "HomeChef",
    description: "An app that offers virtual cooking classes with professional chefs, teaching users how to prepare gourmet meals at home.",
  },
  {
    name: "AdventureQuest",
    description: "A treasure hunt app that guides users through real-world locations to discover hidden clues and solve puzzles.",
  },
  {
    name: "MindfulTech",
    description: "An app that encourages mindful phone usage and reminds users to take regular breaks from their devices.",
  },
];


const getRandomNumber = (max) =>
Math.floor(Math.random() * max);
   
 const getRandomProject = () => {
    const randomIndex = getRandomNumber(projectIdeas.length);
    const randomProject = projectIdeas[randomIndex];
    return randomProject;
  };

const setRandomProject = () => {
  const randomProject = getRandomProject();
  document.getElementById('getARandomName').innerText = randomProject.name;
  document.getElementById('getARandomDescription').innerText = randomProject.description;

};

document.getElementById('generator').addEventListener('click', setRandomProject);
setRandomProject();
