import React from "react";
import axios from "axios";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Wrapper } from "./styles";
import "./style.css";

class vacationTable extends React.Component {
    state = {
      vacation: []
    }

    componentWillMount() {
      this.fillStateVacation();
    }

      fillStateVacation = async () => {
        try {
          const response = await axios({
            method: "get",
            url: "api/v1/vacations",
            config: { headers: { "Content-Type": "application/json" } }
          });
          this.setState({ vacation: response.data });
        } catch (err) {
          console.log(err);
        }
      };

      render() {
        const { vacation } = this.state;
        return (
          <Wrapper>
            <BootstrapTable
              id="table" ref="table"
              data={vacation} pagination
              tableStyle={{ height: "auto" }}
              bodyStyle={{
                // background: "lightgray",
                height: "auto",
                marginBottom: 0
              }}
            >
              <TableHeaderColumn
                isKey dataField="name"
                dataSort filter={{ type: "TextFilter", delay: 1000 }}
              >
                Name
              </TableHeaderColumn>

              <TableHeaderColumn
                dataField="from" dataSort
                filter={{ type: "TextFilter", delay: 1000 }}
              >
                From
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="to" dataSort
                filter={{ type: "TextFilter", delay: 1000 }}
              >
                To
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="halfDay" dataSort
                filter={{ type: "TextFilter", delay: 1000 }}
              >
                Half Day?
              </TableHeaderColumn>

            </BootstrapTable>

          </Wrapper>

        );
      }
}
export default vacationTable;
