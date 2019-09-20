import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
import "../App.css";

const bar = props => {
  return (
    <div className="bar">
      <Progress percent={30} size="small" />
      <Progress percent={50} size="small" status="active" />
      <Progress percent={70} size="small" status="exception" />
      <Progress percent={100} size="small" />
      <Progress percent={50} size="small" showInfo={false} />
    </div>
  );
};

export default bar;
