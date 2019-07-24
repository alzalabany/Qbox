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
  > footer {
    border-top: 1px solid var(--gray);
    padding: 0.5rem 1rem;
    margin: 0;
  }
  > footer > p {
    display: inline-block;
    color: var(--gray);
    text-transform: capitalize;
  }
  > footer > button {
    margin-right: 1rem;
    background-color: rgb(51, 118, 177);
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
  }
  > footer > button:last-of-type {
    background-color: var(--gray);
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
  padding: 0 0 0 40px;
  > li {
    margin: 0 auto 1rem 0;
    counter-increment: my-awesome-counter;
    list-style-type: A;
    position: relative;
    min-height: 33px;
    padding-left: 1rem;
    line-height: 1;
    font-size: 16px;
  }

  > li > button {
    background-color: #fff;
    text-align: left;
    margin: 0;
    padding-left: 0;
    width: 100%;
    display: block;
  }
  button:active {
    background-color: green;
  }
  button:hover {
  }

  > li:hover::before {
    border: 3px solid green;
    background-color: green;
    color: #fff;
  }

  > li::before {
    content: counter(my-awesome-counter, upper-alpha);
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
  > label {
    font-weight: bold;
  }

  > span {
    width: 1.4rem;
    text-align: left;
    display: inline-block;
  }

  > button {
    color: #fff;
    background-color: rgb(230, 72, 75);
    float: right;
    margin-top: -6px;
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
          <label>unfortunately,</label> then answer is incorrect
          <button> try again ⟳</button>
        </P>
        <section>
          <OL>
            <li>
              <button>Jest</button>
            </li>
            <li>Jest</li>
            <li>Jest</li>
            <li>
              <button>
                Jest content: counter(my-awesome-counter); content:
                counter(my-awesome-counter);
              </button>
            </li>
          </OL>
        </section>
        <footer>
          <button>Skip Question ➡</button>
          <button>review topic ▶</button>
          <p>
            {" "}
            review topic is required so you can revise you knowledge in top{" "}
          </p>
        </footer>
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
