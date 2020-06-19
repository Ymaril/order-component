import React from 'react';
import './tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DeliveryForm from "./Order/DeliveryForm";
import PickPointForm from "./Order/PickPointForm";
import styles from './Order.module.css'

function Order() {
  return (
      <>
          <h1 className={styles['title']}>Выберите способ доставки</h1>
          <Tabs>
              <TabList>
                  <Tab>Доставка</Tab>
                  <Tab>Самовывоз</Tab>
              </TabList>
              <TabPanel>
                  <DeliveryForm/>
              </TabPanel>
              <TabPanel>
                  <PickPointForm/>
              </TabPanel>
          </Tabs>
      </>
  );
}

export default Order;
