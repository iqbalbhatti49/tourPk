import 'react-tabs/style/react-tabs.css';
import styles from "./ServicesTabs.module.css";
import {
  IconHotel, IconResturant, IconGuide, IconAgent, React, Button,
 Link, Tab, Tabs, TabList, TabPanel, IconLocation
}
from "../index";

import { Card, CardBody } from 'react-simple-card';

export default function ServicesTabs({services}) { 
    return (
    <div className={styles.container}>
        {services && (
          <div className={styles.tabs}>
            <Tabs focusTabOnClick={false}>
              <TabList>
                <Tab>
                  <IconHotel />
                  <p>Hotels</p>
                </Tab>
                <Tab>
                  <IconResturant />
                  <p>Restaurants</p>
                </Tab>
                <Tab><IconGuide />
                  <p>Tourist Guides</p></Tab>
                <Tab>
                  <IconAgent />
                  <p>Travel Agents</p>
                </Tab>
              </TabList>
              <TabPanel>
                <div className={styles.tabCards}>
                  {services.hotels.map((item, index) => {
                    if (item != null) {
                      return (
                        <Card>
                            <CardBody>
                            <div className={styles.body}>
                                <p className={styles.title}>{item.name}</p>
                                <div className={styles.location}>
                                    <IconLocation /> 
                                    <p className={styles.place}>{item.address}</p>
                                </div>
                                <Link to={`/hotelListing/${item.Hotels[0].id}`}>
                                    <Button value="View Details" type="secondary" />
                                </Link>
                            </div>
                            </CardBody>
                        </Card>
                      );
                    }
                  })}
                </div>
              </TabPanel>
              <TabPanel>
                <div className={styles.tabCards}>
                  {services.restaurant.map((item, index) => {
                    if (item != null) {
                      return (
                        <Card>
                            <CardBody>
                            <div className={styles.body}>
                                <p className={styles.title}>{item.name}</p>
                                <div className={styles.location}>
                                     <IconLocation /> 
                                    <p className={styles.place}>{item.address}</p>
                                </div>
                                <Link to={`/restaurantListing/${item.Restaurants[0].id}`}>
                                    <Button value="View Details" type="secondary" />
                                </Link>
                            </div>
                            </CardBody>
                        </Card>
                      );
                    }
                  })}
                </div>
              </TabPanel>
              <TabPanel>
                <div className={styles.tabCards}>
                  {services.tourGuide.map((item, index) => {
                    if (item != null) {
                      return (
                        <Card>
                            <CardBody>
                            <div className={styles.body}>
                                <p className={styles.title}>{item.name}</p>
                                <div className={styles.location}>
                                     <IconLocation /> 
                                    <p className={styles.place}>{item.address}</p>
                                </div>
                                <Link to={`/tourGuideListing/${item.TourGuides[0].id}`}>
                                    <Button value="View Details" type="secondary" />
                                </Link>
                            </div>
                            </CardBody>
                        </Card>
                      );
                    }
                  })}
                </div>
              </TabPanel>
              <TabPanel>
                <div className={styles.tabCards}>
                  {services.travelAgent.map((item, index) => {
                    if (item != null) {
                      return (
                        <Card>
                            <CardBody>
                            <div className={styles.body}>
                                <p className={styles.title}>{item.name}</p>
                                <div className={styles.location}>
                                     <IconLocation /> 
                                    <p className={styles.place}>{item.address}</p>
                                </div>
                                <Link to={`/travelAgentListing/${item.TravelAgents[0].id}`}>
                                    <Button value="View Details" type="secondary" />
                                </Link>
                            </div>
                            </CardBody>
                        </Card>
                      );
                    }
                  })}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        )}
    </div>
  );
}