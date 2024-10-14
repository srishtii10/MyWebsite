import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ccfc700-e2ed-4b5b-9c33-e2a08ac5ac67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowToast(true); // Show the toast
      setTimeout(() => {
        setShowToast(false); // Hide the toast after 3 seconds
      }, 3000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="w-full mt-7 mb-5">
        <div className="sm:w-3/5 w-11/12 contactform mb-10 shadow-2xl mx-auto rounded-lg overflow-hidden bg-red-300 ">
          <div
            style={{
              backgroundColor: "rgb(190, 60, 108)",
              fontFamily: "Morganite",
            }}
            className="h-20 tracking-wide w-full text-white text-center text-6xl font-light pt-5"
          >
            LET'S GET IN TOUCH
          </div>
          <div>
            <form
              onSubmit={onSubmit}
              className="flex p-[5%] flex-col items-center"
            >
              <h1 className="sm:w-3/4 w-11/12 sm:mb-1 sm:text-xl text-lg text-pink-800 font-bold">
                FIRST NAME
              </h1>
              <input
                type="text"
                name="first_name"
                className="bg-zinc-100 sm:p-2  p-1 sm:text-lg text-md sm:w-3/4 w-11/12 rounded-md mb-3"
                placeholder="Enter Your First Name"
                required
              />

              <h1 className="sm:w-3/4 w-11/12 sm:mb-1 sm:text-xl text-lg text-pink-800 font-bold">
                LAST NAME
              </h1>
              <input
                type="text"
                name="last_name"
                className="bg-zinc-100 sm:p-2 p-1 sm:text-lg text-md sm:w-3/4 w-11/12 rounded-md mb-3"
                placeholder="Enter Your Last Name"
                required
              />

              <h1 className="sm:w-3/4 w-11/12 sm:mb-1 sm:text-xl text-lg text-pink-800 font-bold">
                EMAIL
              </h1>
              <input
                type="email"
                name="email"
                className="bg-zinc-100 sm:p-2 p-1 sm:text-lg text-md sm:w-3/4 w-11/12 rounded-md mb-3"
                placeholder="Enter Your Email"
                required
              />

              <h1 className="sm:w-3/4 w-11/12 sm:mb-1 sm:text-xl text-lg text-pink-800 font-bold">
                MESSAGE
              </h1>
              <textarea
                name="message"
                className="bg-zinc-100 sm:p-2 p-1 sm:text-lg text-md sm:w-3/4 w-11/12 rounded-md mb-2"
                placeholder="Enter message..."
                rows={3}
                required
              ></textarea>

              <div className="sm:w-3/4 w-11/12">
                <button
                  type="submit"
                  className="px-3 py-2 border border-pink-800 text-pink-800 rounded-lg font-bold"
                >
                  Send Message
                </button>
              </div>
            </form>

            {showToast && ( // Conditionally render the toast
              <div
                style={{
                  position: "fixed",
                  bottom: "100px",
                  right: "40px",
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                className="text-sm"
              >
                <i> Form Submitted Successfully!!</i>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
