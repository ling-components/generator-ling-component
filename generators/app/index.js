"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const path = require("path");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
  async prompting() {
    this.log(chalk.white(`欢迎使用玲珑组件库组件项目生成器！`));
    this.log(
      chalk.gray(
        `若您还没有创建组件，请先前往 https://zjk.jd.com 注册成为开发者并创建组件获取组件 ID\n生成的组件项目使用 Taro 以做到多终端运行，需要了解 Taro 请访问 https://taro.js.org/ 。\n若还没有安装 taro-cli 请稍后执行\n  npm install -g @tarojs/cli@1.1.0\n以全局安装 taro-cli 1.1.0 版本\n`
      )
    );
    this.log(
      chalk.bgRed(
        "！！注意！！请使用 1.1.0 版本的 taro-cli 且不要升级依赖，否则项目无法正常编译。\n"
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "请输入项目名（仅用于生成项目文件夹）",
        default: "ling-component-demo",
        validate: answer => answer !== ""
      },
      {
        type: "input",
        name: "description",
        message: "请输入项目简介",
        default: ""
      },
      {
        type: "input",
        name: "componentId",
        message: "请输入组件 ID",
        validate: answer => answer !== ""
      }
    ];

    this.answers = await this.prompt(prompts);
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.answers.name) {
      this.log(`自动创建 ${this.answers.name} 文件夹`);
      mkdirp(this.answers.name);
      this.destinationRoot(this.destinationPath(this.answers.name));
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(""),
      this.answers,
      null,
      { globOptions: { dot: true } }
    );
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.log(
      chalk.cyan(
        `完成！请查看 ${this.answers.name}/readme.md 了解项目并开始工作吧！`
      )
    );
  }
};
