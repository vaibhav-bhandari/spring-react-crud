import React, { Component } from "react";

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <div>
              <a href="https://www.google.com" className="navbar-brand">
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
