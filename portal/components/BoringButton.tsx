import styles from "@/styles/Home.module.css";

const MySharedButton: React.FC = () => {
  return (
    <button onClick={() => alert("You clicked a cool shared button")}>
      Click this cool shared button
    </button>
  );
};

export default MySharedButton;
