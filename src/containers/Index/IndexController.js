import React, { Component } from "react";
import Dasboard from "../../components/Dashboard/Dashboard";
import '../../styles/indexController.scss';
class IndexController extends Component {
  render() {
    return (
      <div className="index-controller">
        <div className="bg-overlay">
          <Dasboard />
        </div>
      </div>
    );
  }
}

export default IndexController;
