import React from "react";
import ReactDOM from "react-dom";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  TextField,
  Box
} from "@material-ui/core";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";

import "../Common.css";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

// A basic app containing two tabs.
// Based on: https://material-ui.com/components/tabs/#fixed-tabs

const TabPanel = ({ children, value, index, ...other }) => {
  return value === index ? (
    <Typography 
     component="div" 
     role="tabpanel" 
     hidden={value !== index} 
     id={`simple-tabpanel-${index}`} 
     aria-labelledby={`simple-tab-${index}`} 
     {...other} 
   > 
     {value === index ? <Box p={3}>{children}</Box> : null}
   </Typography> 
  ) : null;
};

export default function TextInput (){
  const theme = useTheme();

  const [field1, setField1] = React.useState("Foobar");
  function handleField1(event) {
    setField1(event.target.value);
  }

  const [field2, setField2] = React.useState("Testing");
  function handleField2(event) {
    setField2(event.target.value);
  }

  const [currentTab, setCurrentTab] = React.useState(0);
  const handleTabEvent = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <CssBaseline>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h4">Test</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Tabs
          value={currentTab}
          onChange={handleTabEvent}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Tab1" {...a11yProps(0)} />
          <Tab label="Tab2" {...a11yProps(1)} />
        </Tabs>
        {/* <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={currentTab}
          onChangeIndex={setCurrentTab}
        > */}
          <TabPanel value={currentTab} index={0} dir={theme.direction}>
            <form noValidate>
              <TextField
                id="standard-name"
                label="Name"
                value={field1}
                onChange={handleField1}
                margin="normal"
                variant="outlined"
              />
            </form>
          </TabPanel>
          <TabPanel value={currentTab} index={1} dir={theme.direction}>
            <TextField
              id="form-field2"
              value={field2}
              label="Field Two"
              onChange={handleField2}
              variant="outlined"
            />
          </TabPanel>
        {/* </SwipeableViews> */}
      </Container>
    </CssBaseline>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<TextInput />, rootElement);
