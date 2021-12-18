import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import menu from "../../assets/img/menu.svg";
import { GetUser } from "../../store/actions/user";
import axios from "../../utils/axios";

function ProfileInfo(props) {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [displayImage, setDisplayImage] = useState(null);
  const [image, setImage] = useState(null);
  const inputFile = useRef("");

  const changeFile = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.patch("user/update-image", formData);
      dispatch(GetUser());
      setImage("");
      toast.success(response.data.message);
    } catch (error) {
      new Error(error.response);
    }
  };

  const changeFilePhoto = (event) => {
    setDisplayImage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const handleFile = () => {
    inputFile.current.click();
  };

  useEffect(() => {
    dispatch(GetUser());
    image ? changeFile() : null;
  }, [image]);

  console.log("image =>", image);
  return (
    <>
      <section className="profile__column-info">
        <ToastContainer />
        <div className="profile__column-info-nav-menu">
          <p>INFO</p>
          <img src={menu} width="20" height="20" alt="menu" />
        </div>
        <div className="profile__column-info-personal" onClick={handleFile}>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img
              src={
                user.image
                  ? `${process.env.REACT_APP_PROD}uploads/user/${user.image}`
                  : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
              }
              className="img-fluid w-50 "
              style={{ borderRadius: 100 }}
              alt="Profile"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 110,
                top: 110,
                backgroundColor: "#DEDEDE",
                width: "10%",
                margin: "0px auto",
                borderRadius: 100,
                height: "10%"
              }}
            >
              <ion-icon name="pencil-sharp"></ion-icon>
            </div>
          </div>
          <input
            type="file"
            name="image"
            ref={inputFile}
            onChange={changeFilePhoto}
            style={{ display: "none" }}
          />
          <h3>
            {user.firstName !== "" ? user.firstName : null}{" "}
            {user.lastName !== "" ? user.lastName : null}
          </h3>
          <span>{user.email}</span>
        </div>
      </section>
    </>
  );
}

export default ProfileInfo;
