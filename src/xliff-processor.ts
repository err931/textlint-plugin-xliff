// This file is based on textlint-plugin-markdown (Author: azu)
import type { TextlintPluginOptions } from "@textlint/types";
import { parse } from "./xliff-to-ast/parser.js";

export class XLIFFProcessor {
  config: TextlintPluginOptions;

  constructor(config = {}) {
    this.config = config;
  }

  availableExtensions() {
    return [".xlf"];
  }

  processor(_ext: string) {
    return {
      preProcess(text: string, _filePath?: string) {
        return parse(text);
      },
      postProcess(messages: string[], filePath?: string) {
        return {
          messages,
          filePath: filePath ? filePath : "<xml>",
        };
      },
    };
  }
}
