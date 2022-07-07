import react from "react";
import { toast } from "react-toastify";
import api from "../../api";

const getForm = () => {
  const [formData, setFormData] = react.useState({
    name: "",
    email: "",
    message: "",
  });

  const formSubmitClick = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      return toast.error("Please enter your username");
    }
    if (formData.email === "") {
      return toast.error("Please enter your email");
    }
    if (formData.message === "") {
      return toast.error("Please enter you message");
    }

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    api("post", "/admins/contact", formData)
      .then((resp) => {
        setFormData({ name: "", email: "", message: "" });
        toast.success(resp.data.message);
      })
      .catch((err) => {
        throw err;
      });
  };

  const formChangeEvent = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="GetaQuote_form_div" id="getForm">
        <form
          action=""
          className="GetaQuote_main_form"
          onSubmit={formSubmitClick}
        >
          <div>
            <label htmlFor="" className="GetaQuote_label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="GetaQuote_inputs"
              placeholder="Type here"
              onChange={formChangeEvent}
              // required
            />
          </div>
          <div>
            <label htmlFor="email" className="GetaQuote_label">
              Email Address
            </label>
            <input
              type="text"
              className="GetaQuote_inputs"
              placeholder="ABCD@gmail.com"
              name="email"
              onChange={formChangeEvent}
              value={formData.email}
              // required
            />
          </div>
          <div>
            <label htmlFor="email" className="GetaQuote_label">
              Message
            </label>
            <textarea
              type="text"
              rows={5}
              className="GetaQuote_inputs"
              placeholder="Type Something"
              name="message"
              value={formData.message}
              onChange={formChangeEvent}
              // required
            />
          </div>
          <div>
            <button className="GetaQuote_btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default getForm;
