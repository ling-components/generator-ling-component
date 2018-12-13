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
        `若您还没有创建组件，请先前往 https://zjk.jd.com 注册成为开发者并创建组件获取组件 ID`
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
        message: "请输入项目文件夹名",
        default: "ling-component-demo",
        validate: answer => {
          if (typeof answer !== "string") {
            return "请输入项目文件夹名";
          }
          const nameRegx = /^[a-z|A-Z|0-9|-|_]+$/;
          if (!nameRegx.test(answer)) {
            return "文件夹名只能包含 a-z,A-Z,0-9,_,-";
          }
          return true;
        }
      },
      {
        type: "input",
        name: "componentId",
        message: "请输入组件 ID（见组件详情页面）",
        validate: answer => {
          const notString = typeof answer !== "string";
          // 组件 ID 为 24 位小写字母与数字组成的字符串
          const compIdRegx = /^[a-z|0-9]{24}$/;
          if (notString || !compIdRegx.test(answer)) {
            return "格式错误，请前往 zjk.jd.com 创建组件以获取组件 ID";
          }
          return true;
        }
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
        `项目已创建！请查看 ${chalk.bold
          .rgb(0, 0, 0)
          .bgCyan(
            " " + this.answers.name + "/readme.md "
          )} 了解项目并开始工作吧！`
      )
    );
  }
};
