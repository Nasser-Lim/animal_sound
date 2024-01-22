const express = require('express');
const app = express();

const animalSounds = {
  dog: '멍멍',
  cat: '야옹',
  pig: '꿀꿀'
};

app.get('/animal-sound/:animal_name', (req, res) => {
  const animalName = req.params.animal_name;
  const sound = animalSounds[animalName];

  if (sound) {
    res.send(`The sound of a ${animalName} is "${sound}".`);
  } else {
    res.send('동물 소리를 찾을 수 없음');
  }
});

const port = 80;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
