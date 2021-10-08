import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  mouseDown = (e) => {
    e.preventDefault();
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevStatus) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
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
              {this.props.status || "-------"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
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
