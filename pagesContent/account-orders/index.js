import React, { Component } from 'react';
import { Wrapper } from './styles';
import Empty from './Empty';
import Orders from './Orders';

export default class PageAccountOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      orders: [
        {
          date: '20.12.2018',
          products: [
            {
              name: 'Renew Rival Shield',
              brand: 'Nike',
              price: 359,
              quantity: 2,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/s0dzlgzenxlgo5o4si71/meskie-buty-do-biegania-renew-rival-shield-water-repellent-5qMGSW.jpg',
            },
            {
              name: 'Legend React',
              brand: 'Nike',
              price: 419,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dzjwdzhpry9wraoxhln3/meskie-buty-do-biegania-legend-react-RT1MxD.jpg',
            },
            {
              name: 'Epic React Flyknit',
              brand: 'Nike',
              price: 639,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bcsek7ifebiimlp6qv4f/meskie-buty-do-biegania-epic-react-flyknit-qz0BHb.jpg',
            },
            {
              name: 'Renew Rival Shield',
              brand: 'Nike',
              price: 359,
              quantity: 2,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/s0dzlgzenxlgo5o4si71/meskie-buty-do-biegania-renew-rival-shield-water-repellent-5qMGSW.jpg',
            },
            {
              name: 'Legend React',
              brand: 'Nike',
              price: 419,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dzjwdzhpry9wraoxhln3/meskie-buty-do-biegania-legend-react-RT1MxD.jpg',
            },
            {
              name: 'Epic React Flyknit',
              brand: 'Nike',
              price: 639,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bcsek7ifebiimlp6qv4f/meskie-buty-do-biegania-epic-react-flyknit-qz0BHb.jpg',
            },
          ],
          value: undefined,
        },
        {
          date: '05.09.2018',
          products: [
            {
              name: 'Renew Rival Shield',
              brand: 'Nike',
              price: 359,
              quantity: 2,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/s0dzlgzenxlgo5o4si71/meskie-buty-do-biegania-renew-rival-shield-water-repellent-5qMGSW.jpg',
            },
            {
              name: 'Legend React',
              brand: 'Nike',
              price: 419,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dzjwdzhpry9wraoxhln3/meskie-buty-do-biegania-legend-react-RT1MxD.jpg',
            },
            {
              name: 'Epic React Flyknit',
              brand: 'Nike',
              price: 639,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bcsek7ifebiimlp6qv4f/meskie-buty-do-biegania-epic-react-flyknit-qz0BHb.jpg',
            },
          ],
          value: undefined,
        },
        {
          date: '17.05.2018',
          products: [
            {
              name: 'Renew Rival Shield',
              brand: 'Nike',
              price: 359,
              quantity: 2,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/s0dzlgzenxlgo5o4si71/meskie-buty-do-biegania-renew-rival-shield-water-repellent-5qMGSW.jpg',
            },
            {
              name: 'Legend React',
              brand: 'Nike',
              price: 419,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dzjwdzhpry9wraoxhln3/meskie-buty-do-biegania-legend-react-RT1MxD.jpg',
            },
            {
              name: 'Epic React Flyknit',
              brand: 'Nike',
              price: 639,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bcsek7ifebiimlp6qv4f/meskie-buty-do-biegania-epic-react-flyknit-qz0BHb.jpg',
            },
          ],
          value: undefined,
        },
        {
          date: '02.03.2018',
          products: [
            {
              name: 'Renew Rival Shield',
              brand: 'Nike',
              price: 359,
              quantity: 2,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/s0dzlgzenxlgo5o4si71/meskie-buty-do-biegania-renew-rival-shield-water-repellent-5qMGSW.jpg',
            },
            {
              name: 'Legend React',
              brand: 'Nike',
              price: 419,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dzjwdzhpry9wraoxhln3/meskie-buty-do-biegania-legend-react-RT1MxD.jpg',
            },
            {
              name: 'Epic React Flyknit',
              brand: 'Nike',
              price: 639,
              quantity: 1,
              imgUrl:
                'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bcsek7ifebiimlp6qv4f/meskie-buty-do-biegania-epic-react-flyknit-qz0BHb.jpg',
            },
          ],
          value: undefined,
        },
      ],
    };
  }

  componentWillMount = () => {
    const { orders } = this.state;

    // liczenie wartosci kazdego zamowienia:
    orders.map(order => {
      let sum = 0;

      order.products.map(product => {
        sum += product.price * product.quantity;

        return null;
      });

      order.value = sum;

      return null;
    });
  };

  render() {
    const { orders, isEmpty } = this.state;

    let renderOrders;

    if (isEmpty) {
      renderOrders = <Empty />;
    } else {
      renderOrders = <Orders orders={orders} />;
    }

    return <Wrapper>{renderOrders}</Wrapper>;
  }
}
