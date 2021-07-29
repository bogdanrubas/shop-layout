import React, { Component } from 'react';
import { Wrapper, PageInfo } from './styles';
import Button from '../../layout/Button';
import Container from './Container';

export default class PageAccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: 'Dane osobowe',
          inputs: [
            {
              gridArea: 'email',
              type: 'text',
              placeholder: '',
              label: 'E-mail',
              delay: 650,
            },
            {
              gridArea: 'phone-number',
              type: 'text',
              placeholder: '',
              label: 'Numer telefonu',
              delay: 650,
            },
          ],
          gridTemplateColumns: {
            tabletLandscape: '1fr 1fr',
            smallDesktopUp: '1fr 1fr 1fr 1fr',
          },
          gridTemplateAreas: {
            tabletLandscape: "'email phone-number'",
            smallDesktopUp: "'email phone-number . .'",
          },
        },
        {
          title: 'Hasło',
          inputs: [
            {
              gridArea: 'password1',
              type: 'password',
              placeholder: 'Podaj stare hasło',
              label: 'Stare hasło',
              delay: 650,
            },
            {
              gridArea: 'password2',
              type: 'password',
              placeholder: 'Podaj nowe hasło',
              label: 'Nowe hasło',
              delay: 650,
            },
            {
              gridArea: 'password3',
              type: 'password',
              placeholder: 'Ponownie podaj nowe hasło',
              label: 'Powtórz nowe hasło',
              delay: 650,
            },
          ],
          gridTemplateColumns: {
            tabletLandscape: '1fr 1fr',
            smallDesktopUp: '1fr 1fr 1fr 1fr',
          },
          gridTemplateAreas: {
            tabletLandscape: "'password1 password2' 'password3 .'",
            smallDesktopUp: "'password1 password2 password3 .'",
          },
        },
        {
          title: 'Płatność',
          inputs: [
            {
              gridArea: 'card-hodler',
              type: 'text',
              placeholder: 'Jan Kowalski',
              label: 'Dane posiadacza',
              delay: 0,
            },
            {
              gridArea: 'card-number',
              type: 'text',
              placeholder: '0000 1111 2222 3333',
              label: 'Numer karty',
              delay: 0,
            },
            {
              gridArea: 'expiration-date',
              type: 'text',
              placeholder: '01/01',
              label: 'Data ważności',
              delay: 0,
            },
            {
              gridArea: 'ccv',
              type: 'text',
              placeholder: '123',
              label: 'Kod CCV',
              delay: 0,
            },
          ],
          gridTemplateColumns: {
            tabletLandscape: '1fr 1fr',
            smallDesktopUp: "'1fr 1fr 1fr 1fr'",
          },
          gridTemplateAreas: {
            tabletLandscape: "'card-hodler card-number' 'expiration-date ccv'",
            smallDesktopUp: "'card-hodler card-number expiration-date ccv'",
          },
        },
        {
          title: 'Adres dostawy',
          description:
            'Zamierzasz zamawiać produkty do domu? Możesz już teraz podać adres dostawy.',
          inputs: [
            {
              gridArea: 'town',
              type: 'text',
              placeholder: '',
              label: 'Miasto',
              delay: 0,
            },
            {
              gridArea: 'street',
              type: 'text',
              placeholder: '',
              label: 'Ulica',
              delay: 0,
            },
            {
              gridArea: 'house-number',
              type: 'text',
              placeholder: '',
              label: 'Numer domu',
              delay: 0,
            },
            {
              gridArea: 'apartament-number',
              type: 'text',
              placeholder: '',
              label: 'Numer lokalu',
              delay: 0,
            },
          ],
          gridTemplateColumns: {
            tabletLandscape: '1fr 1fr',
            smallDesktopUp: '1fr 1fr 1fr 1fr',
          },
          gridTemplateAreas: {
            tabletLandscape: "'town street' 'house-number apartament-number'",
            smallDesktopUp: "'town street house-number apartament-number'",
          },
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Wrapper>
        <PageInfo>
          <h1>Ustawienia</h1>
          <small>Tutaj możesz zmienić swoje dane oraz hasło.</small>
        </PageInfo>
        {data.map((item, i) => (
          <Container
            key={i}
            title={item.title}
            inputs={item.inputs}
            gridTemplateColumns={item.gridTemplateColumns}
            gridTemplateAreas={item.gridTemplateAreas}
          />
        ))}

        <Button value="Zapisz" />
      </Wrapper>
    );
  }
}
