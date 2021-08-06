import { Button, Input, Spacer, useInput } from "@geist-ui/react";

export default function Feature(props) {
  const { state, reset, bindings } = useInput("");

  return (
    <div>
      <Spacer y={0.5} />
      <Input {...bindings} placeholder="Tags" />
      <Spacer y={0.5} />

      <Button>Add</Button>
    </div>
  );
}
