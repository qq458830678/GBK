import request from "./AxiosExample";

export function ReqCategoryList() {
  return request.get("/product/getBaseCategoryList");
}
