import { ReactNode } from "react";

type todosProps = {
  items: string[];
  children?: ReactNode;
};

const Todos = ({ items, children }: todosProps) => {
  return <ul>{items.map(() => {})}</ul>;
};

// const Todos: React.FunctionComponent<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => {
//         <li key={item}>{item}</li>;
//       })}
//     </ul>
//   );
// };
export default Todos;
