import * as React from "react";

export function EditIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M12.98 0a.84.84 0 00-.595.247l-10.7 10.7s.846.005 1.262.421c.417.417.408 1.25.408 1.25s.858.016 1.277.435c.418.418.42 1.263.42 1.263l10.701-10.7a.841.841 0 000-1.192L13.576.247A.84.84 0 0012.98 0zm0 2.033l.987.987-.883.883-.987-.987.883-.883zm-2.074 2.074l.987.987-6.452 6.452a3.154 3.154 0 00-.653-.339 3.119 3.119 0 00-.334-.648l6.452-6.452zM.564 12.632L0 16l3.368-.564-2.804-2.804z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
