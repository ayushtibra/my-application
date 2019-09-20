import React from "react";
import { Progress, Button } from "antd";
import "antd/dist/antd.css";
import "../App.css";

const roundbarchange = props => {
  const ButtonGroup = Button.Group;
  return (
    <div className="barChange">
      <Progress type="circle" percent={props.percent} />
      <ButtonGroup>
        <Button onClick={props.decline} icon="minus" />
        <Button onClick={props.increase} icon="plus" />
      </ButtonGroup>
    </div>
  );
};

export default roundbarchange;
