var data = [123,'123 is string'];

var MyTitle = React.createClass({
	//��������title����ʱ��getDefaultProps�������ã�ȱʡ������ʱ�ŷ�������
	//getDefaultProps: function(){
	//	return {
	//		title: 'String'
	//	}
	//},
	propTypes: {
		title: React.PropTypes.number.isRequired,
		content: React.PropTypes.string.isRequired
	},
	render: function() {
		return <div>
			<h1> {this.props.title} </h1>
			<p>{this.props.content}</p>
		</div>;
	}
});

ReactDOM.render(
	<MyTitle title={data[0]} content={data[1]}/>,
	document.getElementById('content')
);