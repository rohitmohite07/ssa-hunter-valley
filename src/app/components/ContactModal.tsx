"use client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Contact Us</h2>

          <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            rows={4}
            placeholder="Message"
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#99B81B] py-3 font-medium text-white hover:bg-[#86a117]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
