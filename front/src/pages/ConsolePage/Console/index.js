import React from "react";
import './style.scss';

import ConsoleTable from "../../pageComponents/Console/ConsoleTable";
import {fetchConsoles, createConsole, updateConsole, deleteConsole} from "../../../ducks/consoles";
import ConsoleFilter from "./ConsoleFilter";
import {connect} from "react-redux";

const mapStateToProps = (state,props) => ({
  consoles:state.consoles.consoles
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchConsoles:(payload) => dispatch(fetchConsoles(payload)),
  deleteConsole:(id) => dispatch(deleteConsole(id)),
  createConsole:(payload) => dispatch(createConsole(payload)),
  updateConsole:(payload) => dispatch(updateConsole(payload)),
})

@connect(mapStateToProps, mapDispatchToProps)


class Consoles extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isUser:false,
      feedbackAnalysisDate:[],
      orderAnalysisDate:[],
      mode:['month','month'],
    };
  }


  componentDidMount() {
    let {fetchConsoles,} = this.props;
    fetchConsoles();
  }



  render() {

    const {recentFeedback} = this.props;
    let {consoles, deleteConsole, updateConsole,createConsole} = this.props;

    return (
      <div>
        <ConsoleFilter apiFn={this.props.fetchConsoles} />
        <ConsoleTable
          consoles={consoles}
          deleteConsole = {deleteConsole}
          updateConsole = {updateConsole}
          createConsole = {createConsole}
        />
      </div>

    );
  }
}


export default Consoles;
