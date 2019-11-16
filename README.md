# crazy-quotes

Quotes you find here are from the best-loved characters in the motion pictures history!

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install crazy-quotes.

```bash
npm i crazy-quotes
```

## Usage

```javascript
const cq = require('crazy-quotes');

let type = 'Movie' || 'TV' || 'Anime'; //string
//Default type is 'Movie'

let count = 4; //Integer

cq.oneQuote(type); || cq.oneQuote();
//returns
{ quote: 'Now, young Skywalker, you will die.',
  character: 'Emperor Palpatine',
  spokeIn: 'Star Wars',
  type: 'Movie' }

cq.someQuote(count);
//returns
[ { quote: 'Now, young Skywalker, you will die.',
    character: 'Emperor Palpatine',
    spokeIn: 'Star Wars',
    type: 'Movie' },
  { quote: 'In my experience there is no such thing as luck.',
    character: 'Obi-Wan Kenobi',
    spokeIn: 'Star Wars',
    type: 'Movie' },
  { quote: 'Be careful not to choke on your aspirations.',
    character: 'Darth Vader',
    spokeIn: 'Star Wars',
    type: 'Movie' },
  { quote:
     'You’re coming with me. I’ll not leave you here, I’ve got to save you.',
    character: 'Luke Skywalker',
    spokeIn: 'Star Wars',
    type: 'Movie' } ]

cq.allQuote(type);
//returns all quotes matching the type passed in
```

## Contributing
Pull requests are welcome.

## License
[ISC](https://www.isc.org/licenses/)
