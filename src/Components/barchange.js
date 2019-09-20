import React from "react";
import { Progress, Button } from "antd";
import "antd/dist/antd.css";
import "../App.css";

const barchange = props => {
  const ButtonGroup = Button.Group;
  return (
    <div className="barChange1">
      <Progress percent={props.percent1} />
      <ButtonGroup className="btnGrp">
        <Button onClick={props.decline1} icon="minus" />
        <Button onClick={props.increase1} icon="plus" />
      </ButtonGroup>
    </div>
  );
};

export default barchange;
