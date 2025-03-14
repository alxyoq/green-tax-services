import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-24 mt-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
      <p className="text-lg mb-8">
        We couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="flex justify-center">
        <a
          href="/"
          className="btn-primary px-6 py-3 rounded-md font-medium"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
