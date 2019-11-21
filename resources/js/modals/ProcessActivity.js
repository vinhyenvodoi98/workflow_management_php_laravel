import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function ProcessActivity(props) {
  return (
    <div className='col'>
      <Tabs>
        <TabList>
          <Tab>Activity</Tab>
          <Tab>Exchange</Tab>
          <Tab>Document</Tab>
          <Tab>Input</Tab>
          <Tab>Output</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ProcessActivity;
