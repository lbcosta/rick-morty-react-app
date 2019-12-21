import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { CardGrid, Card, Header, PageNumber } from './styles';

function getClickablePages(actualPage) {
  const offsets = [0, 1, 2, 3, 4];
  return offsets.map(number => parseInt(actualPage, 10) + number);
}

function getPage(direction, actualPage) {
  const nextPage = parseInt(actualPage, 10) + direction;

  return nextPage >= 0 ? nextPage : 1;
}

export default function Home({ match }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const clickablePages = getClickablePages(Number(match.params.page) || 1);
  const page = Number(match.params.page) || 1;

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const apiResponse = await api.get(`/?page=${page}`);

      setCharacters(apiResponse.data.results);
      setLoading(false);
    }

    loadData();
  }, [match.params.page]);

  function setDisplayEpisodes(id) {
    setCharacters(
      characters.map(char =>
        char.id === id
          ? { ...char, displayEpisodes: !char.displayEpisodes }
          : char
      )
    );
  }

  return (
    <>
      <Header>
        <header>
          <h1>
            Rick & Morty <span>React</span> App
          </h1>
        </header>
        <ul>
          <Link to={`/${getPage(-1, page)}`}>
            <li> prev </li>
          </Link>
          {clickablePages.map(pageNumber => (
            <Link to={`/${pageNumber}`} key={pageNumber}>
              <PageNumber actualPage={pageNumber === page}>
                {pageNumber}
              </PageNumber>
            </Link>
          ))}
          <Link to={`/${getPage(1, page)}`}>
            <li> next </li>
          </Link>
        </ul>
      </Header>
      <CardGrid>
        {loading ? (
          <p>Loading...</p>
        ) : (
          characters.map(char => (
            <Card
              key={char.id}
              onClick={() => setDisplayEpisodes(char.id)}
              displayEpisodes={char.displayEpisodes}
            >
              <img src={char.image} alt={char.name} />
              <section>
                <header>
                  <h1>
                    <span>{char.id}</span> {char.name}
                  </h1>
                  <h3>
                    {char.species} - {char.status}
                  </h3>
                </header>
              </section>
              <ul>
                <p>Episodes:</p>
                {char.episode
                  .map(epi => epi.split('/episode/')[1])
                  .map(epi => (
                    <li key={char.id + epi}>{epi}</li>
                  ))}
              </ul>
            </Card>
          ))
        )}
      </CardGrid>
    </>
  );
}
