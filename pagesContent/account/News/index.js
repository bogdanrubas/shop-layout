import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Wrapper,
  Title,
  Grid,
  Thumbnails,
  Thumbnail,
  ThumbnailBackground,
  ThumbnailTitle,
  ThumbnailDescription,
  Button,
  BigImage,
  BigImageContent,
  Card,
  CardContainer,
  Scroll,
  CardTitle,
  CardDescription,
} from './styles';

class News extends Component {
  static propTypes = {
    // thumbnails: PropTypes.array.isRequired,
  };

  constructor() {
    super();

    this.state = {
      activeThumbnail: 0,
      previousThumbnail: undefined,
      thumbnails: [
        // <BigImage>
        {
          title: 'Poczuj wygodę z nowymi butami Adidas',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eos recusandae porro perspiciatis enim repellat! Voluptates quo, et doloremque ipsum pariatur? Tenetur dolorem nihil distinctio placeat cum nisi quibusdam aut?',
          background:
            'https://images.unsplash.com/photo-1515780244948-9e4ea7fb969d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          url: '',
        },
        // </BigImage>
        {
          title: 'Nowe bluzy od Nike',
          description: 'Od 25 stycznia dostępne są nowe bluzy firmy Nike',
          background:
            'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
          url: '',
        },
        {
          title: 'Nowe buty z serii Air Force',
          description: 'Nowy rok - nowe buty z serii Air Force od Nike',
          background:
            'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          url: '',
        },
        {
          title: 'Weekend z New Balance',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, veritatis.',
          background:
            'https://images.unsplash.com/photo-1529434084385-2cf52de9b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          url: '',
        },
        {
          title: 'Nowa marka Converse',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, at!',
          background:
            'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          url: '',
        },
        {
          title: 'Black Friday w styczniu tylko u nas',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, deleniti?',
          background:
            'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          url: '',
        },
        {
          title: 'Wyprzedaż jesiennych kolekcji',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ipsam?',
          background:
            'https://images.unsplash.com/photo-1538368433647-508a4ebade0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          url: '',
        },
        {
          title: 'Zniżki do 50% na buty Adidas',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores.',
          background:
            'https://images.unsplash.com/photo-1511110011044-5ce8fb4e7b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          url: '',
        },
        {
          title: 'Zniżki do 40% na buty Reebok',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio.',
          background:
            'https://images.unsplash.com/photo-1542325059222-f8a794ccf28d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          url: '',
        },
      ],
    };
  }

  componentDidMount() {
    const { activeThumbnail, thumbnails } = this.state;

    window.addEventListener('resize', this.resize);

    function renderContentFunction() {
      if (window.innerWidth > 1100) {
        return (
          <Wrapper>
            <Title>Bądź na bieżąco</Title>

            <Grid>
              <Thumbnails>
                {thumbnails.map((thumbnail, i) =>
                  i < 4 ? (
                    <Thumbnail
                      key={i}
                      active={activeThumbnail === i}
                      onClick={e => this.changeThumbnail(i)}
                    >
                      <ThumbnailBackground
                        active={activeThumbnail === i}
                        background={thumbnail.background}
                      />
                      <ThumbnailTitle>{thumbnail.title}</ThumbnailTitle>
                    </Thumbnail>
                  ) : null
                )}
              </Thumbnails>

              <BigImage>
                <ThumbnailBackground
                  background={thumbnails[activeThumbnail].background}
                />

                <BigImageContent>
                  <ThumbnailTitle>
                    {thumbnails[activeThumbnail].title}
                  </ThumbnailTitle>
                  <ThumbnailDescription>
                    {thumbnails[activeThumbnail].description}
                  </ThumbnailDescription>
                  <Link href={thumbnails[activeThumbnail].url}>
                    <Button>Pokaż</Button>
                  </Link>
                </BigImageContent>
              </BigImage>

              <Thumbnails>
                {thumbnails.map((thumbnail, i) =>
                  i > 3 && i < 8 ? (
                    <Thumbnail
                      key={i}
                      active={activeThumbnail === i}
                      onClick={e => this.changeThumbnail(i)}
                    >
                      <ThumbnailBackground
                        active={activeThumbnail === i}
                        background={thumbnail.background}
                      />
                      <ThumbnailTitle>{thumbnail.title}</ThumbnailTitle>
                    </Thumbnail>
                  ) : null
                )}
              </Thumbnails>
            </Grid>
          </Wrapper>
        );
      }

      if (window.innerWidth <= 1100) {
        return (
          <Wrapper>
            <Title>Bądź na bieżąco</Title>

            <Scroll>
              {thumbnails.map((thumbnail, i) => (
                <Card key={i}>
                  <ThumbnailBackground background={thumbnail.background} />

                  <CardContainer>
                    <CardTitle>{thumbnail.title}</CardTitle>
                    <CardDescription>{thumbnail.description}</CardDescription>
                    <Link to={thumbnail.url}>
                      <Button>Pokaż</Button>
                    </Link>
                  </CardContainer>
                </Card>
              ))}
            </Scroll>
          </Wrapper>
        );
      }
    }

    this.renderContent = renderContentFunction;

    setTimeout(() => {
      this.resize();
    }, 100);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  getStyles = i => {
    const {
      previousThumbnail,
      previousThumbnailStyles,
      activeThumbnail,
      activeThumbnailStyles,
    } = this.state;

    if (i === previousThumbnail) {
      return previousThumbnailStyles;
    }

    if (i === activeThumbnail) {
      return activeThumbnailStyles;
    }
  };

  changeThumbnail = i => {
    const { activeThumbnail } = this.state;

    this.setState({
      previousThumbnail: activeThumbnail,
      activeThumbnail: i,
    });
  };

  renderContent = () => {};

  resize = () => this.forceUpdate();

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default News;
