import {Button} from "../@kit/Button";
import {getLs} from "../axios/post";
import {logDOM} from "@testing-library/react";

export const Discover = () => {

  return <div className={"discover"}>

    <div className="slidePanel">

    </div>
    <div className="mainPanel">
      <Button click={()=>{
        getLs().then((res)=>{
          console.log(res)
        })
      }}>获取目录</Button>
    </div>

  </div>;
};
