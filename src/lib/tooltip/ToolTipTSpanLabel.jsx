"use strict";

import React from "react";

class ToolTipTSpanLabel extends React.Component {
	render() {
		return <tspan className="react-stockcharts-tooltip-label" fill="#4682B4" {...this.props}>{this.props.children}</tspan>;
	}
}

export default ToolTipTSpanLabel;
