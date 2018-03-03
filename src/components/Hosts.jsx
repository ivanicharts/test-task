import React from 'react';


const ReferrerHost = ({ data = []}) => (
  <div className="text-13">
    {
      data.map(({ key, value }) => (
        <div><strong>{ key }: </strong> { value} </div>
      ))
    }
  </div>
);

export default ReferrerHost;