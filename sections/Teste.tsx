interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return <div style={{ padding: "16px", backgroundColor: "red", width: "100%", height: "70px" }}>Hello {name}</div>
}