const constant = {
  imgPath:"https://www.jshengzheng.com/file/img/",
  videoPath:"https://www.jshengzheng.com/file/video/",
  nav_list: [
    {
      name: "首页",
      router:"home",
    },
    {
      name: "产品服务",
      router:"productService",
    },
    {
      name: "客户服务",
      router:"customerService",
    },
    {
      name: "客户案例",
      router:"customerCase",
    },
    {
      name: "关于我们",
      router:"aboutUs",
    },
  ],
  slogan: "衡心如初  链接未来",
  customerServiceHotline: "客服QQ ：",
  customerServiceTel: "2546125360",
  customerServiceQq: "在线客服QQ",
  groupTitle: "衡正培训服务团队 免费给您提供各类培训",
  groupMenus: [
    {
      name: "管理员培训",
      src:"group_manager.png",
    },
    {
      name: "应用培训",
      src:"group_app.png",
    },
    {
      name: "在线培训",
      src:"group_online.png",
    },
  ],
  groupGardTitle: "衡正售后服务团队 7*24贴身保障您的应用",
  groupGardDesc1: "衡正承诺：面对您反馈的任何问题，都做到快速响应，及时解决，您可以通过以下任意一种方式反馈：",
  groupGardDesc2: "添加客服QQ：2546125360，在线咨询或远程协助；",
  groupGardDesc3: "直接联系对接技术人员QQ；",
  groupGardDesc4: "直接联系对接销售人员。",
  tabelTitle: "售后服务响应时间",
  tableData: [
    {
      grade: '1级',
      desc: '影响功能正常使用的问题，如客户数据等无法加载，数据无法提交等',
      resptime: '10分钟',
      finishtime: '1小时'
    }, {
      grade: '2级',
      desc: '系统原因导致软件功能出现异常，但不影响正常的数据操作和提交',
      resptime: '10分钟',
      finishtime: '2小时'
    }, {
      grade: '3级',
      desc: '一般使用或操作性问题，如对系统操作不熟悉等常见问题',
      resptime: '及时响应',
      finishtime: '电话指导或即时远程协助解决问题'
    }, {
      grade: '4级',
      desc: '在系统使用过程中，对系统的建议或需求反馈',
      resptime: '10分钟',
      finishtime: '3天内给予答复（电话、QQ、邮件）'
    },
    {
      grade: '备注：7*24小时接收问题反馈。每次版本更新以及系统维护，会选择在夜间，尽力保障白天系统正常；回复时限内，若遇特殊情况，技术人员提供紧急的备选使用方案，经过客户同意，可按实际情况，跟客户确认具体的解决时间。',
      // desc: '在系统使用过程中，对系统的建议或需求反馈',
      // resptime: '10分钟',
      // finishtime: '3天内给予答复（电话、QQ、邮件）'
    }
  ],
  smartPlatform: "一键启用我的智慧实验室！",
  experienceNow: "立即体验",
  showCase: "案例展示",
  smartPlatform2: "你在等什么？赶紧启动你的智慧实验室吧",
  right:"© 2021-2022 江苏衡正区块链科技有限公司          保留所有版权 | 苏ICP备2021009988号-2 ",
  aggrement:"&nbsp;|&nbsp;用户协议",
  privacyPolicy:"&nbsp;|&nbsp;隐私政策",
  companyInfo:"我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼我们公司非常牛逼",
  contactUs: "联系我们",
  // 三个一组
  services: [
    ["实施培训","使用说明","演示视频"],
    ["用户协议","隐私政策"],
  ],
  address_title: "公司地址：",
  tel_title: "咨询电话：",
  qq_title: "客服QQ：",
  email_title: "公司邮箱：",
  address: "南京市江宁区菲尼克斯路70号总部基地34栋12层",
  tel: "025-86751966",
  qq: "2546125360",
  email: "jshengzheng@126.com",
  homeTitle: "衡心如初，链接未来",
  homeSubTitle: "深耕检测行业，融合科技创新，赋能实体经济",
  more: "了解更多",
  techTitle:"环测链 智慧环境检测平台",
  techSubTitle:"真正强大的环境检测工作利器",
  techDesc:"“环测链”打造了一条全流程环境监测联盟链，帮助第三方环境检测机构科学管理、提高效率、降低成本、提升信息化管理水平，充分利用区块链公开、透明、可追溯的特点，在保护检测机构数据安全的基础上，为检测机构、检测客户与监管机构提供了一个全新的数字通道。",
  techs:[
    {
      name:"严循行业法规，满足合规需求",
      icon:"hegui.svg",
      desc:"严格按照ISO/IEC17025检测和校准实验室能力的通用要求设计，符合行业管理规范、国家政策要求和机构保密需求。",
    },
    {
      name:"完善的样品追踪和任务管理",
      icon:"renwuguanli.svg",
      desc:"通过手机自带的扫码功能，对样品进行条码化及全生命周期管理，通过可视化工作台，实现对任务进度的实时跟踪。",
    },
    {
      name:"自动化工作流，减少人为错误",
      icon:"gongzuoliu.svg",
      desc:"从自动化的工作流记录管理到完整的闭环追溯，省去大量人工处理环节，提高数据处理准确性，形成一套完备的检测综合管理和质量监控体系。",
    },
    {
      name:"手机操控，随时随地",
      icon:"shouji.svg",
      desc:"手机端提供简单易用的小程序，与PC端无缝对接，突破时间和空间限制，方便您随时随地进行采样工作及样品管理。",
    },
     {
      name:"近乎零部署",
      icon:"bushu.svg",
      desc:"我们最大程度地简化了初始系统配置、机构设置，并显著降低系统维护成本。无论您是行业专家还是实验新手，都能快速上手使用。",
    },
    {
      name:"数据上链存储，利于整合互联",
      icon:"qukuailian.svg",
      desc:"运用区块链技术不可篡改，可溯源的特性，防止人为篡改，加强检测数据标准化、规范化管理，实现检测数据的有效整合与互联互通。",
    },
  ],
  homeExpTitle:"未来已来，立即改造我的检测机构！",
  homeExpSubTitle:"欢迎免费体验",
  homeExpBtn:"我要试用",
  goOffer:"快速报价",
  preview:"观看演示",
  customerCaseTitle: "已有数十家环境检测机构选择智慧环境检测平台",
  companyInfo_case_1:`1.公司主营业务首先要写的是公司的主营业务，也就是你们的商业模式，用户群体，这些都可以简写。通俗点说就是你们是什么类型什么行业的企业，在什么地方做什么产品，
              靠什么盈利，用户群体是谁，提供什么价值，可以参考一个公式：XX公司是一家在（城市例如上海）的（行业例如跨境电商）公司，主要做（什么产品），主要用户/人群/客户是XX，
              给他们提供什么价值。`,
  companyInfo_case_2:`2.公司基本情况说明公司人员情况及其任职情况，注册资金，获得哪些荣誉，取得了哪些成绩，比如公司现有几个人，分别负责什么岗位。`,
  companyInfo_case_3:`3.提供价值详细说明你们公司的商业模式，用户群体，为他们提供的价值，这里就要具体分别展开描述了，是TOB业务还是TOC业务，详细说明这些业务，怎么做的，是否有成功案例，
              效果如何，比如小程序开发，是开发小程序模板，还是做小程序裂变的工具软件，还是做小程序活动策划的企业服务等，目前主要的客户群体有哪些，准备与哪些机构合作，
              取得了哪些成果，开展了什么活动等，目前的业务解决了哪些痛点，市场调研情况，竞品情况这些都可以简要提下。`,
  companyInfo_case_4:`4.公司的价值观和发展目标说明一下公司的发展愿景，未来发展目标，喊口号，企业文化等等。、`,

  company_case_info:  {
    name: "诚挚邀请您体验我们的产品",
    infos: [
      `经过一年多时间的调研与开发，公司首款产品“环测链”SaaS平台终于正式发布。“环测链”面向全国中小微型第三方环境检测机构，贯穿环境检测全流程，通过可信数据严控检测机构流程管理，
        帮助环境检测机构科学管理、精细管理，提高效率、降低成本，提升信息化管理水平，充分利用区块链公开、透明、可追溯的特点，在保护检测机构及企业数据安全的基础上，为机构及企业深度赋能。`,
      `目前已有江苏省、安徽省的十余家第三方环境检测机构采用“环测链”平台，获得了大部分用户的高度好评，也收到了很多反馈意见和建议，我们会定期迭代产品，为客户提供更好的使用体验.`
    ]
  },

  about_us_info: {
    name: "江苏衡正区块链科技有限公司",
    infos: [
      {title: '公司简介：', content:'江苏衡正区块链科技有限公司成立于2020年8月，坐落于江苏省南京市江宁开发区。公司以区块链、物联网、大数据等新一代信息技术为基础，主要从事区块链应用开发、区块链平台运营等业务，公司聚焦于“区块链+实业”的应用场景，为客户提供区块链的细分行业应用，助力各行业降低成本、提升效率、升级模式，推动区块链技术深度赋能实体经济。'},
      {title: '公司定位：', content:'公司是以区块链、物联网、大数据等新一代信息技术为技术手段，为环境检测、数据采集等实体行业提供信息化管理平台及咨询服务的科技型企业。'},
      {title: '经营理念：', content:'打造出行业新技术与信息化运营策略相结合的创新实用产品，全心全意服务于我们的客户。'},
      {title: '公司愿景：', content:'致力成为行业首选、客户信赖的专业服务公司。'}
    ]
  },
  product_service_slide_1_name:"环测链",
  product_service_slide_1_title:"一站式全流程环境检测联盟链",
  // product_service_slide_1_subtitle:"创新平台 环境监测机构的共同选择",
  product_service_slide_2_title_1: "智能化：",
  product_service_slide_2_desc_1: "通过管理平台实施整个环境监测整体业务流程；让组织中每位成员能够智能化管理业务!",
  product_service_slide_2_title_2: "平台化：",
  product_service_slide_2_desc_2: "将线下工作集中构建统一到管理平台，7大引擎满足业务流程的整体需求，实现按需应变！",
  product_service_slide_2_title_3: "全程电子化：",
  product_service_slide_2_desc_3: "电子报价单、电子合同、电子采样记录单、电子检测报告，彻底告别纸张办公，让组织在整个运营流程完全电子化！",
  

  product_service_slide_3_title:"智能工作台",
  product_service_slide_3_desc:"动态数据概览，风险预警提示",
  product_service_slide_3_info_1:"关键信息，一览无余",
  product_service_slide_3_info_2:"功能布局，因岗而异",
  product_service_slide_3_info_3:"界面友好，贴合习惯",
  product_service_slide_3_info_4:"管理风险，预警提示",
  // product_service_slide_3_info_5:"样品管理：样品电子化管理，状态实时监控",
  // product_service_slide_3_info_6:"检样管理：数据直观，准确可靠",
  // product_service_slide_3_info_7:"报告生成：一键自动生成，个性化编辑",

  product_service_slide_4_title:"电子报价单",
  product_service_slide_4_desc:"便捷报价，快速生成全面准确的报价单",
  product_service_slide_4_info_1:"<span style='font-weight:bold;opacity:0.8;'>便捷报价：</span>快速选择检测因子及报价，自动生成报价单。",
  product_service_slide_4_info_2:"<span style='font-weight:bold;opacity:0.8;'>因子套餐：</span>常用因子组合成套餐形式，便于快速创建报价单。",
  product_service_slide_4_info_3:"<span style='font-weight:bold;opacity:0.8;'>在线审核：</span>业务员提交报价单，上级在线审核反馈。",
  // product_service_slide_4_info_4:"权限控制：员工离职收回账户，历史资料完整保留",

  product_service_slide_5_title:"电子合同",
  product_service_slide_5_desc:"自动生成合同文件，在线进行合同评审",
  product_service_slide_5_info_1:"<span style='font-weight:bold;'>电子合同：</span>合同生成、修改、审核、签署、管理全流程电子化。",
  product_service_slide_5_info_2:"<span style='font-weight:bold;'>合同评审：</span>对拟签订的合同进行在线合同评审，也可适当简化流程。",
  product_service_slide_5_info_3:"<span style='font-weight:bold;'>数据存证：</span>对签订的合同进行区块链存证，永久溯源。",

  product_service_slide_6_title:"在线调度",
  product_service_slide_6_desc:"根据任务周期与进展情况，进行灵活调度",
  product_service_slide_6_info_1:"<span style='font-weight:bold;opacity:0.8;'>分包判断：</span>判断合同是否需要分包，匹配分包机构。",
  product_service_slide_6_info_2:"<span style='font-weight:bold;opacity:0.8;'>任务监控：</span>实时显示任务状态，快速跟踪任务进度。",
  product_service_slide_6_info_3:"<span style='font-weight:bold;opacity:0.8;'>任务调度：</span>根据项目需求，灵活分配检测任务。",



  product_service_slide_7_title:"采样管理",
  product_service_slide_7_desc:"自动打印样品标签，现场手机录样，一键生成采样单",
  product_service_slide_7_info_1:"<span style='font-weight:bold;'>标签打印：</span>智能合样后，可由热敏打印机自动打印样品标签。",
  product_service_slide_7_info_2:"<span style='font-weight:bold;'>移动录样：</span>手机扫描样品标签，录入样品的详细信息。",
  product_service_slide_7_info_3:"<span style='font-weight:bold;'>现场采样单：</span>根据样品录单信息，自动生成现场采样单。",

  product_service_slide_8_title:"样品管理",
  product_service_slide_8_desc:"一件出入库，自动生成样品交接单",
  product_service_slide_8_info_1:"<span style='font-weight:bold;opacity:0.8;'>一键入库：</span>采样人员申请入库，样品管理员核对信息后，可批量出库。",
  product_service_slide_8_info_2:"<span style='font-weight:bold;opacity:0.8;'>一键出库：</span>领样人员申请出库，样品管理员核对后，可批量出库。",
  product_service_slide_8_info_3:"<span style='font-weight:bold;opacity:0.8;'>样品交接单：</span>根据样品出入库信息，自动生成样品交接单。",



  product_service_slide_9_title:"检测管理",
  product_service_slide_9_desc:"智能分配任务，在线录入并审核",
  product_service_slide_9_info_1:"<span style='font-weight:bold;'>任务分配：</span>实验室负责人在线分配检测任务。",
  product_service_slide_9_info_2:"<span style='font-weight:bold;'>检测审核：</span>在线录入检测结果，负责人在线审核。",
  product_service_slide_9_info_3:"<span style='font-weight:bold;'>检测跟踪：</span>可实时查询检测任务执行情况，提高效率。",
  // product_service_slide_9_info_4:"检测跟踪：可实时查询任务执行情况，提高效率",



  

  product_service_slide_10_title:"自动生成报告",
  product_service_slide_10_desc:"一键自动生成检测报告，大幅提升工作效率",
  product_service_slide_10_info_1:"数秒生成检测报告",
  product_service_slide_10_info_2:"支持个性化编辑",
  product_service_slide_10_info_3:"在线审核、复核、签发",
  product_service_slide_10_info_4:"服务器永久存储报告",

  // product_service_slide_11_title:"更智慧 更简易 更迅捷",
  // product_service_slide_11_desc_1:`从智慧环境监测联盟链管理平台诞生起，我们便希望它能助力环境监测机构准确决策、提升环境监测的工作效率、方便员工完成工作，
  //                                 驱动机构达到效率与自由兼顾，以高度适应未来环境监测机构的要求。`,
  // product_service_slide_11_desc_2: `智慧环境监测联盟链管理平台的推出，以更智慧的数据收集与分析能力、更强劲高效的功能连接、
  //                                 更简易操作的界面设计，让所有环境监测机构提前预演未来。`,
  // product_service_slide_11_desc_3:"未来还“未”来，你已在感受！",

  product_service_slide_11_title:"区块链",
  product_service_slide_11_desc_1:`关键信息加密上链，全程可追溯、不可篡改`,
  product_service_slide_11_desc_2: `<span style='font-weight:bold;'>数据上链：</span>关键节点数据区块链存储。`,
  product_service_slide_11_desc_3: "<span style='font-weight:bold;'>真实溯源：</span>确保上链信息不可篡改，可溯源。",
  product_service_slide_11_desc_4: "<span style='font-weight:bold;'>安全可靠：</span>链上存储的所有数据都以非对称加密的方式存储，杜绝数据非授权泄露。",
  






};

export default constant;
