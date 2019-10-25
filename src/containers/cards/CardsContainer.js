import React, { Component } from "react";
import { connect } from "react-redux";
import { addCards } from "../../actions/cards";
import { setLoading } from "../../actions/app";
import CardsComponent from "../../components/cards/CardsComponent";

class CardsContainer extends Component {
  componentDidMount() {
    const setCode = ((this.props.match || {}).params || {}).setCode;
    this.props.setLoading(true);

    fetch(`https://api.pokemontcg.io/v1/cards?setCode=${setCode}`)
      .then(response => response.json())
      .then(data => {
        this.props.addCards(data.cards);
        this.props.setLoading(false);
      })
      .catch(error => {
        console.log(error);
        this.props.setLoading(false);
      });
  }

  render() {
    return <CardsComponent cards={this.props.cards} />;
  }
}

export default connect(
  state => ({
    cards: state.cards
  }),
  dispatch => ({
    addCards: cards => {
      dispatch(addCards(cards));
    },
    setLoading: state => {
      dispatch(setLoading(state));
    }
  })
)(CardsContainer);
