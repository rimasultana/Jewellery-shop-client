const ContactForm = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8">
        {" "}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">
            Stability LTD., Old Town Avenue, New York, USA 23000
          </p>
          <p className="flex items-center gap-2 mb-2">
            <span>📞</span> +1700 124-5678, +1700 124-5678
          </p>
          <p className="flex items-center gap-2 mb-2">
            <span>📧</span> info@dan-fisher.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <span>💬</span> dan_fisher, help_danfisher
          </p>
          <p className="flex items-center gap-2">
            <span>⏰</span> Monday - Friday 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
