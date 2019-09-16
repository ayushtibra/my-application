import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

const navbar = props => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText insent>
          <TypoGraphy color="inherit" variant="button">
            Home
          </TypoGraphy>
        </ListItemText>

        <ListItemText insent>
          <TypoGraphy color="inherit" variant="button">
            About
          </TypoGraphy>
        </ListItemText>

        <ListItemText insent>
          <TypoGraphy color="inherit" variant="button">
            Contact-Us
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default navbar;
