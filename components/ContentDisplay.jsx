import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent();

  return (
    <>
      <article className="prose dark:prose-invert">
        <h1>{documentContent.title}</h1>
        <div>
          <span>Published On:{documentContent.data}</span> by{" "}
          <Link href={`/author/${documentContent}`}>
            {documentContent.author}
          </Link>{" "}
          under the{" "}
          <Link href={`/category/${documentContent.category}`}>
            {documentContent.category}
          </Link>{" "}
          Category
        </div>
      </article>
    </>
  );
};

export default ContentDisplay;
