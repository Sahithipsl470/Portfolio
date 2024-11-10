import React, { Component } from "react";
import address_image from "../../assets/images/ww.png"; // Image import

export default class AddressImg extends Component {
  render() {
    return (
      <div>
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
          <image x="0" y="0" width="400" height="400" href={address_image} />
        </svg>
      </div>
    );
  }
}
