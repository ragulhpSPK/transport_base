import React from "react";
import { Space, Table, Tag, Select } from "antd";

function connect4() {
  return (
    <div className="flex pt-20 pl-4">
      <div className="w-[75vw] flex flex-col gap-3">
        <div className="flex items-center justify-center">
          <Select placeholder="seach here" size="large" className="w-1/2" />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default connect4;
