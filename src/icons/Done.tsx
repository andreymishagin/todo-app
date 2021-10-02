import * as React from "react";

export function DoneIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={8} cy={8} r={8} fill="#26CD58" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82 5.332a1.154 1.154 0 011.62 1.644l-3.743 3.692a1.154 1.154 0 01-1.627-.006L4.338 8.927A1.154 1.154 0 115.97 7.296l.922.923 2.926-2.887z"
        fill="#fff"
      />
    </svg>
  );
}
