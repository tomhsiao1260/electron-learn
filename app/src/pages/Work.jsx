import { TodoForm } from "../components/TodoForm";

export const Work = () => {
  const electron = window.electron;

  return (
    <div>
      This is work space
      <br />
      {electron.homeDir()}
      <br />
      {electron.osVersion()}
      <TodoForm />
    </div>
  );
};
