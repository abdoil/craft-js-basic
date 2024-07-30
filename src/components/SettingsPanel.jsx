// import { useEditor } from "@craftjs/core";
// import {
//   Box,
//   Chip,
//   Grid,
//   Typography,
//   Button as MaterialButton,
//   FormControl,
//   FormLabel,
//   Slider,
// } from "@mui/material";
// import React from "react";

// export const SettingsPanel = () => {
//   const { actions, selected, isEnabled } = useEditor((state, query) => {
//     const [currentNodeId] = state.events.selected;
//     let selected;

//     if (currentNodeId) {
//       selected = {
//         id: currentNodeId,
//         name: state.nodes[currentNodeId].data.name,
//         settings:
//           state.nodes[currentNodeId].related &&
//           state.nodes[currentNodeId].related.settings,
//         isDeletable: query.node(currentNodeId).isDeletable(),
//       };
//     }

//     return {
//       selected,
//       isEnabled: state.options.enabled,
//     };
//   });
//   return isEnabled && selected ? (
//     <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
//       <Grid container direction="column" spacing={0}>
//         <Grid item>
//           <Box pb={2}>
//             <Grid container alignItems="center">
//               <Grid item xs>
//                 <Typography variant="subtitle1">Selected</Typography>
//               </Grid>
//               <Grid item>
//                 <Chip size="small" color="primary" label={selected.name} />
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>
//         )
//         {/* <FormControl size="small" component="fieldset">
//           <FormLabel component="legend">Prop</FormLabel>
//           <Slider
//             defaultValue={0}
//             step={1}
//             min={7}
//             max={50}
//             valueLabelDisplay="auto"
//           />
//         </FormControl> */}
//         <div data-cy="settings-panel">
//           {selected.settings && React.createElement(selected.settings)}
//         </div>
//         {selected.isDeletable ? (
//           <MaterialButton
//             variant="contained"
//             color="default"
//             onClick={() => {
//               actions.delete(selected.id);
//             }}
//           >
//             Delete
//           </MaterialButton>
//         ) : null}
//       </Grid>
//     </Box>
//   ) : null;
// };
import { useEditor } from "@craftjs/core";
import {
  Box,
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
} from "@mui/material";
import React from "react";

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected || [];

    let selected = null;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId]?.data.name || "",
        settings: state.nodes[currentNodeId]?.related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && selected ? (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="subtitle1">Selected</Typography>
              </Grid>
              <Grid item>
                <Chip size="small" color="primary" label={selected.name} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable && (
          <MaterialButton
            variant="contained"
            color="primary"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </MaterialButton>
        )}
      </Grid>
    </Box>
  ) : null;
};
