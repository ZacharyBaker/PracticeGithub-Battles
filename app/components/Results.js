var React = require('react')
var PropTypes = React.PropTypes;
var styles = require('../styles')


function Results (props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>

		</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results;