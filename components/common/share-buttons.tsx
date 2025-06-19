import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

interface ShareButtonsProps {
  title?: string;
  url: string;
}

const ShareButtons = ({ title = "", url }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="fixed right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center space-y-4 sm:left-4 sm:right-auto">
      <p className="mb-2 rounded-lg bg-white px-2 py-1 text-sm text-foreground/60">
        Share
      </p>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
      >
        <Facebook size={18} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500 transition-colors hover:bg-sky-500 hover:text-white"
      >
        <Twitter size={18} />
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
      >
        <Linkedin size={18} />
      </a>

      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors hover:bg-green-600 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M16.003 2.667c-7.348 0-13.333 5.986-13.333 13.333 0 2.354.621 4.63 1.8 6.634l-1.888 6.916 7.091-1.856a13.28 13.28 0 0 0 6.33 1.606h.001c7.348 0 13.333-5.986 13.333-13.333s-5.986-13.333-13.333-13.333zm0 24a11.22 11.22 0 0 1-5.691-1.553l-.407-.236-4.207 1.101 1.124-4.093-.264-.42a11.283 11.283 0 1 1 9.445 5.201zm6.178-8.381c-.338-.169-2.004-.989-2.315-1.101-.311-.113-.537-.169-.763.17s-.875 1.101-1.073 1.326c-.198.226-.396.254-.733.085-.338-.17-1.428-.525-2.72-1.673-1.005-.895-1.683-2.004-1.881-2.342-.198-.34-.021-.523.148-.692.152-.152.339-.396.508-.594.169-.198.226-.34.339-.566.113-.226.056-.425-.028-.594-.084-.17-.763-1.837-1.047-2.518-.276-.664-.56-.573-.763-.582l-.648-.012a1.246 1.246 0 0 0-.905.424c-.31.34-1.18 1.15-1.18 2.805s1.208 3.26 1.377 3.486c.169.226 2.375 3.627 5.755 5.084.805.347 1.434.554 1.923.709.808.258 1.543.222 2.125.135.648-.096 2.004-.818 2.287-1.608.282-.79.282-1.47.198-1.608-.084-.141-.31-.226-.648-.396z" />
        </svg>
      </a>
    </div>
  );
};

export default ShareButtons;
