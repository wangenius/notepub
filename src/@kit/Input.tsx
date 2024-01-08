import {forwardRef} from "react";

export const Input = forwardRef((props, ref) => {
    return (
        <div className={"input"}>
            <input />
        </div>
    );
});