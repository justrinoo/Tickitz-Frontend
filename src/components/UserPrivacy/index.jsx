import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePassword } from "../../store/actions/user";
function UserPrivacy(props) {
  const [newPassword, setNewPasswordPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(props.user.isLoading);
  const [isError, setError] = useState(props.user.isError);
  const UpdateNewPassword = (event) => {
    event.preventDefault();
    const setDataUpdatePassword = { newPassword, confirmPassword };
    if (newPassword === "" || confirmPassword === "") {
      setError(true);
      setLoading(false);
    } else {
      props
        .updatePassword(setDataUpdatePassword)
        .then(() => {
          setLoading(true);
          setError(false);
          event.target.reset();
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  };
  return (
    <>
      <form onSubmit={UpdateNewPassword}>
        <div className="profile__column-settings-detail-information">
          <div className="d-flex justify-content-between">
            <p>Account and Privacy</p>
            {isError ? <p className="text-danger fw-bold">Password Tidak Sama!</p> : null}
            {isLoading ? <p className="text-success fw-bold">Password Berhasil diubah!</p> : null}
          </div>
          <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
          <div className="row">
            <div className="col-md-6 profile__column-settings-spacing">
              <label style={{ display: "block" }}>New Password</label>
              <input
                type="password"
                className="profile__column-settings-input_form"
                placeholder="Write your password..."
                name="newPassword"
                onChange={(e) => setNewPasswordPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6 profile__column-settings-spacing">
              <label style={{ display: "block" }}>Confirm Password</label>
              <input
                type="password"
                className="profile__column-settings-input_form"
                placeholder="Confirm your password..."
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="profile__column-settings-button-update-account">
          Update changes
        </button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  updatePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPrivacy);
