import * as React from "react";

export function DeleteIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.8 0L6 .8H2v1.6h.8v12c0 .874.726 1.6 1.6 1.6h8c.874 0 1.6-.726 1.6-1.6v-12h.8V.8h-4L10 0H6.8zM4.4 2.4h8v12h-8v-12zm2.166 2.634L5.434 6.166 7.27 8 5.434 9.834l1.132 1.132L8.4 9.13l1.834 1.835 1.132-1.132L9.53 8l1.835-1.834-1.132-1.132L8.4 6.87 6.566 5.034z"
        fill="#000"
      />
    </svg>
  );
}
