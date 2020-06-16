import React from 'react';
import './App.css';
import './tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Order() {
  return (
      <>
          <h1>Выберите способ доставки</h1>
          <Tabs>
              <TabList>
                  <Tab>Доставка</Tab>
                  <Tab>Самовывоз</Tab>
              </TabList>

              <TabPanel>
              </TabPanel>
              <TabPanel>
              </TabPanel>
          </Tabs>
      </>
  );
}

export default Order;
