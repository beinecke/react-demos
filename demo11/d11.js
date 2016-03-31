var UserGist = React.createClass({
	getInitialState: function() {
		return {
			collection: []
		};
	},

	componentDidMount: function() {
		$.get(this.props.source, function(result) {
			var Arr = result.map(function(item){return {url:item.comments_url,time:item.created_at}});
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
					this.state.collection.map(function(val,index){
						return <p key={val.time}><a href={val.url}>This URL</a> is created at {val.time}.</p>
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