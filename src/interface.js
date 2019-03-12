//Dummy Data//
var stories =[
  {
    id: "Boots",
    title: "Boots The Cat",
    text: "This is a story about Boots the Cat.  Boots the cat was a silly cat who slept too much. One day boots woke up from a nap to find a mouse looking him in the eyes.",
    child_story: [
      {
        id: "option_a_1",
        title: "Boots catches the mouse",
        text: "The poor mouse look terrified and Boots saw this as his chance to pounce.  In a flash, Boots caught the mouse who was now trembling with fear.",
        child_story: [
          {
            id: "option_b_1",
            title: "Boots releases the mouse",
            text: "Boots saw how scared the mouse was so he releases the mouse."
          }
        ]
      },
      {
        id: "option_a_2",
        title: "Boots befriends the mouse",
        text: "The poor mouse was trembling with fear, certain he was a goner.  But instead of pouncing, Bootsie smiles and greets the mouse."
      }
    ]
  },
  {
    id: "Rufus",
    title: "Rufus The Dog Goes To The Park",
    text: "It was a beautiful sunny morning and Rufus the dog had been waiting patiently by the front door for so long he had fallen asleep.  Suddenly he heard the jingle of his leash and the foot steps of his owner.  He jumped up with his tail wagging, it was finally time to go to the park!",
    child_story: [
      {
        id: "option_a_1",
        title: "Rufus meets another dog",
        text: "Rufus's owner quickly leashed him up and they both headed to the park.  As soon as they arrived, Rufus noticed a dog he's never seen before."
      },
      {
        id: "option_a_2",
        title: "Rufus chases a butterfly",
        text: "Refus's owner takes him to the park.  As soon as they arrive his owner takes him off his leash.  The only problem is that Rufus immediately spots a butterfly and takes off running after it"
      }
    ]
  }
]

export function getStories(callback) {
  callback(stories);
}

export function getStory(id, callback) {
  for(var i = 0; i<stories.length; i++){
    if(stories[i].id === id){
      callback(story);
    }
  }
  callback(null);
}

export function addStory(parent_id, story, callback) {

}

