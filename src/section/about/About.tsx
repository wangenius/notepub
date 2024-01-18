import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Step,
  Stepper,
  Typography,
} from "@material-tailwind/react";

export function About() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="aboutPage">
      <CardHeader
        floated={false}
        variant="gradient"
        color="gray"
        className="grid h-24 m-0 place-items-center"
        placeholder={undefined}
      >
        <div className="w-full px-20 pt-4 pb-8">
          <Stepper
            activeStep={activeStep}
            lineClassName="bg-white/50"
            activeLineClassName="bg-white"
            placeholder={undefined}
          >
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(0)}
              placeholder={undefined}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography
                  variant="h6"
                  color="inherit"
                  placeholder={undefined}
                >
                  HTML
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(1)}
              placeholder={undefined}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography
                  variant="h6"
                  color="inherit"
                  placeholder={undefined}
                >
                  React
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(2)}
              placeholder={undefined}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography
                  variant="h6"
                  color="inherit"
                  placeholder={undefined}
                >
                  Vue
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(3)}
              placeholder={undefined}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography
                  variant="h6"
                  color="inherit"
                  placeholder={undefined}
                >
                  Svelte
                </Typography>
              </div>
            </Step>
          </Stepper>
        </div>
      </CardHeader>
<TestimonialCard/>
    </div>
  );
}


function StarIcon() {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-yellow-700"
      >
        <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
        />
      </svg>
  );
}

export function TestimonialCard() {
  return (
      <Card placeholder={""} color="transparent" shadow={false} className="w-full max-w-[26rem]">
        <CardHeader placeholder={""}
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar placeholder={""}
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" placeholder={""} color="blue-gray">
                Tania Andrew
              </Typography>
              <div className="5 flex items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <Typography color="blue-gray" placeholder={""}>Frontend Lead @ Google</Typography>
          </div>
        </CardHeader>
        <CardBody placeholder={""} className="mb-6 p-0">
          <Typography placeholder={""}>
            &quot;I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys !!!&quot;
          </Typography>
        </CardBody>
      </Card>
  );
}