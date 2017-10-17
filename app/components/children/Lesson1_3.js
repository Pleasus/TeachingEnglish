var React = require("react");
var conditionals = require("../../api/conditionals");

var Lesson1_3 = React.createClass({
	render: function()
	{
	    console.log(conditionals);
	    function createTable(data) {
	    	return <td key={conditionals.number}>{}</td>
	    }
	    return (
	    	<table className="ConditionalTable">
	    		<tbody>
	    			<tr>
	    				<td>TestData</td>
	    				<td>TestData2</td>
	    			</tr>
	    			<tr>
	    				<td>TestData</td>
	    				<td>TestData2</td>
	    			</tr>
	    		</tbody>
	    	</table>
	    );
	}
});

module.exports = Lesson1_3;
