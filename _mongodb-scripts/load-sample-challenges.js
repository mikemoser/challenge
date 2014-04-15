//local: mongo challenge ~/Projects/challenge/_mongodb-scripts/load-sample-challenges.js

db.challenges.insert({
  title: 'Batman Challenge',
  subtitle: 'Get ripped like a rich guy!',
  days: [
    {
      activities: [
        {
          name: '4 push-ups',  
          description: 'Start in plank position, keep core engaged, go all the way down and lightly touch chest to ground, push back up into plank.'
        },
        {
          name: '8 Mountain Climbers',  
          description: 'Start in plank position, bring knee to chest, keeping butt down, alternating legs like you are running in place.'
        }
      ]
    },
    {
      activities: [
        {
          name: '8 push-ups',  
          description: 'Start in plank position, keep core engaged, go all the way down and lightly touch chest to ground, push back up into plank.'
        },
        {
          name: '16 Mountain Climbers',  
          description: 'Start in plank position, bring knee to chest, keeping butt down, alternating legs like you are running in place.'
        }
      ]
    }
  ]
})