var React = require("react");

var Lesson1_2 = React.createClass({
	render: function()
	{
	    return (
	    	<div className="tenses">
	    		<div className="wideBox well">
                  	<h1>2.1 Verb Tenses</h1>
                  	<h4>In this lesson you learn about different English verb tenses</h4>          
                </div>
                <div className="whiteBox">
		    		<h3>Past Simple</h3>
		    		<h5>Usage</h5>
		    		<p>Use the past simple to talk about something that happened at a definite time in the past.</p>
		    		<p>The past simple often uses words that refer to a time in the past such as yesterday, last week, last night, jsut, etc.</p>
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
					<p>For verbs that end in a vowel then consonant, the consonant is usually doubled before -ed.</p>
					<ul>
						<li>stop -> stopped</li>
						<li>plan -> planned</li>
					</ul>

					<p>For verbs ending in consonant and -y, remove the y and add -ied.</p>
						<ul>
							<li>try -> tried</li>
							<li>carry -> carried</li>
						</ul>        
					<p>For words ending in vowels and -y, add -ed.</p>
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
		    		<hr/>
		    		<h3>Present Perfect</h3>
		    		<h5>Usage</h5>
		    		<p>Use the present perfect to talk about an activity recently completed in the past.</p>
		    		<p>Use the present perfect to talk about something that started in the past and continues into the present.</p>
		    		<h5>Form</h5>
		    		<p>To make the present perfect use <em>has</em> or <em>have</em> + the third form of the verb</p>
		    		<h5>Examples</h5>
		    		<ul>
		    			<li>has eaten</li>
		    			<li>have spoken</li>
		    			<li>has worked</li>
		    		</ul>
		    		<h5>Verb Table</h5>
		    		<p>See the following table for the first, second, and third forms of English verbs.</p>
		    		<hr/>
		    		<h3>Past Perfect</h3>
		    		<h5>Usage</h5>
		    		<p>Use the past perfect to talk about the first of two activities in the past happening in sequence.</p>
		    		<p><em>He had left before I arrived.</em></p>	    		
		    		<h5>Form</h5>
		    		<p>The past perfect is similar to the present perfect, only instead of <em>has</em> or <em>had</em>...</p>
		    		<p>Use <em>had</em> + the third form of the verb</p>	
		    		<h5>Examples</h5>
		    		<ul>
		    			<li>had washed</li>
		    			<li>had cooked</li>
		    			<li>had delivered</li>
		    		</ul>
		    	</div>   		
	    	</div>
	    	);
	}
});

module.exports = Lesson1_2;
