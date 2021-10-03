import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode() {
    this.setState({ editMode: true });
  }
  deactivateEditMode() {
    this.setState({ editMode: false });
  }
  mouseDown(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span
              onDoubleClick={this.activateEditMode.bind(this)}
              onMouseDown={this.mouseDown.bind(this)}
            >
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              defaultValue={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
