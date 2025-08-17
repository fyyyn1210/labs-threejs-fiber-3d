import Basic3D from "../pages/Basic3D";

const Helper = {
  getListProjects: ({ withComponents = false } = {}) => {
    const dataList = [
      {
        path     : "threejs-challange-1",
        title    : "Level Basic — ThreeJS Challange 1",
        preview  : "thumbnails/1.png",
        Component: Basic3D,
      },
    ];
    return !!withComponents
      ? dataList
      :  dataList.map(({ path, title, preview }) => ({ path, title, preview }));
  },
};
export default Helper;
