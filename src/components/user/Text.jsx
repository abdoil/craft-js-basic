// import { useNode } from "@craftjs/core";
// import { useEffect, useState, useCallback } from "react";
// import ContentEditable from "react-contenteditable";
// import { Slider, FormControl, FormLabel } from "@mui/material";

// export const Text = ({ text, fontSize }) => {
//   // const {
//   //   connectors: { connect, drag },
//   //   hasSelectedNode,
//   //   hasDraggedNode,
//   //   actions: { setProp },
//   // } = useNode((state) => ({
//   //   hasSelectedNode: state.events.selected,
//   //   hasDraggedNode: state.events.dragged,
//   // }));
//   const {
//     connectors: { connect, drag },
//     isActive,
//     actions: { setProp },
//   } = useNode((node) => ({
//     isActive: node.events.selected,
//   }));

//   const [editable, setEditable] = useState(false);

//   useEffect(() => {
//     !isActive && setEditable(false);
//   }, [isActive]);

//   return (
//     <div ref={(ref) => connect(drag(ref))} onClick={() => setEditable(true)}>
//       <ContentEditable
//         disabled={!editable}
//         html={text}
//         onChange={(e) =>
//           setProp(
//             (props) =>
//               (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
//           )
//         }
//         tagName="p"
//         style={{ fontSize: `${fontSize}px` }}
//       />
//     </div>
//   );
// };

// const TextSettings = () => {
//   const {
//     actions: { setProp },
//     fontSize,
//   } = useNode((node) => ({
//     fontSize: node.data.props.fontSize,
//   }));

//   return (
//     <>
//       <FormControl size="small" component="fieldset">
//         <FormLabel component="legend">Font size</FormLabel>
//         <Slider
//           value={fontSize || 7}
//           step={7}
//           min={1}
//           max={50}
//           onChange={(_, value) => {
//             setProp((props) => (props.fontSize = value));
//           }}
//         />
//       </FormControl>
//     </>
//   );
// };

// Text.craft = {
//   props: {
//     text: "Hi",
//     fontSize: 20,
//   },
//   rules: {
//     canDrag: (node) => node.data.props.text != "Drag",
//   },
//   related: {
//     settings: TextSettings,
//   },
// };

import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { Slider, FormControl, FormLabel } from "@mui/material";

export const Text = ({ text, fontSize, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => setEditable(true)}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
  }));

  return (
    <FormControl size="small" component="fieldset">
      <FormLabel component="legend">Font size</FormLabel>
      <Slider
        value={fontSize || 20}
        step={1}
        min={1}
        max={50}
        onChange={(_, value) => {
          setProp((props) => (props.fontSize = value), 1000);
        }}
        aria-labelledby="font-size-slider"
      />
    </FormControl>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
  },
  rules: {
    // canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
