import { useLayoutEffect } from "react";
import Product from "./Product";

export function PortfolioPage() {
  useLayoutEffect(() => {}, []);

  return (
    <div className={"portfolioPage"}>
      <Product />
    </div>
  );
}
