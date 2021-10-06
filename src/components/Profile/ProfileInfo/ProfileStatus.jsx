import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  }
  deactivateEditMode = () => {
    this.setState({ editMode: false });
  }
  mouseDown = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span
              onDoubleClick={this.activateEditMode}
              onMouseDown={this.mouseDown}
            >
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              defaultValue={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
