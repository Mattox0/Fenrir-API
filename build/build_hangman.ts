interface postMethod {
  method: string
  headers: {
    'Content-Type': string
    Authorization?: string
  }
  body: string
}

const body: unknown = {
  words: [
    {word: 'test', difficulty: 'easy'},
  ]
}

const init: postMethod = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
};

fetch('http://localhost:5000/hangman', init).then(res => res.json()).then(json => console.log("Le build est terminé !"));