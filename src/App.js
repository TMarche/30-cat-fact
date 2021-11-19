import React from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
    padding: 15px;
    background-color: #555;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
    box-shadow: 0 3px 0 #666;
    font-size: 18px;

    :hover {
        cursor: pointer;
        background-color: #777;
    }
    :active {
        transform: translate(0, 3px);
        box-shadow: none;
    }
`;

class App extends React.Component {
    state = {
        fact: "",
    };

    componentWillMount() {
        this.getCatFact();
    }

    getCatFact = () => {
        axios
            .get("https://catfact.ninja/fact")
            .then((response) => {
                console.log(response);
                this.setState({
                    fact: response.data.fact,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#333",
                    height: "100vh",
                    color: "white",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <h1 style={{ fontSize: "72px", textAlign: "center" }}>
                        Cat Fact
                    </h1>
                    <div
                        style={{
                            textAlign: "center",
                            minHeight: "100px",
                            fontSize: "24px",
                        }}
                    >
                        {this.state.fact}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={() => this.getCatFact()}>
                            Get new fact
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
