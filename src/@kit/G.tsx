import { Ref } from "../@types/main";

export namespace G {
  interface ImgProps {
    //url
    src: string;
    //alt
    alt?: string;
    //classname
    cs?: string;
    /** @description 单位px*/
    width?: number;
    height?: number;
  }

  export const img = ({ alt, ...props }: ImgProps, ref: Ref) => {
    return <img alt={alt} {...props} />;
  };
}
