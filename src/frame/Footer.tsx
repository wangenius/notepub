import { Typography } from "@material-tailwind/react";
import { Icons } from "../@kit/Icon";

const LINKS = [
  {
    title: "Collections",
    items: ["Rust", "Computer Sciences", "Typescript", "Mathematics"],
  },
  {
    title: "Opus",
    items: ["Seeader", "Rhinoceros plugins", "Rust Server", "NCM player"],
  },
  {
    title: "Support",
    items: ["Contact", "Events", "Feedback","Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div>
            <Typography variant="h3" className="mb-1" placeholder={""}>
              Pamphlet
            </Typography>
            <Typography variant="small" className="mb-6" placeholder={""}>
              WANGENIUS's Repository of Knowledge and Projects.
            </Typography>
          </div>

          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3"
                  placeholder={""}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      variant={"small"}
                      className="py-1.5 font-normal transition-colors hover:underline"
                      placeholder={""}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            placeholder={""}
          >
            &copy; {currentYear}{" "}
            <a href="https://wangenius.com/">wangenius.com</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <div className={"icons_part"}>
              <Icons.Weibo />
              <Icons.Bilibili />
              <Icons.Github />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
