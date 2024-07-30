import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import { Container } from "./Container.jsx";
import { useNode, Element } from "@craftjs/core";
import { ContainerSettings } from "./Container.jsx";
import { ContainerDefaultProps } from "./Container.jsx";
// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

export const CardTop = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      {...props}
      ref={connect}
      className="text-only"
      style={{
        padding: "10px",
        marginBottom: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};

export const Card = ({ background, padding = 20, ...props }) => {
  return (
    <Container {...props} background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Button size="small" text="Learn more" />
      </Element>
    </Container>
  );
};

Card.craft = {
  related: {
    props: ContainerDefaultProps,
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
