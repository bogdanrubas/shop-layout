import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BigImage, BigImageContent, Button, Card, CardContainer, CardDescription, CardTitle, Grid, Scroll, Thumbnail, ThumbnailBackground, ThumbnailDescription, Thumbnails, ThumbnailTitle, Title, Wrapper } from './styles';

interface NewsProps {
}

const News: React.FunctionComponent<NewsProps> = () => {
  const [state, setState] = useState({
    activeThumbnail: 0,
    previousThumbnail: undefined,
  }),
    [windowWidth, setWindowWidth] = useState(0),
    [thumbnails, setThumbnails] = useState([
    // <BigImage>
    {
      title: 'Poczuj wygodę z nowymi butami Adidas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eos recusandae porro perspiciatis enim repellat! Voluptates quo, et doloremque ipsum pariatur? Tenetur dolorem nihil distinctio placeat cum nisi quibusdam aut?',
      background:
        'https://images.unsplash.com/photo-1515780244948-9e4ea7fb969d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      url: '/',
    },
    // </BigImage>
    {
      title: 'Nowe bluzy od Nike',
      description: 'Od 25 stycznia dostępne są nowe bluzy firmy Nike',
      background:
        'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
      url: '/',
    },
    {
      title: 'Nowe buty z serii Air Force',
      description: 'Nowy rok - nowe buty z serii Air Force od Nike',
      background:
        'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      url: '/',
    },
    {
      title: 'Weekend z New Balance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, veritatis.',
      background:
        'https://images.unsplash.com/photo-1529434084385-2cf52de9b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      url: '/',
    },
    {
      title: 'Nowa marka Converse',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, at!',
      background:
        'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      url: '/',
    },
    {
      title: 'Black Friday w styczniu tylko u nas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, deleniti?',
      background:
        'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      url: '/',
    },
    {
      title: 'Wyprzedaż jesiennych kolekcji',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ipsam?',
      background:
        'https://images.unsplash.com/photo-1538368433647-508a4ebade0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      url: '/',
    },
    {
      title: 'Zniżki do 50% na buty Adidas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores.',
      background:
        'https://images.unsplash.com/photo-1511110011044-5ce8fb4e7b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      url: '/',
    },
    {
      title: 'Zniżki do 40% na buty Reebok',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio.',
      background:
        'https://images.unsplash.com/photo-1542325059222-f8a794ccf28d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      url: '/',
    },
  ]);

  function changeThumbnail(i: number) {
    setState({
      ...state,
      // @ts-ignore
      previousThumbnail: state.activeThumbnail,
      activeThumbnail: i
    })
  }

  function resize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return (
    <>
      {windowWidth > 1100 ?
        <Wrapper>
        <Title>Bądź na bieżąco</Title>

        <Grid>
          <Thumbnails>
            {thumbnails.map((thumbnail, i) =>
              i < 4 ? (
                <Thumbnail
                  key={i}
                  active={state.activeThumbnail === i}
                  onClick={() => changeThumbnail(i)}
                >
                  <ThumbnailBackground
                    active={state.activeThumbnail === i}
                    background={thumbnail.background}
                  />
                  <ThumbnailTitle>{thumbnail.title}</ThumbnailTitle>
                </Thumbnail>
              ) : null
            )}
          </Thumbnails>

          <BigImage>
            <ThumbnailBackground
              background={thumbnails[state.activeThumbnail].background}
            />

            <BigImageContent>
              <ThumbnailTitle>
                {thumbnails[state.activeThumbnail].title}
              </ThumbnailTitle>
              <ThumbnailDescription>
                {thumbnails[state.activeThumbnail].description}
              </ThumbnailDescription>
              <Link href={thumbnails[state.activeThumbnail].url}>
                <Button>Pokaż</Button>
              </Link>
            </BigImageContent>
          </BigImage>

          <Thumbnails>
            {thumbnails.map((thumbnail, i) =>
              i > 3 && i < 8 ? (
                <Thumbnail
                  key={i}
                  active={state.activeThumbnail === i}
                  onClick={() => changeThumbnail(i)}
                >
                  <ThumbnailBackground
                    active={state.activeThumbnail === i}
                    background={thumbnail.background}
                  />
                  <ThumbnailTitle>{thumbnail.title}</ThumbnailTitle>
                </Thumbnail>
              ) : null
            )}
          </Thumbnails>
        </Grid>
      </Wrapper>
      :
      <Wrapper>
        <Title>Bądź na bieżąco</Title>

        <Scroll>
          {thumbnails.map((thumbnail, i) => (
            <Card key={i}>
              <ThumbnailBackground background={thumbnail.background} />

              <CardContainer>
                <CardTitle>{thumbnail.title}</CardTitle>
                <CardDescription>{thumbnail.description}</CardDescription>
                <Link href={thumbnail.url}>
                  <Button>Pokaż</Button>
                </Link>
              </CardContainer>
            </Card>
          ))}
        </Scroll>
      </Wrapper>
    }
    </>
  );
};

export default News;