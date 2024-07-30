import { useNode } from "@craftjs/core";
import {
  Button as MaterialButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

// The Button component itself, rendering a Material-UI Button
export const Button = ({ size, variant, color, text, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <MaterialButton
        style={{ margin: "5px" }}
        size={size}
        variant={variant}
        color={color}
        {...props}
      >
        {text}
      </MaterialButton>
    </div>
  );
};

// Settings for the Button component to control size, variant, and color
const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          //The RadioGroup now uses the value prop instead of defaultValue.
          value={props.size}
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <FormControlLabel
            label="Small"
            value="small"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Medium"
            value="medium"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Large"
            value="large"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup
          value={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <FormControlLabel
            label="Text"
            value="text"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Contained"
            value="contained"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup
          value={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        >
          <FormControlLabel
            label="Primary"
            value="primary"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Secondary"
            value="secondary"
            control={<Radio size="small" color="secondary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

Button.craft = {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
