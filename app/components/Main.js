var React = require("react");
//Including the Link component from React Router 
//to navigate within our application without full 
//page reloads	
var Link = require("react-router").Link;

var Main = React.createClass(
{
    render: function()
    {
    	return (
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 col-md-3">
                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-parent="#accordion" href="index.html"><span className="glyphicon glyphicon-home"></span>Home</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span className="glyphicon glyphicon-th"></span>Level 1</a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead></thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson1_1"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 1</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson2_1"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 2</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson3_1"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 3</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson4_1"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 4</button></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span className="glyphicon glyphicon-th"></span>Level 2</a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead></thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson1_2"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 1</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson2_2"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 2</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson3_2"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 3</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson4_2"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 4</button></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span className="glyphicon glyphicon-th"></span>Level 3</a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead></thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson1_3"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 1</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson2_3"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 2</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson3_3"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 3</button></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="/Lesson4_3"><span className="glyphicon glyphicon-record text-success"></span><button className="btn btn-primary btn-lg">Lesson 4</button></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>	                
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9">
                        <div className="row">
                            {/*<h1>Level 1</h1>*/}
                            
                            {/*This code will dump the correct child component*/}
                            {this.props.children}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;
