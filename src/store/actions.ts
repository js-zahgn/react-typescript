import { Url, Http } from '../UIConfig/api';

// 异步action获取数据
export const getDataList = (): any => {
  return (dispatch: any) => {
    Http.get(Url.getTotalData).then((res: any) => {
      dispatch({
        type: 'INIT_DATA_LIST',
        data: res.data.data
      });
    });
  };
};

// 也可以在组件声明周期中获取之后赋给store
export const initDataList = (initList: any) => {
  return {
    type: 'INIT_DATA_LIST',
    data: initList
  };
};
