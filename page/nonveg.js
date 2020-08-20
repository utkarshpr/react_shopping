import React from 'react';

import Shop from '../components/shop-page/shoppage.component';
class NonVegpage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          item: 'egg',
          imageUrl:
            'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          price: 30,
        },
        {
          item: 'chicken',
          imageUrl:
            'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          price: 35,
        },
        {
          item: 'red meat',
          imageUrl:
            'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          price: 60,
        },
        {
          item: 'fish',
          imageUrl:
            'https://images.pexels.com/photos/246120/pexels-photo-246120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          price: 40,
        },
        {
          item: 'pork',
          imageUrl:
            'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 5,
          price: 120,
        },
        {
          item: 'salmon',
          imageUrl:
            'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 6,
          price: 40,
        },
        {
          item: 'ham',
          imageUrl:
            'https://images.pexels.com/photos/1930760/pexels-photo-1930760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 7,
          price: 40,
        },{
          item: 'prawn',
          imageUrl:
            'http://www.unitedfisheries.co.nz/sites/default/files/prawn-meat-cooked-l.jpg',
          id: 8,
          price: 40,
        },{
          item: 'crab',
          imageUrl:
            'https://images.pexels.com/photos/775863/pexels-photo-775863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 9,
          price: 40,
        },{
          item: 'Goat-meat',
          imageUrl:
            'http://www.seriouseats.com/images/2012/06/20120612-nasty-bits-goat.jpg',
          id: 10,
          price: 40,
        },{
          item: 'octopus',
          imageUrl:
            'https://images.pexels.com/photos/2010702/pexels-photo-2010702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 11,
          price: 40,
        },{
          item: 'duck -meat',
          imageUrl:
            'https://www.wikihow.com/images/thumb/e/e7/Cook-a-Duck-Intro.jpg/aid1075031-v4-728px-Cook-a-Duck-Intro.jpg',
          id: 12,
          price: 40,
        },{
          item: 'duck-egg',
          imageUrl:
            'https://anitaflowersdotme.files.wordpress.com/2013/02/img_1324.jpg',
          id: 13,
          price: 40,
        },{
          item: 'oyester',
          imageUrl:
            'https://achilloysters.com/wp-content/uploads/2017/02/achill-oysters-open.jpg',
          id: 14,
          price: 40,
        },{
          item: 'tuna',
          imageUrl:
            'https://www.leisurepro.com/blog/wp-content/uploads/2014/09/bluefin-tuna-meat.jpg',
          id: 15,
          price: 40,
        },{
          item: 'sashimi',
          imageUrl:
            'http://freefoodphotos.com/imagelibrary/seafood/sashimi.jpg',
          id: 16,
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
export default NonVegpage;
