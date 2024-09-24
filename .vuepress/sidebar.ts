import {SidebarConfig4Multiple} from "vuepress/config";

import javaSideBar from "./sidebars/javaSideBar";
import zongmenSideBar from "./sidebars/zongmenSideBar";
// @ts-ignore
export default {
    "/功法/JAVA/" : javaSideBar,
    "/宗门情报/" : zongmenSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
