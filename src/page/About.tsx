import { Button } from "../@kit/Button";
import { deep_load_content } from "../axios/post";

export const About = () => {
  return (
    <div>
      <Button
        click={() => {
          deep_load_content().then(res=>{
              console.log(res?.data)
          })
        }}
      >
        deep load
      </Button>
    </div>
  );
};
