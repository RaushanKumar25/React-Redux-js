import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItem1 />

      <div className="row mt-3">
        <div className="col-6">Complete Assignment</div>
        <div className="col-4">06/11/2025</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
