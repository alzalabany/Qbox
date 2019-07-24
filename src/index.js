import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Card = styled.div`
  > header,
  > section {
    padding: 1rem;
    margin: 0;
  }
`;

const Label = styled.span`
  font-weight: bold;
  display: block;
  color: var(--gray);
`;

const H5 = styled.h5`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
`;

const OL = styled.ol`
  counter-reset: my-awesome-counter;
  list-style: none;
  padding-left: 40px;
  > li {
    margin: 0 auto 0.5rem 0;
    counter-increment: my-awesome-counter;
    position: relative;
    height: 3rem;
    padding-left: 1rem;
    line-height: 2;
    font-size: 16px;
  }

  > li:hover::before {
    border-width: 3px;
  }

  > li::before {
    content: counter(my-awesome-counter);
    color: #222;
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    --size: 32px;
    left: calc(-1 * var(--size) - 5px);
    line-height: var(--size);
    width: var(--size);
    height: var(--size);
    top: 0;
    border: 3px solid black;
    border-radius: 4px;
    text-align: center;
  }
`;

const P = styled.div`
  background-color: rgba(234, 90, 94, 1);
  color: #fff;
  font-size: 16px;
  display: block;
  margin: 0.5rem 0;
  padding: 1em;
  position: relative;

  > button {
    color: #fff;
    background-color: red;
    float: right;
  }

  > span {
    width: 1.4rem;
    text-align: left;
    display: inline-block;
  }
`;

function App() {
  return (
    <div className="App">
      <Card className="card">
        <header>
          <Label>Question 1 of 5</Label>
          <H5> Tools to do testing includes </H5>
        </header>
        <P>
          <span>X</span>
          unfortunately, then answer is incorrect
          <buttton> next question -> </buttton>
        </P>
        <section>
          <OL>
            <li>Jest</li>
            <li>Jest</li>
            <li>Jest</li>
            <li>Jest</li>
          </OL>
        </section>
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
