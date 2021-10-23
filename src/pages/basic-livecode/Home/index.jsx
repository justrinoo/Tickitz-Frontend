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

  render() {
    console.log("Data Baru", this.state.data);
    const { data } = this.state;
    return (
      <>
        <div className="container text-center">
          <h1>Home Page</h1>
          <Navbar />
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
