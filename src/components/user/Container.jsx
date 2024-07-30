import { FormControl, FormLabel, Slider, Paper } from "@mui/material";
import { useNode } from "@craftjs/core";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
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
    background = "#fff",
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  // Initialize color state using useColor hook
  const [color, setColor] = useColor("hex", background);

  // Update state when the color changes
  const handleColorChange = (newColor) => {
    setColor(newColor);
    setProp((props) => (props.background = newColor.hex), 500);
  };

  // Update state when the padding changes
  const handlePaddingChange = (event, newValue) => {
    setProp((props) => (props.padding = newValue));
  };

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          width={456}
          height={228}
          color={color}
          onChange={handleColorChange}
          hideHSV
          dark
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={handlePaddingChange}
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
