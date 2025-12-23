"use client";
import { toast, Slide, ToastOptions } from "react-toastify";
interface ToastProps {
  message: string;
  title: string;
  style?: string;
  type?: "success" | "error" | "warning" | "info" ;
}
const Toast = ({ message, title, style, type }: ToastProps) => {
  const data: ToastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
  };
  const notify = () => {
    if (type === "success") toast.success(message, data);
    if (type === "error") toast.error(message, data);
    if (type === "warning") toast.warning(message, data);
    if (type === "info") toast.info(message, data);
    if (type === undefined) toast(message, data);
  };
  return (
      <>
          
      <button onClick={notify} className={style ? `${style}` : ""}>
        {title}
      </button>
    </>
  );
};

export default Toast;
