import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import { grommet, Grommet, Box, Button } from 'grommet';


class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };
  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    let performanceDataIndex;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Grommet theme={grommet}>
              <Box align="center" pad="medium">
                <Button 
                label="Login" 
                id="login" 
                onClick={() => this.setState({ renderLoginForm: true })} />
              </Box>
              <Box align="center" pad="medium">
                <p id="message">{message}</p>
              </Box>
            </Grommet>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <Grommet theme={grommet}>
            <Box align="center" pad="medium" id="message">
              Hi {JSON.parse(sessionStorage.getItem("credentials")).uid} you have successfully logged in. 
            </Box>
          </Grommet>
          
        );
        performanceDataIndex = (
          <Grommet theme={grommet}>
            <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
          </Grommet>);
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData 
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <Grommet theme={grommet}>
                <Box align="center">
                  <Button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
                </Box>
              </Grommet>
            </>
          )
        } else {
          performanceDataIndex = (
            
            <Grommet theme={grommet}>
              <Box align="center">
                <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
              </Box>
          </Grommet>);
        }
      
        break;
        
    }

    return (
    
      <>
      <Grommet className="App">
      <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}
      </Grommet>
        
      </>
    );
  }
  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
}

export default App;
