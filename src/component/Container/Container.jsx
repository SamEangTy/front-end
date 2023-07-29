import { Children } from "react";
import "./Container.scss";
import { Button, Input, Spin } from "antd";

const container = (
    { 
     pageTitle = "PageTitle", 
     onClickBtnRight,
     btnRight = "add title btn",
     children 
    }) => {
  return (
    <div>
      <div className="pageHeaderContainer">
        <div className="rowHeader">
          <div className="pageTitle">
            <h2>
              {pageTitle}
            </h2>
            </div>
          <div>
            <Button type="primary" onClick={onClickBtnRight}>{btnRight}</Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default container;
