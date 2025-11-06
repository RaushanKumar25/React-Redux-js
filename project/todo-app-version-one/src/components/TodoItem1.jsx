function TodoItem1() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">Buy Groceries</div>
        <div className="col-4">06/11/2025</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
