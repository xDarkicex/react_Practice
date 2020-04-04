import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail  
          author={faker.internet.userName()} 
          avater={faker.image.avatar()}
          timeAgo="Today at 4:32PM"
          comment={faker.lorem.sentences(2)}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail  
          author={faker.internet.userName()} 
          avater={faker.image.avatar()}
          timeAgo="Today at 8:34AM"
          comment={faker.lorem.sentences(2)}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail  
          author={faker.internet.userName()} 
          avater={faker.image.avatar()}
          timeAgo="Yesterday At 11:37AM"
          comment={faker.lorem.sentences(2)}
          />
      </ApprovalCard>
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)