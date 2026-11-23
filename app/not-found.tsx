import Link from "next/link";
import { PageFrame } from "@/components/page-frame";

export default function NotFound() {
  return (
    <PageFrame>
    <div className="sheet">
      <h1>Not found</h1>
      <p>That page is not on this site.</p>
      <p>
        <Link className="action" href="/" transitionTypes={["nav-back"]}>
          Back to the first page
        </Link>
      </p>
    </div>
    </PageFrame>
  );
}
