function App() {
  return (
    <center>
      <h1>TODO App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Whats your TODO?" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Buy Groceries
          </div>
          <div class="col-4">
            06/11/2025
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Complete Assignment
          </div>
          <div class="col-4">
            06/11/2025
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
