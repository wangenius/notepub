import { Collection, Sheet } from "../../@types/sheet";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Accordion } from "../../@kit/Accordion";
import { sheetSlice } from "../../store/sheetSlice";
import { api } from "../../axios/collection";

export const MarkdownContext = () => {
  const { collections } = useAppSelector((state) => state.collection);
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState<Collection>();
  const nav = useNavigate();
  const params = useParams();
  const loc = useLocation();
  useLayoutEffect(() => {
    setCurrent(collections?.filter((res) => res.name === params.collection)[0]);
  }, [collections, dispatch, params]);

  useEffect(() => {
    console.log(loc.search);
    if (loc.search)
      api.sheet
        .load(`${loc.search.replace("?path=", "")}`)
        .then((res) => {
          dispatch(sheetSlice.actions.setText(res.data));
        })
        .catch((e) => {
          console.log(e);
        });
    else {
      current?.path &&
        api.sheet
          .load(`/${current.path}/index.md`)
          .then((res) => {
            dispatch(sheetSlice.actions.setText(res.data));
          })
          .catch((res) => {
            dispatch(sheetSlice.actions.setText(""));
          });
    }
  }, [current?.path, dispatch, loc]);

  const open_sheet = (item: Sheet) => {
    nav("?path=" + item.path.replaceAll("\\", "/"));
  };

  const subContent = (collection: Collection, key: number): ReactNode => {
    return (
      <Accordion key={key} label={collection.name}>
        {collection.sub?.map((item, key) => subContent(item, key))}
        {collection.sheets?.map((item, key) => (
          <li className={"list"} onClick={() => open_sheet(item)} key={key}>
            {item.name.split(".")[0]}
          </li>
        ))}
      </Accordion>
    );
  };

  const generate_slash = (collection: Collection): ReactNode => {
    return collection?.sub?.map((item, key) => {
      return (
        <ul key={key} className={"collections"}>
          <div className="section_title">{item?.name}</div>
          <div className="subcontent">
            {item.sub?.map((item, key) => subContent(item, key))}
            {item?.sheets?.map((it, keys) => (
              <li
                className={"list sheets"}
                onClick={() => open_sheet(it)}
                key={keys}
              >
                {it.name.split(".")[0]}
              </li>
            ))}
          </div>
        </ul>
      );
    });
  };
  return (
    <nav className="markdown_slide">
      <div
        className={"title"}
        onClick={() => {
          nav(`../sheet/${current?.name}`);
        }}
      >
        {current?.name}
      </div>

      {generate_slash(current!)}
    </nav>
  );
};
