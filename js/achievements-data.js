// 成果展示数据结构模版
/*
{
  title: "成果标题",
  description: "简要介绍成果内容",
  role: "我的职责/角色",
  technologies: ["技术1", "技术2"],
  image: "assets/your-image.jpg",
  links: [
    { name: "项目仓库", url: "https://github.com/your-repo" },
    { name: "相关文档", url: "#" }
  ]
}
*/

// 成果展示数据
const achievements = [
  // 示例
  {
    title: "SEEMEER300 智能硬件平台",
    description: "面向物联网的智能硬件平台，支持多种传感器接入与远程管理。",
    role: "嵌入式主控开发",
    technologies: ["C/C++", "STM32", "FreeRTOS"],
    image: "assets/project_sample.jpg",
    links: [
      { name: "项目仓库", url: "https://github.com/your-repo" }
    ]
  },
  {
    title: "智能家居网关系统",
    description: "实现多协议智能家居设备的统一接入与远程控制。",
    role: "系统架构设计",
    technologies: ["Python", "MQTT", "ESP32"],
    image: "assets/project1.jpg",
    links: [
      { name: "产品介绍", url: "#" }
    ]
  },
  {
    title: "工业数据采集终端",
    description: "高可靠性工业现场数据采集与上传，支持多种传感器。",
    role: "硬件与驱动开发",
    technologies: ["C", "Modbus", "STM32"],
    image: "assets/project2.jpg",
    links: [
      { name: "技术文档", url: "#" }
    ]
  },
  {
    title: "BLE健康手环",
    description: "低功耗蓝牙健康手环，支持心率、计步等功能。",
    role: "固件开发",
    technologies: ["C", "Nordic", "BLE"],
    image: "assets/project3.jpg",
    links: [
      { name: "产品页面", url: "#" }
    ]
  },
  {
    title: "智能门锁系统",
    description: "支持指纹、密码、NFC等多种开锁方式的智能门锁。",
    role: "嵌入式软件开发",
    technologies: ["C++", "FreeRTOS", "NFC"],
    image: "assets/project4.jpg",
    links: [
      { name: "项目介绍", url: "#" }
    ]
  },
  {
    title: "远程视频监控平台",
    description: "基于Web的远程视频监控与告警推送平台。",
    role: "前端开发",
    technologies: ["JavaScript", "WebRTC", "Node.js"],
    image: "assets/project5.jpg",
    links: [
      { name: "演示地址", url: "#" }
    ]
  },
  {
    title: "智能农业环境监测",
    description: "农业大棚环境数据采集与自动调控系统。",
    role: "系统集成",
    technologies: ["Python", "LoRa", "Raspberry Pi"],
    image: "assets/project6.jpg",
    links: [
      { name: "项目文档", url: "#" }
    ]
  },
  {
    title: "AI图像识别终端",
    description: "边缘AI终端，支持本地图像识别与分类。",
    role: "算法移植",
    technologies: ["TensorFlow", "OpenCV", "C++"],
    image: "assets/project7.jpg",
    links: [
      { name: "算法说明", url: "#" }
    ]
  },
  {
    title: "多协议无线通信模块",
    description: "支持BLE、WiFi、Zigbee等多种协议的无线通信模块。",
    role: "协议栈开发",
    technologies: ["C", "BLE", "Zigbee", "WiFi"],
    image: "assets/project8.jpg",
    links: [
      { name: "产品手册", url: "#" }
    ]
  },
  {
    title: "智能语音助手硬件",
    description: "集成语音识别与控制的智能硬件终端。",
    role: "嵌入式AI开发",
    technologies: ["Python", "ESP32", "TensorFlow Lite"],
    image: "assets/project9.jpg",
    links: [
      { name: "产品介绍", url: "#" }
    ]
  },
  {
    title: "工业机器人控制器",
    description: "高精度多轴工业机器人运动控制系统。",
    role: "运动控制算法",
    technologies: ["C++", "QP", "STM32"],
    image: "assets/project10.jpg",
    links: [
      { name: "技术文档", url: "#" }
    ]
  },
  {
    title: "智能物流跟踪标签",
    description: "低功耗物流跟踪标签，支持GPS与NB-IoT。",
    role: "硬件设计",
    technologies: ["C", "NB-IoT", "GPS"],
    image: "assets/project11.jpg",
    links: [
      { name: "产品页面", url: "#" }
    ]
  },
  {
    title: "智能电表远程抄表",
    description: "远程自动抄表与数据分析平台。",
    role: "后端开发",
    technologies: ["Python", "Django", "MySQL"],
    image: "assets/project12.jpg",
    links: [
      { name: "平台演示", url: "#" }
    ]
  },
  {
    title: "智能健身教练系统",
    description: "基于AI的健身动作识别与指导系统。",
    role: "AI模型训练",
    technologies: ["PyTorch", "OpenCV", "Python"],
    image: "assets/project13.jpg",
    links: [
      { name: "项目介绍", url: "#" }
    ]
  },
  {
    title: "智能水质监测终端",
    description: "水质多参数实时监测与云端分析。",
    role: "嵌入式开发",
    technologies: ["C", "STM32", "4G模块"],
    image: "assets/project14.jpg",
    links: [
      { name: "产品手册", url: "#" }
    ]
  },
  {
    title: "智能仓储管理平台",
    description: "仓储物资智能盘点与环境监控平台。",
    role: "全栈开发",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    image: "assets/project15.jpg",
    links: [
      { name: "平台演示", url: "#" }
    ]
  },
  {
    title: "智能交通信号控制器",
    description: "自适应交通信号灯控制系统。",
    role: "算法设计",
    technologies: ["C++", "FreeRTOS", "STM32"],
    image: "assets/project16.jpg",
    links: [
      { name: "项目文档", url: "#" }
    ]
  },
  {
    title: "智能电池管理系统BMS",
    description: "锂电池组智能管理与保护系统。",
    role: "嵌入式开发",
    technologies: ["C", "CAN总线", "STM32"],
    image: "assets/project17.jpg",
    links: [
      { name: "产品介绍", url: "#" }
    ]
  },
  {
    title: "智能气象站",
    description: "多参数气象数据采集与远程监控。",
    role: "硬件与软件集成",
    technologies: ["Python", "ESP32", "MQTT"],
    image: "assets/project18.jpg",
    links: [
      { name: "项目介绍", url: "#" }
    ]
  },
  {
    title: "智能医疗监护仪",
    description: "多参数生命体征监测与数据分析。",
    role: "嵌入式算法开发",
    technologies: ["C++", "FreeRTOS", "LVGL"],
    image: "assets/project19.jpg",
    links: [
      { name: "产品手册", url: "#" }
    ]
  }
];

// 导出到全局
if (typeof window !== "undefined") {
  window.achievements = achievements;
}
