/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';

import Header from './Header/Header'
import Footer from './Footer/Footer'

import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import {Link} from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import lightBlue from 'material-ui/colors/lightBlue';
import deepOrange from 'material-ui/colors/deepOrange';

const theme = createMuiTheme({
    palette: createPalette({
      primary: lightBlue,
      accent: deepOrange,
      type: 'light'
    })
});
//console.log();

const styleSheet = createStyleSheet(theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 210
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    flex: {
        flex: 1,
    }
}));
class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drawerOpen: true
        };
    }
    toggleDrawer = (open) => {
        this.setState({ drawerOpen: drawerState });
    };
    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);



    render(props){
        //let params = qs.stringify({referrer: props.location.pathname});
        const classes = this.props.classes;
        const sideList = (
            <div>
                <List className={classes.list} disablePadding>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Link to="/apis">
                            <ListItemText primary="APIs" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <Link to="/applications">
                            <ListItemText primary="Applications" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <Link to="/forum">
                            <ListItemText primary="Forum" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <Link to="/analytics">
                            <ListItemText primary="Analytics" />
                        </Link>
                    </ListItem>
                </List>

            </div>
        );
        return (

        <MuiThemeProvider theme={theme}>
          <div className="main">
            <div className={classes.root}>
                <Drawer
                    open={this.state.drawerOpen}
                    onRequestClose={this.handleLeftClose}
                    docked={true}
                >
                    {sideList}
                </Drawer>
                <Header/>
                {this.props.children}

            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
        );
    }

}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styleSheet)(Layout);
