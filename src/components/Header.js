import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {
  render() {
    return (
      <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
            <span>
            <CSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={250}
                  transitionEnter={false}
                  transitionLeave={false}>
                  <strong>Jedilist</strong>
              </CSSTransitionGroup>
              </span>
            </h1>
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">simple Todo-list application</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
