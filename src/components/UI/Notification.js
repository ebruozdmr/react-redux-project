import classes from "./Notification.module.css";
const Notification = (props) => {
  console.log(props);
  let specialClass = "";
  if (props.status === "error") specialClass = classes.error;
  if (props.status === "success") specialClass = classes.success;

  const cssClasses = `${classes.notification} ${specialClass}`;
  console.log(cssClasses);

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
