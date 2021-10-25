import React, { Component } from "react";
import ProfileImage from "../../assets/img/Profile.png";
import menu from "../../assets/img/menu.svg";
export class ProfileInfo extends Component {
  render() {
    const user = this.props.data;
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
              {user.firstName}
              {user.lastName}
            </h3>
            <span>{user.email}</span>
          </div>
        </section>
      </>
    );
  }
}

export default ProfileInfo;
