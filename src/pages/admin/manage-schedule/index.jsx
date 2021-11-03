import React, { Component } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "./index.css";
import queryString from "query-string";
import FormSchedule from "../../../components/FormSchedule";
import Pagination from "react-paginate";
import Hiflix from "../../../assets/img/Sponsor1.png";
import EbvId from "../../../assets/img/Sponsor2.png";
import CineOne21 from "../../../assets/img/Sponsor3.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllPremiere, deletePremiere, setUpdate } from "../../../store/actions/premiere";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../utils/axios";
class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      premiere: props.premieres.premiere,
      page: 1,
      limit: 3,
      dataLocation: [],
      setUpdate: false,
      isUpdate: false,
      totalPage: props.premieres.pageInfo.totalPage,
      sort: ""
    };
  }
  getPremiere = () => {
    this.props.getAllPremiere(this.state.page, this.state.limit).then((response) => {
      this.setState({
        premiere: response.value.data.data
      });
    });
  };
  componentDidMount() {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      this.props.history.push("/");
    }
    this.getPremiere();
  }
  handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getPremiere();
      }
    );
  };
  handleDeleteSchedule = (id) => {
    const userClicked = confirm("Premiere akan di hapus, anda yakin?");
    if (userClicked) {
      this.props.deletePremiere(id).then(() => {
        toast.success("Premiere berhasil di hapus");
        this.props.getAllPremiere(this.state.page, this.state.limit).then((response) => {
          this.setState({
            premiere: response.value.data.data
          });
        });
      });
    } else {
      toast.error("Batal menghapus premiere");
      return false;
    }
  };
  handleUpdateSchedule = (data, id) => {
    this.props.setUpdate(data, id);
    this.handleSetUpdate();
  };
  handleSetUpdate = () => {
    this.setState({
      setUpdate: !this.state.setUpdate,
      isUpdate: true
    });
  };
  getLocation = async () => {
    try {
      const response = await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
      this.setState({
        dataLocation: response.data.provinsi
      });
    } catch (error) {
      new Error(error.message);
    }
  };
  handleSortSchedule = (event) => {
    this.setState({
      sort: event.target.value
    });
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="manage__schedule">
          <FormSchedule
            setUpdate={this.state.setUpdate}
            isUpdate={this.state.isUpdate}
            handleSetUpdate={this.handleSetUpdate}
            dataLocation={this.state.dataLocation}
          />
          <div className="manage__schedule-container">
            <h3>Data Schedule</h3>
            <ToastContainer />
            <div className="manage__schedule-search">
              <select className="manage__schedule-form" onChange={this.handleSortSchedule}>
                <option hidden>Sort</option>
                <option value="ASC">$10 - $100</option>
                <option value="DESC">$100 - $10</option>
              </select>
              <select className="manage__schedule-form">
                <option hidden>Location</option>
                {this.state.dataLocation.length > 0 ? (
                  this.state.dataLocation.map((value) => {
                    return (
                      <>
                        <option value={value.nama} key={value.id}>
                          {value.nama}
                        </option>
                      </>
                    );
                  })
                ) : (
                  <option hidden>location not found!</option>
                )}
              </select>
              <select className="manage__schedule-form">
                <option hidden>Movie</option>
              </select>
            </div>
          </div>
          <section className="row manage__schedule-list mt-5">
            {this.state.premiere.length > 0 &&
              this.props.premieres.premiere.map((value) => {
                return (
                  <div className="col-md-3 m-3 manage__schedule-list-card" key={value.id_schedule}>
                    <div className="manage__schedule-list-card-header">
                      <div className="text-center">
                        <img
                          src={
                            value.premiere === "Hiflix"
                              ? Hiflix
                              : value.premiere === "Ebv.id"
                              ? EbvId
                              : value.premiere === "CineOne21"
                              ? CineOne21
                              : null
                          }
                          className="manage__schedule-list-card-image w-75 img-fluid"
                          alt={
                            value.premiere === "Hiflix"
                              ? "Hiflix"
                              : value.premiere === "Ebv.id"
                              ? "Ebv.Id"
                              : value.premiere === "CineOne21"
                              ? "CineOne21"
                              : null
                          }
                        />
                      </div>
                      <div className="manage__schedule-list-card-premiere">
                        <span>{value.premiere}</span>
                        <span>{value.location}</span>
                      </div>
                    </div>
                    <hr />
                    <div className="row manage__schedule-list-card-body">
                      {value.time.map((schedule, index) => (
                        <div
                          className="col-md-3 mt-2 manage__schedule-list-card-time-title"
                          key={index}
                        >
                          <span>{schedule}</span>
                        </div>
                      ))}
                    </div>
                    <div className="manage__schedule-list-card-price">
                      <span>Price</span>
                      <span>${value.price},00/seat</span>
                    </div>
                    <div className="manage__schedule-list-card-parent">
                      <button
                        className="manage__schedule-list-card-button-active"
                        onClick={() => this.handleUpdateSchedule(value, value.id_schedule)}
                      >
                        Update
                      </button>
                      <button
                        className="manage__schedule-list-card-button"
                        onClick={() => this.handleDeleteSchedule(value.id_schedule)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </section>
          <div>
            <Pagination
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={this.state.totalPage}
              onPageChange={this.handlePagination}
              containerClassName={"schedule__pagination"}
              activeClassName={"schedule__pagination-button"}
            />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  premieres: state.premiere
});

const mapDispatchToProps = {
  setUpdate,
  getAllPremiere,
  deletePremiere
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageSchedule));
