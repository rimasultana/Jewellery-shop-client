const PostJewellery = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const from = new FormData(e.target);
    const photo = from.get("photo");
    const name = from.get("name");
    const description = from.get("description");

    const postData = {
      photo,
      name,
      description,
    };
    fetch("http://localhost:5001/jewellery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            alert("Post done!")
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="card bg-base-100 w-11/12 mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlePost} className="card-body">
          <h1 className="">Post Data</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">URL</span>
            </label>
            <input
              type="photo"
              name="photo"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostJewellery;
