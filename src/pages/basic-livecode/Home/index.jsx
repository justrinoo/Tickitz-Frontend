import React, { Component } from "react";
import Navbar from "../../../components/livecode-Navbar";
import Card from "../../../components/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";

export class BasicHome extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      form: {
        title: "",
        category: "",
        releaseDate: "",
        durationHour: "",
        durationMinute: "",
        directedBy: "",
        synopsis: "",
        casts: "",
        image: null
      },
      page: 1,
      limit: 3,
      pageInfo: {}
      // sort: "ASC",
      // search: ""
    };
  }
  componentDidMount() {
    this.getDataMovie();
  }
  getDataMovie = () => {
    console.log("get data");
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}`)
      .then((response) => {
        this.setState({
          data: response.data.data,
          pageInfo: response.data.pagination ? response.data.pagination : 5
        });
      })
      .catch((error) => console.log(error.response));
  };
  handlePagination = (event) => {
    console.log(event.selected + 1);
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handleDetail = (data) => {
    // // [1] => bisa di gunakan untuk url params
    // this.props.history.push(`/basic-detail?movieId=${data}`);
    // [2] => bisa di gunakan jika data tidak mau di tampilkan di url
    // this.props.history.push("/basic-detail", { movieId: data });
    // [3] => bisa di gunakan untuk detail product atau yang lain tapi dengan spesifik id
    this.props.history.push(`/basic-detail/${data}`);
    // console.log(data);
  };

  handleInputMovie = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmitMovie = (event) => {
    event.preventDefault();
    // console.log(this.state.form);
    const formData = new FormData();
    // formData.append('title',this.state.form.title)
    // using loop
    for (const data in this.state.form) {
      formData.append(data, this.state.form[data]);
      // console.log(this.state.form[data]);
    }

    // untuk mengecek data di formData
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    console.log(formData);
    // axios.post("movie", formData);
  };

  setUpdate = () => {
    console.log("setupdate");
  };

  handleUpdate = () => {
    console.log("handleupdate");
  };

  handleDelete = () => {
    console.log("handledelete");
  };

  handleChangeFile = (event) => {
    console.log(event);
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.files[0]
      }
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="container text-center">
          <h1>Home Page</h1>
          <Navbar />
          <hr />
          <form onSubmit={this.handleSubmitMovie}>
            <div>
              <label style={{ display: "block" }} htmlFor="title">
                Title
              </label>
              <input type="text" name="title" onChange={(event) => this.handleInputMovie(event)} />
              <label style={{ display: "block" }} htmlFor="category">
                Category
              </label>
              <input
                type="text"
                name="category"
                onChange={(event) => this.handleInputMovie(event)}
              />
              <label style={{ display: "block" }} htmlFor="releaseDate">
                Release Date
              </label>
              <input
                type="date"
                name="releaseDate"
                onChange={(event) => this.handleInputMovie(event)}
              />
              <label style={{ display: "block" }} htmlFor="durationHour">
                Duration Hour
              </label>
              <input
                type="text"
                name="durationHour"
                onChange={(event) => this.handleInputMovie(event)}
              />
              <label style={{ display: "block" }} htmlFor="durationMinute">
                Duration Minute
              </label>
              <input
                type="text"
                name="durationMinute"
                onChange={(event) => this.handleInputMovie(event)}
              />
              <label style={{ display: "block" }} htmlFor="synopsis">
                Synopsis
              </label>
              <input
                type="text"
                name="synopsis"
                onChange={(event) => this.handleInputMovie(event)}
              />
              <label style={{ display: "block" }} htmlFor="directedBy">
                Directed By
              </label>
              <input
                type="text"
                name="directedBy"
                onChange={(event) => this.handleInputMovie(event)}
              />
              <label style={{ display: "block" }} htmlFor="casts">
                Casts
              </label>
              <input type="text" name="casts" onChange={(event) => this.handleInputMovie(event)} />
              <label style={{ display: "block" }} htmlFor="image">
                Image
              </label>
              <input type="file" name="image" onChange={(e) => this.handleChangeFile(e)} />
            </div>
            <button type="submit">Submit</button>
          </form>
          <hr />
          <div className="row">
            {data.map((item) => (
              <div className="col-md-3" key={item.id}>
                <Card data={item} handleDetail={this.handleDetail} />
              </div>
            ))}
          </div>
          <Pagination
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={10}
            onPageChange={this.handlePagination}
            containerClassName={"pagination"}
            disabledClassName={"pagination__disabled"}
            activeClassName={"pagination__active"}
          />
        </div>
      </>
    );
  }
}

export default BasicHome;
