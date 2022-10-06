import { useRouter } from "next/router";

const ContactPage = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push("/thanks");
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          お問い合わせ内容
          <textarea></textarea>
          <input type="submit" value="送信"></input>
        </label>
      </form>
    </div>
  );
};

export default ContactPage;
