import React from 'react';
import '../components/shop-page/shoppage.style.scss';
import Shop from '../components/shop-page/shoppage.component';
class Vegpage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          item: 'tomatoes',
          imageUrl:
            'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          price: 30,
        },
        {
          item: 'carrot',
          imageUrl:
            'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          price: 35,
        },
        {
          item: 'peas',
          imageUrl:
            'https://images.pexels.com/photos/3298779/pexels-photo-3298779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          price: 60,
        },
        {
          item: 'Lady-Finger',
          imageUrl:
            'https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          price: 40,
        },
        {
          item: 'capsicum',
          imageUrl:
            'https://images.pexels.com/photos/7017/food-peppers-kitchen-yum.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 5,
          price: 120,
        },
        {
          item: 'cabbage',
          imageUrl:
            'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 6,
          price: 40,
        },
        {
          item: 'Corn',
          imageUrl:
            'https://images.pexels.com/photos/1359315/pexels-photo-1359315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 7,
          price: 40,
        },{
          item: 'beet-Root',
          imageUrl:
            'https://images.pexels.com/photos/2611818/pexels-photo-2611818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 8,
          price: 40,
        },{
          item: 'pumpkin',
          imageUrl:
            'https://images.pexels.com/photos/1395004/pexels-photo-1395004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 9,
          price: 40,
        },{
          item: 'lemon',
          imageUrl:
            'https://images.pexels.com/photos/186841/pexels-photo-186841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 10,
          price: 40,
        },{
          item: 'beans',
          imageUrl:
            'https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 11,
          price: 40,
        },{
          item: 'potato',
          imageUrl:
            'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 12,
          price: 40,
        },{
          item: 'onion',
          imageUrl:
            'https://images.pexels.com/photos/175415/pexels-photo-175415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 13,
          price: 40,
        },{
          item: 'garlic',
          imageUrl:
            'https://images.pexels.com/photos/928251/pexels-photo-928251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 14,
          price: 40,
        },{
          item: 'papaya',
          imageUrl:
            'https://images.pexels.com/photos/286948/pexels-photo-286948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 15,
          price: 40,
        },{
          item: 'Pineapple',
          imageUrl:
            'https://images.pexels.com/photos/915016/pexels-photo-915016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 16,
          price: 40,
        },{
          item: 'Strawberry',
          imageUrl:
            'https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 17,
          price: 40,
        },{
          item: 'Banana',
          imageUrl:
            'https://images.pexels.com/photos/802783/pexels-photo-802783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 18,
          price: 40,
        },{
          item: 'apple',
          imageUrl:
            'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 19,
          price: 40,
        },{
          item: 'orange',
          imageUrl:
            'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 20,
          price: 40,
        },{
          item: 'Pears',
          imageUrl:
            'https://images.pexels.com/photos/2095571/pexels-photo-2095571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 21,
          price: 40,
        },{
          item: 'watermelon',
          imageUrl:
            'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 22,
          price: 40,
        },
      ],
    };
  }
  render() {
    return (
      <div className="collection-preview">
        {this.state.sections.map(({ id, ...otherprops }) => (
           <div className="box-content">
           <Shop key={id} {...otherprops} />
         </div>
        ))}
      </div>
    );
  }
}
export default Vegpage;
