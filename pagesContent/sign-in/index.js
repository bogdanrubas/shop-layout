import React from 'react';
import LargeForm from './LargeForm';
import SmallForm from './SmallForm';
import { Wrapper } from './styles';

export default class PageSignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      large: {
        defaultStyles: {
          width: 600,
          height: 360,
          shouldFlip: false,
        },
        remindPasswordStyles: {
          width: 350,
          height: 305,
          shouldFlip: true,
        },
        signInStyles: {
          width: 350,
          height: 365,
          shouldFlip: true,
        },
        signUpStyles: {
          width: 760,
          height: 420,
          shouldFlip: true,
        },
        signUpInfoData: [
          {
            title: 'Dane osobowe',
            description:
              'Wypełnij formularz po lewej. Zawsze możesz edytować dane w ustawieniach konta.',
            inputs: [
              {
                gridArea: 'email',
                type: 'text',
                placeholder: 'Podaj swój e-mail',
                label: 'E-mail',
                delay: 650,
              },
              {
                gridArea: 'repeatEmail',
                type: 'text',
                placeholder: 'Powtórz swój e-mail',
                label: 'Powtórz e-mail',
                delay: 650,
              },
              {
                gridArea: 'password',
                type: 'password',
                placeholder: 'min. 6 znaków',
                label: 'Hasło',
                delay: 680,
              },
              {
                gridArea: 'repeatPassword',
                type: 'password',
                placeholder: 'min. 6 znaków',
                label: 'Powtórz hasło',
                delay: 680,
              },
              {
                gridArea: 'phoneNumber',
                type: 'text',
                placeholder: '',
                label: 'Numer telefonu',
                delay: 710,
              },
            ],
            gridAreaTemplates:
              "'email email email email email email' 'repeatEmail repeatEmail repeatEmail repeatEmail repeatEmail repeatEmail' 'password password password repeatPassword repeatPassword repeatPassword' 'phoneNumber phoneNumber phoneNumber phoneNumber phoneNumber phoneNumber'",
          },
          {
            title: 'Płatność',
            description:
              'Jeśli chcesz płacić za zakupy kartą, to prosimy o podanie danych.',
            inputs: [
              {
                gridArea: 'cardHodler',
                type: 'text',
                placeholder: 'np. Jan Kowalski',
                label: 'Dane posiadacza',
                delay: 0,
              },
              {
                gridArea: 'cardNumber',
                type: 'text',
                placeholder: 'np. 0000 1111 2222 3333',
                label: 'Numer karty',
                delay: 0,
              },
              {
                gridArea: 'expirationDate',
                type: 'text',
                placeholder: 'np. 01/01',
                label: 'Data ważności',
                delay: 0,
              },
              {
                gridArea: 'ccv',
                type: 'text',
                placeholder: 'np. 123',
                label: 'Kod CCV',
                delay: 0,
              },
            ],
            gridAreaTemplates:
              "'cardHodler cardHodler cardHodler cardHodler cardHodler cardHodler' 'cardNumber cardNumber cardNumber cardNumber cardNumber cardNumber' 'expirationDate expirationDate expirationDate ccv ccv ccv'",
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
                gridArea: 'houseNumber',
                type: 'text',
                placeholder: '',
                label: 'Numer domu',
                delay: 0,
              },
              {
                gridArea: 'apartamentNumber',
                type: 'text',
                placeholder: '',
                label: 'Numer lokalu',
                delay: 0,
              },
            ],
            gridAreaTemplates:
              "'town town town town town town' 'street street street street street street' 'houseNumber houseNumber houseNumber apartamentNumber apartamentNumber apartamentNumber'",
          },
          {
            title: 'Weryfikacja',
            description:
              'To już ostatni krok. Sprawdź skrzynkę pocztową i wprowadź kod weryfikacyjny.',
            inputs: [
              {
                gridArea: 'verification',
                type: 'text',
                placeholder: '',
                label: 'Kod weryfikacyjny',
                delay: 0,
              },
            ],
            gridAreaTemplates:
              "'verification verification verification verification verification verification'",
          },
        ],
      },
      small: {
        signUpActualForm: 1,
        signUpInfoData: [
          {
            title: 'Dane osobowe',
            description:
              'Wypełnij formularz po lewej. Zawsze możesz edytować dane w ustawieniach konta.',
            inputs: [
              {
                gridArea: 'email',
                type: 'text',
                placeholder: 'Podaj swój e-mail',
                label: 'E-mail',
                delay: 650,
              },
              {
                gridArea: 'repeatEmail',
                type: 'text',
                placeholder: 'Powtórz swój e-mail',
                label: 'Powtórz e-mail',
                delay: 650,
              },
              {
                gridArea: 'password',
                type: 'password',
                placeholder: 'min. 8 znaków',
                label: 'Hasło',
                delay: 680,
              },
              {
                gridArea: 'repeatPassword',
                type: 'password',
                placeholder: 'min. 8 znaków',
                label: 'Powtórz hasło',
                delay: 680,
              },
              {
                gridArea: 'phoneNumber',
                type: 'text',
                placeholder: '',
                label: 'Numer telefonu',
                delay: 710,
              },
            ],
            gridAreaTemplates:
              "'email email email email email email' 'repeatEmail repeatEmail repeatEmail repeatEmail repeatEmail repeatEmail' 'password password password repeatPassword repeatPassword repeatPassword' 'phoneNumber phoneNumber phoneNumber phoneNumber phoneNumber phoneNumber'",
          },
          {
            title: 'Płatność',
            description:
              'Jeśli chcesz płacić za zakupy kartą, to prosimy o podanie danych.',
            inputs: [
              {
                gridArea: 'cardHodler',
                type: 'text',
                placeholder: 'Jan Kowalski',
                label: 'Dane posiadacza',
                delay: 0,
              },
              {
                gridArea: 'cardNumber',
                type: 'text',
                placeholder: '0000 1111 2222 3333',
                label: 'Numer karty',
                delay: 0,
              },
              {
                gridArea: 'expirationDate',
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
            gridAreaTemplates:
              "'cardHodler cardHodler cardHodler cardHodler cardHodler cardHodler' 'cardNumber cardNumber cardNumber cardNumber cardNumber cardNumber' 'expirationDate expirationDate expirationDate ccv ccv ccv'",
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
                gridArea: 'houseNumber',
                type: 'text',
                placeholder: '',
                label: 'Numer domu',
                delay: 0,
              },
              {
                gridArea: 'apartamentNumber',
                type: 'text',
                placeholder: '',
                label: 'Numer lokalu',
                delay: 0,
              },
            ],
            gridAreaTemplates:
              "'town town town town town town' 'street street street street street street' 'houseNumber houseNumber houseNumber apartamentNumber apartamentNumber apartamentNumber'",
          },
          {
            title: 'Weryfikacja',
            description:
              'To już ostatni krok. Sprawdź skrzynkę pocztową i wprowadź kod weryfikacyjny.',
            inputs: [
              {
                gridArea: 'verification',
                type: 'text',
                placeholder: '',
                label: 'Kod weryfikacyjny',
                delay: 0,
              },
            ],
            gridAreaTemplates:
              "'verification verification verification verification verification verification'",
          },
        ],
      },
    };
  }

  componentWillMount() {
    // if ((localStorageEnabled = !!localStorage)) {
    //   localStorage.token !== undefined ? redirect({}, '/account') : null;
    // }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleChange = name => event => {
    // more logic here as per the requirement
    this.setState({
      [name]: event.target.value,
    });

    console.log(this.state);
  };

  resize = () => this.forceUpdate();

  render() {
    const { large, small } = this.state;
    return (
      <Wrapper>
        <LargeForm large={large} />
        <SmallForm
          signUpActualForm={small.signUpActualForm}
          signUpInfoData={small.signUpInfoData}
        />
      </Wrapper>
    );
  }
}
