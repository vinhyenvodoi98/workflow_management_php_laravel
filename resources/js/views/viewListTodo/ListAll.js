import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { TreeDataState, CustomTreeData } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn
} from '@devexpress/dx-react-grid-material-ui';

const getChildRows = (row, rootRows) => (row ? row.items : rootRows);

function ListAll(props) {
  const [columns] = useState([
    { name: 'name', title: 'Work Name' },
    { name: 'description', title: 'Description' },
    { name: 'status', title: 'Status' },
    { name: 'progress', title: 'Progress' },
    { name: 'action', title: 'Action' },
    { name: 'priority', title: 'Priority' },
    { name: 'start_date', title: 'Start_date' },
    { name: 'due_date', title: 'Due_date' }
  ]);

  const [data, setData] = useState([]);

  const [tableColumnExtensions] = useState([{ columnName: 'name', width: 300 }]);

  useEffect(() => {
    setData(props.groupData);
  });

  return (
    <>
      <Paper>
        <Grid rows={data} columns={columns}>
          <TreeDataState />
          <CustomTreeData getChildRows={getChildRows} />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow />
          <TableTreeColumn for='name' />
        </Grid>
      </Paper>
    </>
  );
}

export default ListAll;
