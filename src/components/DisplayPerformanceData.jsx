import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      return this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div  key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }

    return (

      <>
      <Grommet theme={grommet}>
        <Box id="index" align="center">
          {dataIndex}
        </Box>
      </Grommet>
      </>

    )
  }      
}

export default DisplayPerformanceData