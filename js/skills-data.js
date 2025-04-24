// 技能数据（分组+图标+官网链接）
const skills = [
    { name: 'Python', icon: 'simple-icons:python', url: 'https://www.python.org/' },
    { name: 'C/C++', icon: 'simple-icons:cplusplus', url: 'https://isocpp.org/' },
    { name: 'ASM', icon: 'mdi:chip', url: 'https://en.wikipedia.org/wiki/Assembly_language' },
    { name: 'FreeRTOS', icon: 'mdi:chip', url: 'https://www.freertos.org/' },
    { name: 'QP', icon: 'mdi:chip', url: 'https://www.state-machine.com/' },
    { name: 'LVGL', icon: 'simple-icons:lvgl', url: 'https://lvgl.io/' },
    { name: 'PyQT', icon: 'simple-icons:qt', url: 'https://riverbankcomputing.com/software/pyqt/intro' },
    { name: 'SDL', icon: 'simple-icons:slackware', url: 'https://www.libsdl.org/' },
    { name: 'Flutter', icon: 'simple-icons:flutter', url: 'https://flutter.dev/' },
    { name: 'OpenCV', icon: 'simple-icons:opencv', url: 'https://opencv.org/' },
    { name: 'TensorFlow', icon: 'simple-icons:tensorflow', url: 'https://www.tensorflow.org/' },
    { name: 'PyTorch', icon: 'simple-icons:pytorch', url: 'https://pytorch.org/' },
    { name: 'PIL', icon: 'mdi:image', url: 'https://pillow.readthedocs.io/' },
    { name: 'STM32', icon: 'simple-icons:stmicroelectronics', url: 'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html' },
    { name: 'PY32', icon: 'mdi:chip', url: 'https://www.py32.org/' },
    { name: 'CH32', icon: 'mdi:chip', url: 'https://www.wch-ic.com/products/CH32.html' },
    { name: 'Nordic', icon: 'simple-icons:nordicsemiconductor', url: 'https://www.nordicsemi.com/' },
    { name: 'BLE', icon: 'mdi:bluetooth', url: 'https://www.bluetooth.com/' },
    { name: 'ANT+', icon: 'mdi:antenna', url: 'https://www.thisisant.com/' },
    { name: 'ESP32', icon: 'simple-icons:espressif', url: 'https://www.espressif.com/en/products/socs/esp32' },
    { name: 'PHY6222', icon: 'mdi:chip', url: 'https://www.iclegend.com/en/phy6222/' }
];

if (typeof window !== "undefined") {
  window.skills = skills;
}
