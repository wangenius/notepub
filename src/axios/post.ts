import { instance } from "./axios";

export async function getPostList() {
  try{
    const x = await instance.get("/");
    console.log(x.data)
    return x.data;
  }catch (e) {
    console.log(e)
  }
}

export async function insertPost() {
  try {
    const x = await instance.post("/insert",{username:"wan"});
    console.log(x.data)
  }
  catch (e) {
    console.log(e)
  }
}
export async function getPost() {
  try {
    const x = await instance.get("/get");
    console.log(x.data)
  }
  catch (e) {
    console.log(e)
  }
}

export async function uploadFile(files:FileList){
  try{
    await instance.post("/upload",files)
  }catch (e) {
    console.log(e)
  }
}

export async function getLs(){
  try{
   return await instance.get("/")
  }catch (e) {
    console.log(e)
  }
}

export async function deep_load_content(){
    return instance.get("/api/article/deep_load")
}

