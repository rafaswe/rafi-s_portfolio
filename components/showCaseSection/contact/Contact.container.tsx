"use client";
import CustomToast from "@/components/common/CustomToast";
import Send from "@/components/common/Send";
import emailjs from "emailjs-com";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ComponentLayout from "../Component.layout";
// Define the types for the form inputs
interface IFormInput {
  name: string;
  email: string;
  message: string;
}
const ContactContainer = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>(); // Define form inputs using IFormInput
  const [loading, setLoading] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "info"
  );

  // Define the onSubmit function type with the form data
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);

    // EmailJS sending email
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Access Service ID from .env.local
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Replace with your template ID
        {
          from_name: data?.name,
          email: data.email,
          message: `${data.message}`, // Append name with the message
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "" // Replace with your user ID from EmailJS
      ).then;
      setToastMessage("Email sent successfully!");
      setToastType("success");
      reset(); // Reset form
    } catch {
      setToastMessage("Failed to send email. Please try again.");
      setToastType("error");
    } finally {
      setLoading(false);
      setShowToast(true);
    }
  };

  return (
    <ComponentLayout title="Contact">
      <div className="flex flex-col gap-6">
        {/* Map section  */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.700787493159!2d90.46419211109638!3d23.68665599113147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7001f5a00bd%3A0x28a4e8bc978775d8!2sRafa&#39;s%20Palace!5e0!3m2!1sen!2sbd!4v1727838051808!5m2!1sen!2sbd"
          width="600"
          height="250"
          className="border-0 w-full rounded-xl"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Contact Form</p>

          <form
            className="grid grid-cols-2 gap-x-4  gap-y-3.5"
            onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full name"
              {...register("name", { required: true })}
              className="px-3 py-2.5 rounded-lg focus:outline-none bg-secondary border border-card"
            />
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="px-3 py-2.5 rounded-lg focus:outline-none bg-secondary border border-card"
            />
            <textarea
              className="col-span-2 px-3 py-2.5 rounded-lg text-white focus:outline-none bg-secondary border border-card"
              placeholder="Your Message"
              rows={4}
              {...register("message", { required: true })}></textarea>
            <div className="col-span-2 flex justify-end text-white">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center font-medium rounded-lg transition-all hover:scale-105 duration-300 hover:bg-active hover:text-secondary shadow-2xl justify-center gap-2 w-36 py-2 border-card border"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {loading ? (
                  <Spinner />
                ) : (
                  <Send className="w-4 h-4 " active={!isHovered} />
                )}
                <p>{loading ? "Sending..." : "Submit"}</p>
              </button>
            </div>
            {showToast && (
              // <div className="text-white col-span-2">{responseMessage}</div>
              <CustomToast
                message={toastMessage}
                type={toastType}
                duration={4000}
                onClose={() => setShowToast(false)}
              />
            )}
          </form>
        </div>
      </div>
    </ComponentLayout>
  );
};

const Spinner = () => {
  return (
    <div role="status ">
      <svg
        aria-hidden="true"
        className="inline w-4 h-4  text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ContactContainer;
