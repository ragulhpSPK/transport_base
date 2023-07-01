import React from "react";
import SideNavbar from "../sideNavbar";
import { Space, Table, Tag, Select } from "antd";

function connect() {
  return (
    <div className="flex pt-[15vh] pl-4">
      <div className="w-[75vw] flex flex-col gap-10">
        <div className="flex items-center justify-center">
          <Select placeholder="seach here" size="large" className="w-1/2" />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default connect;
