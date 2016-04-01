var UserGist = React.createClass({
	getInitialState: function() {
		return {
			collection: []
		};
	},

	componentDidMount: function() {
		$.get(this.props.source, function(result) {
			var Arr = result.map(function(item){return (<p key={item.comments_url}><a href={item.comments_url}>This URL</a> is created at {item.comments_url}.</p>)});
			if (this.isMounted()) {
				this.setState({
					collection: Arr
				});
			}
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				{
					this.state.collection
				}
			</div>
		);
	}
});

ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	document.getElementById('con')
);