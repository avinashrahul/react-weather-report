// lets create a functional component since we dont need to make use of state as it needs in class component
import _ from 'lodash';
import React from 'react';
//https://github.com/borisyankov/react-sparklines
import { Sparklines, SparklinesLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return(
    <div>
      <Sparklines data={props.data} width={150} height={120}>
        <SparklinesLine color={props.color} />
      </Sparklines>
      <div>{average(props.data)}{props.units}</div>
    </div>
  );
}
