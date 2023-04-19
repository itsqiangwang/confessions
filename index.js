var body = document.getElementById("body");
var audio = document.getElementById("audio");
var image = document.getElementById("image");
var writingOnTheWall = document.getElementById("writing-on-the-wall");
var wallWritingArr = [
  "i wrote on the wall. you read it.",
  "the only thing that interferes with my learning is my education",
  "decline is upon us.",
  "this is an experiment to see if writing on this wall helps me to find a sense of cultural ownership. maybe?",
  "misery is our lot. misery!",
  "terrible place for a wednesday. look to your left.",
  "i'm so fed up with yale liberals.",
  "workers of the world unite, you have nothing to lose but your boredom",
  "a golden cage is still a cage",
  "sometimes i am afraid that i only live and do what i do out of fear.",

  "the medium is the message. you are exactly the same as them. and so am i.",
  "if you are here after the apocalypse, was it a pathogen or the power grid? or sea levels? asteroid?",
  "he say he not queer, but he is!",
  "you make dogma to yourself.",
  "let go or be dragged",
  "gravity doesn't really exist. the earth sucks.",
  "good times for change. see the life i've had. can make a good man bad. so please, please, please, let me get what i want this time. lord knows it could be the first time.",
  "the earth is flat, by the way.",
  "it's beautiful outside. fuck my life.",
  "for now, the sky is still blue outside, but soon, all will be grey. as time slides on, this message, too, will dry and fade away. so, worry less about the fate tomorrow has in store. you've found a moment that belongs to you forever more.",

  "i love you. you love me not.",
  "they call you heartless. but you have a heart and i love you for being ashamed to show it.",
  "help!",
  "why is my knee jerk reaction to love always fear or disgust?",
  "i brought a bottle of 100% pure maple syrup into the dining hall, because the fake syrup sucks and now i have spilled 100% pure maple syrup all over the inside of my bag.",
  "people say nothing is impossible, but i do nothing everyday",
  "pain is temporary",
  "the other day i went back to my mother and i said, \"i'm crazy, mom. help me\". And she said, \"i know how you feel, son. cause it runs in the family.\"",
  "we too shall pass",
  "remember what happened in shanghai, china",

  "but no one dared disturb the sound of silence.",
  "tell me a secret",
  "why do people feel the need to write such terrible poetry on this surface?",
  "when i think back on all the crap i learned in high school, it's a wonder i can think at all.",
  "forget love. think sex.",
  "i love all the people too cool to speak to me.",
  "in twelve days, it won't matter a bit what i did here, because i'll be home. make that two days.",
  "work!",
  "you is kind. you is smart. you is important.",
  "i wonder what letters traveled these walls a hundred years ago.",

  "something about high, lonely places makes you want to write profundities.",
  "why does love equal pain?",
  "you can't always get what you want",
  "academic weapon",
  "trust no body but yourself",
  "i command you to grow",
  "you're not my superior",
  "i have always gotten through.",
  "this shit is hard",
  "i am afraid none of my friends like me anymore.",

  "do you know how hard it is being alone in america? my parents don't even speak english and i managed to put myself through this fucking college. help your international friends. culture shock is a mother fucker.",
  "be a bad bitch",
  "pussy and religion is all i need",
  "everything everywhere all at once",
  "move over straighty, the gays are in town",
  "masculinity is a good, and femininity is equally good. but they are different. each has a different role to play in society.",
  "why do all the boys here suck?",
  "the best lack all conviction, while the worst are full of passionate intensity.",
  "the lord is with you as long as you are with him. if you look for him he will let you find him, but you turn away, he will abandon you.",
  "less is not more. never was, never will be. less is less. damn it!",

  "Y.P.M.B. Young people masquerading as buddies.",
  "sex kills. so go to yale and live forever.",
  "if graffiti were legalized or encouraged, would the quality of the writings, that is, the thoughts on these walls, improve, or is what's here really representative of yale?",
  "men are idiots, women are stupid",
  "i'm still a virgin",
  "come to the dyke side.",
  "damn the man. save the empire.",
  "fat girls unite.",
  "go back to under the bridge. fuck trolls",
  "socialism sucks",

  "it's wrong to bring unwanted children into this world",
  "my birth was unplanned. but i'm glad my mama didn't abort me.",
  "which circle of paradise are we in?",
  "fuck education, i'll forget most of this shit in a few months. but not the people.",
  "i'd rather be in that mysterious chimney hole outside this window.",
  "knowledge is beautiful and empowering. this will pay off.",
  "goodbye, will, it's time i let go of this. i will miss you but i'm too tired. love long time.",
  "November 22. It was a sunny chilly evening, and on the other side, sat the one who got away.",
  "greatest fears. 1, death. 2, failing.",
  "my panic attacks will get better. I will do well on this test. love will come my way. i will be happy.",

  "when? never",
  "why is everyone afraid of giving last names?",
  "if it's raining, then there is water. if it's not raining, there isn't water. A=B, ergo, tilde A = tilde B. isn't logic beautiful?",
  "i was empty for a while, but now i'm full again.",
  "i have a crush on this really pretty girl named Jamie, should i full send and tell or try to wait it out and play the long game?",
  "ideal woman, 5 ft 3, 225 lbs.",
  "title ix is a sham, but change makers never give up!",
  "don't let the bastards get you down",
  "hear all sides, obey no one.",
  "i am tired, i am weary, i could sleep a thousand years.",

  "my heart aches, and a dreary numbness pains my sense.",
  "i am going to be president some day, count on it.",
  "you can't tell me what to do",
  "it's a trap!",
  "i have more conversations in my head than i do in real life",
  "be the cliche advice you never want to get in the world",
  "evidently you were not given enough self worth",
  "fucking fairies, all of you.",
  "maybe there is something in all of this i missed, but if it's selfless love you are looking for, you've got the wrong goddess.",
  "god loves fags",

  "keep abortions safe and legal",
  "youth is truth. i wish old rhymes with lies.",
  "things will shortly get completely out of hand. ",
  "when i'm happy i can't stop thinking about how nice it would be to die then with a smile on my face.",
  "slay the capitalist, imperialist infidels!",
  "neoplatonism, now!",
  "socialism, now!",
  "i've been the year 3000. not much has changed, but they live underwater.",
  "listen, world. i am falling apart.",
  "happiness is a state of mind",

  "early worm gets the bird.",
  "and they were roommates",
  "you know what's hot? consensual, respectful, mutually pleasurable sex. try it.",
  "help!",
  "i wish time went slower or maybe faster. but right now it's just plain wrong.",
  "do you feel completely inadequate in all aspects of your life?",
  "i think i'm gay. November 17th, 99. I've changed my mind. January 17th, 2000. Changed again, August 22, 05.",
  "if at first you don't succeed, cheat. cheat until caught. then lie.",
  "this is the song of a genius child. sing it softly for the song is wild. sing it softly as ever you can. lest the song get out of hand. nobody loves a genius child. nobody loves an eagle, tamed or wild. wild or tamed, nobody loves a monster of a frightening name. nobody loves a genius child. kill him, and let his soul run wild.",
  "slay, queen!",

  "the notion of happiness lacks philosophical exactitude. there is agreement neither on its substance nor its source.",
  "why are the people here so bitchy?",
  "i believe in the myth of femininity.",
  "i believe in the myth of unintentional celibacy.",
  "yeah, i like life, too."
]

function voicesOnTheWall(){
    var totalWritingNum = 125;
    var randomIndex = Math.floor(Math.random() * ((totalWritingNum+1) - 1) + 1);
    audio.src = "audio/writings-on-the-wall-whispers-" + randomIndex + ".mp3";
    audio.autoplay = true;
    image.src = "images/yale-student-linkedin-photo-" + randomIndex + ".jpg";
    writingOnTheWall.innerText = wallWritingArr[randomIndex-1];
    console.log(randomIndex);

    // audio on mobile 
    body.addEventListener('click', function(e){
      audio.play();
      audio.autoplay = true;
    })
}

voicesOnTheWall();