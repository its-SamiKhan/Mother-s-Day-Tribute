export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-xl shadow text-black">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form className="space-y-4">
        <input className="w-full border rounded px-3 py-2" type="text" placeholder="Your Name" />
        <input className="w-full border rounded px-3 py-2" type="email" placeholder="Your Email" />
        <textarea className="w-full border rounded px-3 py-2" placeholder="Your Message" />
        <button className="bg-[#6A89A7] text-white px-4 py-2 rounded" type="submit">Send</button>
      </form>
    </div>
  );
} 