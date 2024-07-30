import { FormControl, FormLabel, Slider, Paper } from "@mui/material";
import { useNode } from "@craftjs/core";
import { BlockPicker } from "react-color";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <BlockPicker
          color={background || "#000"}
          onChangeComplete={(color) =>
            setProp((props) => (props.background = color.hex), 500)
          }
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) =>
            setProp((props) => (props.padding = value), 500)
          }
          aria-labelledby="padding-slider"
          step={1}
          min={0}
          max={100}
        />
      </FormControl>
    </div>
  );
};
// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};
Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
