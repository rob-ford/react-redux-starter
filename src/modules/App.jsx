import React from 'react'

export default class App extends React.Component {
	static propTypes = {
		msg: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<h1>{this.props.msg}</h1>
		)
	}
}
