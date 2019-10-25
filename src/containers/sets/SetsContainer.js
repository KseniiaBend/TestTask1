import React, { Component } from "react";
import { connect } from "react-redux";
import { addSets } from "../../actions/sets";
import { setLoading } from "../../actions/app";
import SetsComponent from "../../components/sets/SetsComponent";

class SetsContainer extends Component {
  componentDidMount() {
    this.props.setLoading(true);
    fetch("https://api.pokemontcg.io/v1/sets/")
      .then(response => response.json())
      .then(data => {
        this.props.addSets(data.sets);
        this.props.setLoading(false);
      })
      .catch(error => {
        console.log(error);
        this.props.setLoading(false);
      });
  }

  render() {
    return <SetsComponent sets={this.props.sets} />;
  }
}

export default connect(
  state => ({
    sets: state.sets
  }),
  dispatch => ({
    addSets: sets => {
      dispatch(addSets(sets));
    },
    setLoading: state => {
      dispatch(setLoading(state));
    }
  })
)(SetsContainer);
