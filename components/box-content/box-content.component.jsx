import React from 'react';
import Left from '../left/left.component';
import Right from '../right/Right.component';
import './box-content.style.scss';
class BoxContent extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          item: 'Veg',
          imageUrl:
            'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          linkUrl:'veg'
        },
        {
          item: 'Non -Veg',
          imageUrl:
            'https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          linkUrl:'nonveg'
        },
        {
          item: 'spices',
          imageUrl:
            'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          linkUrl:'spices'
        },
        {
          item: 'Dairy',
          imageUrl:
            'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          linkUrl:'dairy'
        },
        {
          item: 'General',
          imageUrl:
            'https://images.pexels.com/photos/2199190/pexels-photo-2199190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 5,
          linkUrl:'general'
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.sections.map(({ id, ...otherprops }) => (
          <div className="box-content">
            <Left key={id} {...otherprops} />
            <Right Key={id} {...otherprops} />
          </div>
        ))}
      </div>
    );
  }
}
export default BoxContent;
