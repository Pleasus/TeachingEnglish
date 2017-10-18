var React = require("react");

var Lesson1_2 = React.createClass({
	render: function()
	{
	    return (
	    	<div className="tenses">
	    		<div className="wideBox well">
		          	<h1>2.1 Verb Tenses</h1>
		          	<h4>In this lesson you learn about different English verb tenses.</h4>          
		        </div>
		        <div className="whiteBox">
		    		<h3>Past Simple</h3>
		    		<hr/>
		    		<h5>Usage</h5>
		    		<p>Use the past simple to talk about something that happened at a definite time in the past.</p>
		    		<h5>Form</h5>
		    		<p>For regular verbs, add "ed" to the end of the base verb.</p>
		    		<h5>Examples</h5>
		    		<ul>
		    			<li>walk -> walked</li>
		    			<li>Yesterday, I <em>walked</em> to school.</li>
		    			<li>jump -> jumped</li>
		    			<li>The cat just <em>jumped</em> on the bed</li>
		    		</ul>
		    		<h5>Rules</h5>
		    		<p>Add -d for verbs that end in -e.</p>
		    		<ul>
		    			<li>agree -> agreed</li>
		    			<li>like -> liked</li>
		    			<li>escape -> escaped</li>
		    		</ul>
					<p>If a verb ends in a vowel and a consonant, the consonant is usually doubled before -ed.</p>
					<ul>
						<li>stop -> stopped</li>
						<li>plan -> planned</li>
					</ul>

					<p>If a verb ends in consonant and -y, you take off the y and add -ied.</p>

					<ul>
						<li>try -> tried</li>
						<li>carry -> carried</li>
					</ul>        

					<p>But if the word ends in a vowel and -y, you add -ed.</p>
					<ul>
						<li>play -> played</li>
						<li>enjoy -> enjoyed</li>
					</ul>
		    		<h5>Irregular Verbs</h5>
		    		<p>The past tense has many irregular verbs.</p>
		    		<ul>
		    			<li>go -> went</li>
		    			<li>see -> saw</li>
		    			<li>take -> took</li>
		    			<li>fly -> flew</li>
		    			<li>is -> was</li>
		    		</ul>
		    		<h3>Present Perfect</h3>
		    		<hr/>
		    		<h5>Usage</h5>
		    		<h5>Form</h5>
		    		<h5>Examples</h5>
		    		<h3>Past Perfect</h3>
		    		<hr/>
		    		<h5>Usage</h5>
		    		<h5>Form</h5>
		    		<h5>Examples</h5>
		    	</div>
	    	</div>
	    	);
	}
});

module.exports = Lesson1_2;
