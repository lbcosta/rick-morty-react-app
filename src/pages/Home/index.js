import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { CardGrid, Card } from './styles';

export default function Home({match}) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  //**id**, **name**, **status**, **species** e **image**.

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const page = match.params.page;
      const apiResponse = await api.get(page ? `/?page=${page}` : '')

      setCharacters(apiResponse.data.results)
      setLoading(false)
    }

    loadData();
  })

  return (
    <CardGrid>
      {characters.map(char => 
        <Card key={char.id}>
          <img src={char.image} alt={char.name}/>
          <section>
            <header>
              <h1><span>{char.id}</span> {char.name}</h1>
              <h3>{char.species} - {char.status}</h3>
            </header>
            {/* <ul>
              {char.episode.map(epi => 
                <li>{epi}</li>  
              )}
            </ul> */}
          </section>
        </Card> 
      )}
    </CardGrid>
  );
}
