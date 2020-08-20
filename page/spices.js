import React from 'react';

import Shop from '../components/shop-page/shoppage.component';
class Spices extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          item: 'cloves',
          imageUrl:
            'https://th.bing.com/th/id/OIP.P-Es2pi90HA0R-GzfZG7YgHaHa?pid=Api&rs=1',
          id: 1,
          price: 30,
        },
        {
          item: 'cinnamon',
          imageUrl:
            'http://2.bp.blogspot.com/-Yp0R4i2D-LQ/UOmErnY1p4I/AAAAAAAANa0/rFtnmz8zGWQ/s1600/cinnamon+sticks.JPG',
          id: 2,
          price: 35,
        },
        {
          item: 'cumin',
          imageUrl:
            'http://authorpuneet.com/wp-content/uploads/2014/11/jira.jpg',
          id: 3,
          price: 60,
        },
        {
          item: 'bay leaf',
          imageUrl:
            'https://th.bing.com/th/id/OIP.a0tWptb8MEQvZIgqsq-rwQHaFS?pid=Api&rs=1',
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
export default Spices;
