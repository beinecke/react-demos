var MyComponent = React.createClass({
	handleClick: function() {
		this.refs.myTextInput.focus();
		this.refs.appendInput.value = '哈哈，出现吧';
	},
	render: function() {
		return (
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input" onClick={this.handleClick} />
				<input type="text" ref="appendInput" />
			</div>
		);
	}
});

ReactDOM.render(
	<MyComponent />,
	document.getElementById('example')
);