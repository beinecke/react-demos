var UserGist = React.createClass({
	getInitialState: function() {
		return {
			url: [],
			time: []
		};
	},

	componentDidMount: function() {
		$.get(this.props.source, function(result) {
			var urlArr = result.map(function(item){return item.comments_url}),
				tiemArr = result.map(function(item){return item.created_at});
			if (this.isMounted()) {
				this.setState({
					url: urlArr,
					time: tiemArr
				});
			}
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				{
					this.state.url.map(function(val,index){
						return <p><a href={val}>This URL</a> is created at {this.state.time[index]}.</p>
					}.bind(this))
				}
			</div>
		);
	}
});

ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	document.getElementById('con')
);