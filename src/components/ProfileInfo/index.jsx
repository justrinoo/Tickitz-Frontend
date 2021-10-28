import React, { Component } from "react";
import ProfileImage from "../../assets/img/Profile.png";
import menu from "../../assets/img/menu.svg";
import { connect } from "react-redux";
export class ProfileInfo extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <section className="profile__column-info">
          <div className="profile__column-info-nav-menu">
            <p>INFO</p>
            <img src={menu} width="20" height="20" alt="menu" />
          </div>
          <div className="profile__column-info-personal">
            <img src={ProfileImage} alt="" />
            <h3>
              {user.users.firstName !== "" ? user.users.firstName : null}
              {user.users.lastName !== "" ? user.users.lastName : null}
            </h3>
            <span>{user.users.email}</span>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileInfo);
