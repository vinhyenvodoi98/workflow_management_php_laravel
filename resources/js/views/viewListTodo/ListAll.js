import React, { useState } from 'react';
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
    { name: 'action', title: 'Action' },
    { name: 'state', title: 'Status' },
    { name: 'progress', title: 'Progress' },
    { name: 'implementer', title: 'Implementer' },
    { name: 'prioritize', title: 'Prioritize' },
    { name: 'start', title: '1/5/2019' },
    { name: 'end', title: '15/5/2019' }
  ]);

  const [data] = useState([
    {
      name: 'Cong viec 1',
      action: 'Action',
      status: 'in progress',
      progress: '50%',
      implementer: 'Tran Dan',
      prioritize: 'High',
      start: '1/5/2019',
      end: '15/5/2019',
      items: null
    },
    {
      name: 'Cong viec 2',
      action: 'Action',
      status: 'in progress',
      progress: '50%',
      implementer: 'Tran Dan',
      prioritize: 'High',
      start: '1/5/2019',
      end: '15/5/2019',
      items: [
        {
          name: 'Cong viec 2.1',
          action: 'Action',
          status: 'in progress',
          progress: '100%',
          implementer: 'Tran Dan',
          prioritize: 'High',
          start: '1/5/2019',
          end: '15/5/2019',
          items: null
        },
        {
          name: 'Cong viec 2.2',
          action: 'Action',
          status: 'in progress',
          progress: '30%',
          implementer: 'Tran Dan',
          prioritize: 'High',
          start: '1/5/2019',
          end: '15/5/2019',
          items: null
        }
      ]
    }
  ]);

  const [tableColumnExtensions] = useState([{ columnName: 'name', width: 300 }]);

  function onChange() {
    console.log('1');
  }

  return (
    <Paper onClick={onChange}>
      <Grid rows={data} columns={columns}>
        <TreeDataState />
        <CustomTreeData getChildRows={getChildRows} />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
        <TableTreeColumn for='name' />
      </Grid>
    </Paper>
  );
}

export default ListAll;
