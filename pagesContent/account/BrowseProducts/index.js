import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Card from './Card';

export default class BrowseProducts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          text: 'Przeglądaj Buty',
          url: 'products',
          background:
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
        },
        {
          text: 'Przeglądaj Odzież',
          url: 'products',
          background:
            'https://images.unsplash.com/photo-1548774104-454b0d918b41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80',
        },
        {
          text: 'Przeglądaj Akcesoria',
          url: 'products',
          background:
            'https://images.unsplash.com/photo-1549876612-f9ea53d45266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        },
      ],
    };
  }

  render() {
    const {
      cards,
    } = this.state;

    return (
      <Wrapper>
        {cards.map((card, i) => (
          <Card
            key={i}
            text={card.text}
            url={card.url}
            background={card.background}
          />
        ))}
      </Wrapper>
    );
  }
}
