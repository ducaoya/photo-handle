export const config = {
  border: {
    name: "边框",
    list: [
      {
        label: "顶部",
        value: "top",
        default: "10",
      },
      {
        label: "左侧",
        value: "left",
        default: "10",
      },
      {
        label: "底部",
        value: "bottom",
        default: "20",
      },
      {
        label: "右侧",
        value: "right",
        default: "10",
      },
    ],
  },
  shadow: {
    name: "阴影",
    list: [
      {
        label: "X轴偏移",
        value: "x",
        default: "0",
        type: "range",
      },
      {
        label: "Y轴偏移",
        value: "y",
        default: "0",
        type: "range",
      },
      {
        label: "模糊半径",
        value: "blur",
        default: "0",
        type: "range",
      },
      {
        label: "阴影颜色",
        value: "color",
        default: "#ffffff",
        type: "color",
      },
    ],
  },
};

export function getInitBorder() {
  const initValue = {};
  config.border.list.forEach((item) => {
    initValue[item.value] = item.default;
  });
  return initValue;
}

export function getInitShadow() {
  const initValue = {};
  config.shadow.list.forEach((item) => {
    initValue[item.value] = item.default;
  });
  return initValue;
}
