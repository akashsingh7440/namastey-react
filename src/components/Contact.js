import { useState } from "react";

const contactInfoData = [
  {
    id: 1,
    icon: "📍",
    label: "Our Address",
    value: "123 Market Street, Suite 400",
    sub: "San Francisco, CA 94103",
  },
  {
    id: 2,
    icon: "📞",
    label: "Phone",
    value: "+1 (800) 123-4567",
    sub: "Mon – Fri, 9am – 6pm PST",
  },
  {
    id: 3,
    icon: "✉️",
    label: "Email",
    value: "hello@ourbrand.com",
    sub: "We reply within 24 hours",
  },
];

const ContactInfoCardComponent = (prop) => {
  const { info } = prop;
  return (
    <div className="bg-[#FFF2EF] rounded-lg shadow-md p-6 flex gap-4 items-start">
      <span className="text-2xl">{info.icon}</span>
      <div>
        <h3 className="text-[#810000] font-bold text-sm tracking-widest uppercase mb-1">
          {info.label}
        </h3>
        <p className="text-[#472D2D] font-semibold text-sm">{info.value}</p>
        <p className="text-[#594545] text-xs mt-0.5">{info.sub}</p>
      </div>
    </div>
  );
};

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      formData.name.trim() &&
      formData.email.trim() &&
      formData.subject.trim() &&
      formData.message.trim();

    isFormValid && setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#FFF2EF] min-h-screen">
      {/* Hero */}

      {/* Contact Form */}
      <div className="bg-[#F3F2EC] py-14 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mx-auto max-w-2xl text-center py-16 px-6">
            <h1 className="text-4xl font-bold text-[#810000]">Contact US</h1>
          </div>
          <h2 className="text-[#810000] font-bold text-xl mb-6 border-b-2 border-[#DA0037] pb-2">
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="bg-[#FFF2EF] rounded-lg shadow-md p-10 text-center">
              <span className="text-4xl">✅</span>
              <h3 className="text-[#810000] font-bold text-xl mt-4 mb-2">
                Message Sent!
              </h3>
              <p className="text-[#472D2D] text-sm leading-relaxed mb-6">
                Thank you,{" "}
                <span className="font-semibold">{formData.name}</span>! We've
                received your message and will get back to you at{" "}
                <span className="font-semibold">{formData.email}</span> shortly.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#810000] text-white text-sm font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#DA0037] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-[#FFF2EF] rounded-lg shadow-md p-8">
              <div className="flex flex-col gap-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[#594545] text-xs font-semibold uppercase tracking-widest">
                      Full Name <span className="text-[#DA0037]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="border border-[#E8E0D5] rounded-lg px-4 py-2.5 text-sm text-[#472D2D] bg-white focus:outline-none focus:border-[#DA0037] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[#594545] text-xs font-semibold uppercase tracking-widest">
                      Email Address <span className="text-[#DA0037]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border border-[#E8E0D5] rounded-lg px-4 py-2.5 text-sm text-[#472D2D] bg-white focus:outline-none focus:border-[#DA0037] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#594545] text-xs font-semibold uppercase tracking-widest">
                    Subject <span className="text-[#DA0037]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="border border-[#E8E0D5] rounded-lg px-4 py-2.5 text-sm text-[#472D2D] bg-white focus:outline-none focus:border-[#DA0037] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#594545] text-xs font-semibold uppercase tracking-widest">
                    Message <span className="text-[#DA0037]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    className="border border-[#E8E0D5] rounded-lg px-4 py-2.5 text-sm text-[#472D2D] bg-white focus:outline-none focus:border-[#DA0037] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="bg-[#810000] text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-md hover:bg-[#DA0037] transition-colors self-start"
                >
                  Send Message →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-2xl text-center py-16 px-6">
        <span className="text-xs tracking-widest uppercase text-[#DA0037] font-semibold">
          Get In Touch
        </span>
        <p className="text-[#472D2D] text-sm leading-relaxed">
          Have a question, feedback, or just want to say hello? We'd love to
          hear from you. Fill out the form below and our team will get back to
          you within 24 hours.
        </p>
      </div>
      {/* Contact Info Cards */}
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactInfoData.map((info) => (
            <ContactInfoCardComponent key={info.id} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
