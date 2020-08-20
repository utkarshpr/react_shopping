import React from 'react';
import './Right.style.scss';
import { withRouter } from 'react-router-dom';
import CustomButton from '../button/button.component';
const Right = ({ history, linkUrl, match }) => (
  <div className="right">
    <h1>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aliquam
      quisquam harum, quasi reiciendis magnam illo laboriosam obcaecati
      architecto nostrum maxime nihil veniam tempore eos quidem labore neque
      amet.
    </h1>
    
      
      <CustomButton type="submit" onClick={() => history.push(`${match.url}${linkUrl}`)}> view</CustomButton>
    
  </div>
);
export default withRouter(Right);
