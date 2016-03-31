var Hello = React.createClass({
	getInitialState: function () {
		return {
			opacity: 1.0
		};
	},

	componentDidMount: function () {
		var opacity = this.state.opacity;
		this.timer = setInterval(function () {
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity
			});
		}.bind(this), 100);
		//bins(this)�ı�setIntervalԭ����������window��Ϊ��ǰ���
	},

	render: function () {
		return (
			<div style={{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</div>
		);
	}
});

ReactDOM.render(
	<Hello name="world"/>,
	document.getElementById('con')
);