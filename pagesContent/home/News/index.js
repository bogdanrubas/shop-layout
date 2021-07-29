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
    thumbnails: PropTypes.array.isRequired,
  };

  constructor() {
    super();

    this.state = {
      activeThumbnail: 0,
      previousThumbnail: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);

    function renderContentFunction() {
      const { thumbnails } = this.props;
      const { activeThumbnail } = this.state;

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

  renderContent = () => {};

  resize = () => this.forceUpdate();

  changeThumbnail = i => {
    const { activeThumbnail } = this.state;
    // this.forceUpdate();
    // var smallNode = ReactDOM.findDOMNode(this.refs['thumbnailRef' + i]);
    // var bigNode = ReactDOM.findDOMNode(this.refs['thumbnailRef0']);
    //
    // var smallThumbnail = {
    //   width: smallNode.offsetWidth,
    //   height: smallNode.offsetHeight,
    //   left: smallNode.offsetLeft,
    //   top: smallNode.offsetTop,
    //   background: "red"
    // }
    //
    // var bigThumbnail = {
    //   width: bigNode.offsetWidth,
    //   height: bigNode.offsetHeight,
    //   left: bigNode.offsetLeft,
    //   top: bigNode.offsetTop
    // }

    this.setState({
      previousThumbnail: activeThumbnail,
      activeThumbnail: i,
    });

    // setTimeout(() => {
    //   console.log(this.state.activeThumbnailStyles);
    // }, 10)
  };

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

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default News;
