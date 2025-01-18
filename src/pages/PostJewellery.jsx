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
        if (data.insertedId) {
          alert("Post done!");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div classNameName="card bg-base-100 w-11/12 mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlePost} classNameName="card-body">
          <h1 classNameName="">Post Data</h1>
          <div classNameName="form-control">
            <label classNameName="label">
              <span classNameName="label-text">URL</span>
            </label>
            <input
              type="photo"
              name="photo"
              placeholder="email"
              classNameName="input input-bordered"
            />
          </div>
          <div classNameName="form-control">
            <label classNameName="label">
              <span classNameName="label-text">name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              classNameName="input input-bordered"
            />
          </div>
          <div classNameName="form-control">
            <label classNameName="label">
              <span classNameName="label-text">description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="description"
              classNameName="input input-bordered"
            />
          </div>
          <div classNameName="form-control mt-6">
            <button classNameName="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostJewellery;
