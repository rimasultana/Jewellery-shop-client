import ContactFrom from "./ContactFrom";

const Contact = () => {
  return (
    <>
      <section className="my-14 w-fu mx-auto">
        <div className="flex flex-col md:flex-row p-8 bg-gray-100 ">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold text-teal-800">
              We Value Feedback
            </h1>
            <p className="mt-2 text-gray-600">
              Donec elementum, sapien quis viverra laoreet, mauris lorem gravida
              ipsum, eu vehicula magna ligula sit amet lectus.
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-teal-800">
                Working Hours
              </h2>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>✨ Monday to Friday - 08:00 AM to 08:00 PM</li>
                <li>✨ Saturday - 08:00 AM to 02:00 PM</li>
                <li>✨ Sunday - Holiday</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
            <form className="flex flex-col space-y-4 py-5">
              <input
                type="text"
                placeholder="Name*"
                className="p-3 rounded-md border-gray-200 border-2 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="p-3 rounded-md border-gray-200 border-2 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="date"
                placeholder="Enter Date*"
                className="p-3 rounded-md border-gray-200 border-2 focus:outline-none focus:border-blue-500"
                required
              />
              <textarea
                placeholder="Message*"
                className="p-3 rounded-md border-gray-200 border-2 focus:outline-none focus:border-blue-500 h-24"
                required
              ></textarea>
              <button className="bg-teal-800 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors">
                Send Message ➡
              </button>
            </form>
          </div>
        </div>
      </section>
      <ContactFrom />
    </>
  );
};

export default Contact;
