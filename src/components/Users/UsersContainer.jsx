import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFetching,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { toggleFollowingProgress } from "./../../redux/usersReducer";
import withAuthRedirect from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//     setTotalUsersCount: (totalCount) =>
//       dispatch(setTotalUsersCountAC(totalCount)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
//   };
// };

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
