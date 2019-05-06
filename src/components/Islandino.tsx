import React from "react";
import { connect } from "react-redux";
import { IUserState, IState } from "../state/state";

type InternalProps = {
  user?: IUserState
};

export class Islandino extends React.Component<InternalProps> {
  render() {
    return <React.Fragment>
      Hello {this.props.user && this.props.user.name}
      <div />
    </React.Fragment>;
  }
}

const mapStateToProps = (state: IState): InternalProps => {
  return { user: state.user }
};
export default connect(mapStateToProps)(Islandino);