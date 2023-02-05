"use client";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";

const ToolTipUtil = ({ anchorId, children }) => {
  return (
    <Tooltip anchorId={anchorId} events={["click"]} place="bottom">
      {children}
    </Tooltip>
  );
};

export default ToolTipUtil;
