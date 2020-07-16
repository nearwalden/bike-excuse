function Excuse() {

  var myDog = ['My ass hurts.',
          'Because Pokey.',
          'Gravel bikes are less efficient than road bikes.',
          'My knee injury is flaring up.','I forgot to eat breakfast.',
          'I forgot to eat lunch.','I ate something that upset my stomach.',
          'I did not get enough sleep last night.',
          'There is a funny sound in my bottom bracket.',
          'My chain needs lubrication.',
          'I have been training at sea level.',
          'This heat is too much.',
          'It is too cold.',
          'I need new cycling shoes.',
          'I have plantar fasciitis .',
          'My rotator cuff injury is acting up.',
          'I forgot my good sunglasses.',
          'This trail is too rocky.',
          'My derailleur needs adjustment.',
          'My seat is too high.',
          'My seat is too low.',
          'There is too much wind.',
          'I forgot my jacket.',
          'I forgot my gloves.',
          'I forgot my hat.',
          'I am dehydrated.',
          'I am over Hydrated.',
          'I ate too much.',
          'I ate too little.',
          'My elbow hurts.',
          'My shoulder hurts.',
          'My knee hurts.',
          'My hip hurts.',
          'My finger hurts.',
          'My head hurts.',
          'My neck hurts.',
          'My ankle hurts.',
          'I am having a bad reaction to medication.',
          'My toe hurts.',
          'I am just getting over a cold.',
          'I am just getting over the flu.',
          'I just got off a plane.',
          'I had a long car trip.',
          'I just woke up.','I am tired.',
          'I am hungry.',
          'I have a headache.',
          'The road is full of debris.',
          'There are too many bugs.',
          'I forgot my prescription glasses.',
          'I have saddlesores.',
          'I have blisters.',
          'My gender unit is bleeding.',
          'I have a sunburn.',
          'I have a windburn.',
          'I have a rash.',
          'It is too cloudy.',
          'It is too sunny.',
          'It is too windy.',
          'I have new cycling shoes.',
          'I have new tires.',
          'I have new gloves.',
          'I have new glasses.',
          'I am not used to my new bike.',
          'I have a new knee.',
          'I have a new hip.',
          'I have tendonitis.',
          'I have bursitis.',
          'My tire pressure is too low.',
          'Because Pokey.'];
  
  // var ate = ['ate', 'peer-reviewed', 'destroyed', 'deleted', 'erased', 'remixed', 'twitched', 'recycled', 'livetweeted', 'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed', 'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
  
  // var myHomework = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post', 'comment'];

  function pickRandom(wordArray) {
    var randomNumber = Math.round(Math.random() * wordArray.length);
    return wordArray[randomNumber];
  }

  var newExcuse = pickRandom(myDog);
  document.getElementById('excuses').innerHTML = newExcuse;

}
