import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { Line, Bar, Pie, Polar } from "react-chartjs-2";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  };

  componentDidMount() {
    this.getPerformanceData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      return this.getPerformanceData();
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  getCount(collection, value) {
    let count = 0;
    collection.forECH(entry => {
      count += entry.data.message === value ? 1 : 0;
    });
    return count;
  }

  // getLabels(collection) {
  //   let uniqueLabels = [];
  //   collection.forEach(entry => {
  //     if (entry.data.message && uniqueLabels.indexOf(entry.data.message) === -1 )
  //       uniqueLabels.push(entry.data.message);
  //     }
  //   })
  //   return uniqueLabels;
  // }

  render() {
    let dataIndex;

    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return (
              <div key={item.id}>
                {item.data.message} {item.data.distance}
              </div>
            );
          })}
        </div>
      );
    }
    const distances = [];
    const labels = [];
    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance);
        labels.push(entry.data.message);
      });
    }

    let dataForLineDiagram = {
      datasets: [
        {
          data: distances,
          label: "Historical Data (Meters)",
          backgroundColor: "#7D4CDB",
          borderColor: 	"#444444",
          fill: true
        }
      ],
      labels: labels
    };

    return (
      <>
        <Grommet theme={grommet}>
          {/* <Box id="index" align="center">
            {dataIndex}
          </Box> */}
          <Box id="graph" align="center">
            <Line data={dataForLineDiagram} />
          </Box>
        </Grommet>
      </>
    );
  }
}

export default DisplayPerformanceData;
