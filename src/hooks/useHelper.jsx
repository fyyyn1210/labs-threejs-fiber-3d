const Helper = {
    getListProjects: ({withComponents = false} = {}) => {
        const dataList = [
            {
              path    : "threejs-challange-1",
              title  : "ThreeJS Challange 1",
              preview: "https://pbs.twimg.com/media/Ee8uL-tVoAAeg4H.jpg",
              Component: () => <>test</>,
            },
          ];
        return !!withComponents ? dataList : dataList.map(({ path, title, preview }) => ({ path, title, preview }));
    },
}
export default Helper;