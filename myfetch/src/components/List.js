import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <div key={repo.id} className='list'>
            
            <h2>{repo.name} </h2>
            

            <img src={repo.image} className="image_width" />
            <br />
            <span className='repo-description'>{repo.description}</span>
            <p></p><hr/>
          </div>
        );
      })}
    </ul>
  );
};
export default List;