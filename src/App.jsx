import { Typography, Paper, Grid } from "@mui/material";
import { Toolbox } from "./components/Toolbox.jsx";
import { SettingsPanel } from "./components/SettingsPanel.jsx";
import { Topbar } from "./components/Topbar.jsx";
import { Container } from "./components/user/Container.jsx";
import { Card, CardBottom, CardTop } from "./components/user/Card.jsx";
import { Button } from "./components/user/Button.jsx";
import { Text } from "./components/user/Text.jsx";
import { makeStyles } from "tss-react/mui";
import { Editor, Frame, Element } from "@craftjs/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    // Additional styles
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
        <Topbar />
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
