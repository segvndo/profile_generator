const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileData = {
  name: '',
  activity: '',
  music: '',
  mealTime: '',
  food: '',
  sport: '',
  superpower: ''
};

rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What is an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('Which meal is your favourite?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log(`Hello! I am ${profileData.name}. I like  ${profileData.activity}. I love to listen to ${profileData.music} while ${profileData.activity}. My prefered meal is ${profileData.meal}. My favourite thing to eat during that meal is ${profileData.food}. My favorite sport is ${profileData.sport}. I am so good in ${profileData.superpower} `)
              rl.close();
            })
          })
        })
      })
    })
  })
});

// Focus on the following:
// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function