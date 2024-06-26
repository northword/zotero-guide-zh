import { footnote } from "@mdit/plugin-footnote";
import { mark } from "@mdit/plugin-mark";
import type { UserConfig } from "vitepress";

export const markdown: UserConfig["markdown"] = {
  container: {
    tipLabel: "提示",
    warningLabel: "警告",
    dangerLabel: "危险",
    cautionLabel: "危险",
    infoLabel: "信息",
    noteLabel: "注",
    detailsLabel: "详细信息",
  },
  image: {
    lazyLoading: true,
  },
  config: (md) => {
    md.use(footnote);
    md.use(mark);
  },
};
