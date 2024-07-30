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
import { useEffect, useState } from "react";
import lz from "lzutf8";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    // Additional styles
  },
}));
export default function App() {
  const [enabled, setEnabled] = useState(true);
  // const [json, setJson] = useState(null);
  // Base64-encoded and compressed JSON string
  const compressedData =
    "eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENWJhY2tncm91bmQiOiIjZDk0NjQ2IiwicGFkZGluZyI6NX0sImRpc3BsYXnRWCwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiamxEd1lUMGdxRyIsIlpOa3htdHQ5bmIiLCJoSVQ1aUVpaWJVIiwiLXFpOXktM1ZLOCJdLCJsaW5rZWROxkR7fX0sInVyNEFnWTR4N0L8APRhcmTuAO/nAI7oAPDyAM7EMu4AyXBhcmVudCI65gFh+QDZ9QCmbUx3eUdLRTZpQ/sApkJ1dHRvbv0AqCJzaXrEK3NtYWxsIiwidmFyaWHlAJVvdXRsaW5l5QC1b2xvciI6InByaW1hcnkiLCJ0ZXjEJENsaWNrIG1lxCRoaWxkcuQAv8YWxHbuAQLnAI7/AQT/AQTsAQRZaFBOdkc1d1NS+wEEVOQAqv0BAucAzEhpIHdvcmxkISIsImZvbnRT5QEZMjAs7gEj8QDXxWH/ANX/ANXsANVxOURwTENmZS1R/wNz/wNz8QNzOTk57ANwMv8DcP8AzvMDgFZLRzd0TXVvOUf2A1nLIP8Br/8Br+UBr0l0cyBtZSBhZ2Fpbv8Bs/8Bs+4A5esBgP8Bue8A3+sEf/8EOP8EOP8EOP8BkfsApugBO3lrNV9hQ3A1bnoiLCJi5QOWcyI6IlplSkVmOUdJM08i5ADQ6wVC/wRi/wRi/wRi/wRi/wRi/wRi/wEu/wHU7AY5/wKz/wKz5wRiJ3PmBGT/ArD/ArD/ANb/ANbtBwL/BGP/BGP/BGP/BGP/AM70BGN1em9fRUZlcGst9we8yiD/AbD/AbDxBGP/AbL/AbLtAOTrAX//AbjvAN7rA7j+BGJUb3D8Abb1BGTENPcAse0JWfgBmzRoN1BvLXFfa+QJZGthaVQ0U1pvRXr2AajLLf8BqP8BqOUBqFRpdGzkBCHsAaH/AZLuAOHtBRH/AZLtAMjrAOj/AMj/AMjlAMhTdWJ08QDLMfILGf8Ay/8Ay/cAy+sF/v4CXUJvdMR3/wJg8QJgxzf/AmP9AmNrRUhUWFYwX1Fy9gJWyyD/BrL/BrL5BrJj5wTA/QazTGVhcm4gbW9yZf8GovEBBusBhP8Bve0A+n0=";

  // Decompress the Base64 encoded string and parse the resulting JSON
  const decompressedData = lz.decompress(lz.decodeBase64(compressedData));
  const initialJson = JSON.parse(decompressedData);

  // Load save state from server on page load
  // useEffect(() => {
  //   const stateToLoad = await fetch("your api to get the compressed data");
  //   const json = lz.decompress(lz.decodeBase64(stateToLoad));
  //   setJson(json);
  // }, []);

  const classes = useStyles();
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor
        resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}
        enabled={enabled}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            {/* <Frame data='{"ROOT":{"type":{"resolvedName":"Container"},"isCanvas":true,"props":{"background":"#eee","padding":5},"displayName":"Container","custom":{},"hidden":false,"nodes":["djXC1HCay3","ySg71ErCa0","mtr7ThCRJ_","Xs1ESpnTgY","JsNiRx4az9"],"linkedNodes":{}},"2jWvM9Pvkw":{"type":{"resolvedName":"Card"},"isCanvas":false,"props":{},"displayName":"Card","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"XKGII6nNeG":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{"size":"small","variant":"outlined","color":"primary","text":"Click me","children":"Click"},"displayName":"Button","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"aE99VACLyS":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Hi world!","fontSize":20,"size":"small"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"3mpFIhbPbf":{"type":{"resolvedName":"Container"},"isCanvas":true,"props":{"background":"#999","padding":2},"displayName":"Container","custom":{},"parent":"ROOT","hidden":false,"nodes":["n1CwLb7GZg"],"linkedNodes":{}},"n1CwLb7GZg":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Its me again!","fontSize":20,"size":"small"},"displayName":"Text","custom":{},"parent":"3mpFIhbPbf","hidden":false,"nodes":[],"linkedNodes":{}},"djXC1HCay3":{"type":{"resolvedName":"Card"},"isCanvas":false,"props":{"background":"#ba1d1d"},"displayName":"Card","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{"text":"DdPXWBghwA","buttons":"MwlLGQZI0u"}},"mtr7ThCRJ_":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{"size":"small","variant":"outlined","color":"primary","text":"Click me","children":"Click"},"displayName":"Button","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"Xs1ESpnTgY":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Hi world!","fontSize":20,"size":"small"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"JsNiRx4az9":{"type":{"resolvedName":"Container"},"isCanvas":true,"props":{"background":"#999","padding":2},"displayName":"Container","custom":{},"parent":"ROOT","hidden":false,"nodes":["vkhCzMYBkn"],"linkedNodes":{}},"vkhCzMYBkn":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Its me again!","fontSize":20,"size":"small"},"displayName":"Text","custom":{},"parent":"JsNiRx4az9","hidden":false,"nodes":[],"linkedNodes":{}},"DdPXWBghwA":{"type":{"resolvedName":"CardTop"},"isCanvas":true,"props":{},"displayName":"CardTop","custom":{},"parent":"djXC1HCay3","hidden":false,"nodes":["DcEyfy8-jO","MKNNvaDfEQ"],"linkedNodes":{}},"DcEyfy8-jO":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Title","fontSize":20},"displayName":"Text","custom":{},"parent":"DdPXWBghwA","hidden":false,"nodes":[],"linkedNodes":{}},"MKNNvaDfEQ":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Subtitle","fontSize":15},"displayName":"Text","custom":{},"parent":"DdPXWBghwA","hidden":false,"nodes":[],"linkedNodes":{}},"MwlLGQZI0u":{"type":{"resolvedName":"CardBottom"},"isCanvas":true,"props":{},"displayName":"CardBottom","custom":{},"parent":"djXC1HCay3","hidden":false,"nodes":["IKu-t90UdF"],"linkedNodes":{}},"IKu-t90UdF":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{"size":"small","variant":"contained","color":"primary","text":"Learn more"},"displayName":"Button","custom":{},"parent":"MwlLGQZI0u","hidden":false,"nodes":[],"linkedNodes":{}},"ySg71ErCa0":{"type":{"resolvedName":"Container"},"isCanvas":true,"props":{"background":"#3fa27c","padding":20},"displayName":"Container","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}'> */}
            <Frame data={initialJson}>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  <Text size="small" text="Its me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={4}>
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
