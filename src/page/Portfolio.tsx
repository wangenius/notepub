import {useLayoutEffect, useState} from "react";
import {instance} from "../axios/axios";
import {Directory} from "../@types/article";

export function Portfolio() {

    const [directory, setDirectory] = useState<Directory>();
    const [crumbs, setCrumbs] = useState<string[]>(["home", "algorithm"]);

    useLayoutEffect(() => {
        instance.get("/api/article/load").then((res) => {
            setDirectory(res.data);
        });
    }, []);

    return <div>

        {directory?.subdirectories.map((item, key) => {
            return (
                <div className={"dirBlock"} key={key}>
                    {item.name}
                </div>
            );
        })}
    </div>;
}