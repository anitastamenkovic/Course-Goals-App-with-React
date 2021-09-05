import React from "react";
import styled from "styled-components";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseGoalList = (props) => {
  return (
    <List>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </List>
  );
};

export default CourseGoalList;
