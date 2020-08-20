import React from 'react';

import Shop from '../components/shop-page/shoppage.component';
class General extends React.Component{
    constructor() {
        super();
    
        this.state = {
          sections: [
            {
              item: 'oil',
              imageUrl:
                'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 1,
              price:120
            },
            {
              item: 'cheese',
              imageUrl:
                'https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 2,
              price:120
            },
            {
              item: 'spices',
              imageUrl:
                'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 3,
              price:120
            },
            {
              item: 'Dairy',
              imageUrl:
                'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 4,
              price:120
            },
            {
              item: 'General',
              imageUrl:
                'https://images.pexels.com/photos/2260825/pexels-photo-2260825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 5,
              price:120
            },
          ],
        };
      }
      render() {
        return (
          <div className= 'collection-preview'>
            {this.state.sections.map(({ id, ...otherprops }) => (
              <div className="box-content">
                <Shop key={id}{...otherprops}/>
              </div>
            ))}
          </div>
        );
      }
    }
    export default General;