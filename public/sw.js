if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,n)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=n(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-625699d3"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/css/631cbb151793c2e72c65.css",revision:"ia4xnH3xml3JFd8yIzLjS"},{url:"/_next/static/css/c8663b0e380a1613265a.css",revision:"ia4xnH3xml3JFd8yIzLjS"},{url:"/css/events.css",revision:"84320f78286c972a9c9c420c78f42d30"},{url:"/css/index.css",revision:"7e55728bde95229e072c661bede5da74"},{url:"/css/loading.css",revision:"ef72455011599b0a2b6ca7e72aa89557"},{url:"/css/projects.css",revision:"9dc1dca9a0b0e838cbf93515121e03f4"},{url:"/css/svg.css",revision:"785ad4fe0bd06fcadefc3d08cfbc3584"},{url:"/css/team.css",revision:"53c39c57625a48f61dda79f0a413f42f"},{url:"/favicon.ico",revision:"67633c4fb7ccc0eb995d2b56b4a67700"},{url:"/icons/favicons/android-chrome-192x192.png",revision:"79b9b01fb367b8fd5d82bb20575fbe19"},{url:"/icons/favicons/android-chrome-512x512.png",revision:"5d987e9dc55faf8869c262129734793e"},{url:"/icons/favicons/apple-touch-icon.png",revision:"284fd0777d18e878365db555804af4ef"},{url:"/icons/favicons/favicon-16x16.png",revision:"6de1bab62fa86cb9ed672313f0a3cced"},{url:"/icons/favicons/favicon-32x32.png",revision:"767e7ede75157ad52489e33b138de118"},{url:"/icons/favicons/favicon.ico",revision:"d2035a1da3564286883a1c0ed73f07cd"},{url:"/icons/favicons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/icons/icon-128x128.png",revision:"ecd934b2ed804f9cf6889e8a628ad0f8"},{url:"/icons/icon-144x144.png",revision:"2036b1ccea583f961bd960723645c723"},{url:"/icons/icon-152x152.png",revision:"63d4f214d1174eead4583b913faec795"},{url:"/icons/icon-192x192.png",revision:"7735c26a4d39998cd698923a0d1b5b23"},{url:"/icons/icon-512x512.png",revision:"12954a7327a9833d62e5bc43d4b2385c"},{url:"/icons/maskable_icon.png",revision:"9464f7761274406cb2bd146a420d535c"},{url:"/images/Behance.svg",revision:"e9503b7b43ebc20fafd22fc84e0591a6"},{url:"/images/DSC_JSSSTU-color.png",revision:"35fd83c428c153f3c508f61fc88301df"},{url:"/images/DSC_JSSSTU-color.webp",revision:"6878b819c3c5de13d43545065f360f7f"},{url:"/images/DSC_JSSSTU-dark.png",revision:"a1294a3baaa658823fc977e4c1a36a0c"},{url:"/images/DSC_JSSSTU-dark.webp",revision:"c7d1ecb5da798c5f7062dce7b878e37f"},{url:"/images/Facebook.svg",revision:"feeab85a3d5432fe3e017df5bcdcd866"},{url:"/images/Github.svg",revision:"8705a95ef2f72ce8485ec799257dbd55"},{url:"/images/Gmail.svg",revision:"bd1dd088d8110ac7fdf9455f2e2f5952"},{url:"/images/Instagram.svg",revision:"5b2a692249a28b7550e022414bb246f7"},{url:"/images/Linkedin.svg",revision:"e1bd772a780340afbb421dd5196cf691"},{url:"/images/Medium.svg",revision:"6beb142a82ee4d9db59834fc5f25d25b"},{url:"/images/Twitter.svg",revision:"cc0875abe0f153224012db1d4529cedb"},{url:"/images/Youtube.svg",revision:"1219c3f160c3a26646a7b178cb1a1c3c"},{url:"/images/after-landing-dark-feed.svg",revision:"d66966749b1dab02f195d2bf73a28e1b"},{url:"/images/after-landing-dark.svg",revision:"da34f7d9b6c8513cf96c03242052d92d"},{url:"/images/after-landing-feed.svg",revision:"c190a257f723366f0074b2dae78f661c"},{url:"/images/after-landing.svg",revision:"16478741211c2b684b24557cc404e697"},{url:"/images/down-arrow.svg",revision:"0d4b6a74430df4317921791eefd774b8"},{url:"/images/dsc-logo-square.svg",revision:"7015c057ef6380d502a07735305809f8"},{url:"/images/dunkathon.png",revision:"7c32b67c027013f3ea9a443045aab2f8"},{url:"/images/events/30daysGCP/poster.jpg",revision:"8f4ed61fe8d346ce19f59df5c7a0711b"},{url:"/images/events/BIOS/img1-min.jpg",revision:"aabb1b4881073ed944a08a0fe43a9c83"},{url:"/images/events/BIOS/img2-min.jpg",revision:"9911d8a8ce4fb94475a5a0e66dfb8a0a"},{url:"/images/events/BIOS/img3-min.jpg",revision:"28db7a197c7593000cbd3d6429cca1d5"},{url:"/images/events/BIOS/img4-min.jpg",revision:"959cd7a5c9c50df8a42504d5a957b738"},{url:"/images/events/BIOS/img41-min.jpg",revision:"b68269203ba3af2283dd72a626c6e695"},{url:"/images/events/BIOS/img5-min.jpg",revision:"01b6e27d5646712a6bec3623a5974f72"},{url:"/images/events/BIOS/img6-min.jpg",revision:"164dd6b537a0e1bec4299b06472c2623"},{url:"/images/events/BIOS/img8-min.jpg",revision:"435dc48030dae70ba4956b407af7d2e7"},{url:"/images/events/CloudStudy/img1-min.jpg",revision:"54abca466adba329cd519e3860e7bf69"},{url:"/images/events/CloudStudy/img2-min.jpg",revision:"b51e532a35446ae921ba8f097588a17d"},{url:"/images/events/CloudStudy/img3-min.jpg",revision:"6b4c362d117bc540067a9a49b26e9712"},{url:"/images/events/CloudStudy/img4-min.jpg",revision:"b30894dbfa5b2a2e1a0638b76ead1fbb"},{url:"/images/events/CloudStudy/img5-min.jpg",revision:"ec5167851112b0e0cb7c402407b0aeca"},{url:"/images/events/GCP/img1-min.jpg",revision:"634a44635c34db6a6439156c32bdfb2b"},{url:"/images/events/GCP/img2-min.jpg",revision:"8630be6fbe698dbeede67d21ac2ed93a"},{url:"/images/events/GCP/img3-min.jpg",revision:"faea497aad646a20a9cc0ceef9eb3cf1"},{url:"/images/events/GCP/img4-min.jpg",revision:"08a5345e51f54f6c4ada621e523b8933"},{url:"/images/events/GCP/img5-min.jpg",revision:"a66502825d84005ce0db0a6362ecbc50"},{url:"/images/events/GCP/img6-min.jpg",revision:"5aab23181a6a2fb3f9e4f4c90814c27b"},{url:"/images/events/GoogleAI/img1-min.jpg",revision:"62a2f7c72bfc9aa85f2982d8b2aab005"},{url:"/images/events/GoogleAI/img10-min.jpg",revision:"c77a04f9c2b331c9a1128c1a709d8c46"},{url:"/images/events/GoogleAI/img2-min.jpg",revision:"7d42cd38d1baf593a0f20a86cc897af2"},{url:"/images/events/GoogleAI/img3-min.jpg",revision:"6f932fa58a81fe08f01ceb716a298525"},{url:"/images/events/GoogleAI/img31-min.jpg",revision:"0125689a65c91c2540d5761981946d89"},{url:"/images/events/GoogleAI/img32-min.jpg",revision:"27bafeeb61b6375382cf1fda791861ea"},{url:"/images/events/GoogleAI/img4-min.jpg",revision:"988c12df7928285847e506b51ded8e7e"},{url:"/images/events/GoogleAI/img6-min.jpg",revision:"b06f70ccce4d85ec4d147f6290ce0e43"},{url:"/images/events/GoogleAI/img61-min.jpg",revision:"2399252edff0d97fdca3fed487c0138f"},{url:"/images/events/GoogleAI/img9-min.jpg",revision:"be6a0b019887fce637fb30bdfdc8c0d6"},{url:"/images/events/KTECH/img1-min.jpg",revision:"bc7ef6778482bfc51472f8eb7f8f877e"},{url:"/images/events/KTECH/img2-min.jpg",revision:"96716698452392d83706d4df94d7eca4"},{url:"/images/events/KTECH/img3-min.jpg",revision:"9c611d043e7e51aea53ca156bb94c416"},{url:"/images/events/KTECH/img4-min.jpg",revision:"d67d0543bebe2a0afe8fe400e3e68e65"},{url:"/images/events/KTECH/img5-min.jpg",revision:"061c8b47da276ca1faf42f7121a3744e"},{url:"/images/events/KTECH/img6-min.jpg",revision:"7f24def62e541bd7821539283bcebaeb"},{url:"/images/events/KTECH/img7-min.jpg",revision:"1f2be12de484805bb753cc4d3e71a48d"},{url:"/images/events/KtechStartup/front-min.jpg",revision:"5a9188bf6fef02349055711f503ca825"},{url:"/images/events/KtechStartup/img-min.jpg",revision:"32bc211c1ec128adfd0ca5f9544939ba"},{url:"/images/events/KtechStartup/img1-min.jpg",revision:"c46b74567888728775a5106160ef3b0f"},{url:"/images/events/KtechStartup/img10-min.jpg",revision:"e2d89a50dea5b260e956081234c272f1"},{url:"/images/events/KtechStartup/img2-min.jpg",revision:"50ce38e297d44c2473488a69c6113738"},{url:"/images/events/KtechStartup/img3-min.jpg",revision:"01af8b30de1d2ef3fde8b024be174ec8"},{url:"/images/events/KtechStartup/img4-min.jpg",revision:"78c14f5f3bf7d95f5c1d6b521f3df893"},{url:"/images/events/KtechStartup/img5-min.jpg",revision:"0d2a540dda8d1d54fb2d0a402fa76648"},{url:"/images/events/KtechStartup/img6-min.jpg",revision:"f35d6f79a550856c24675a5d9a9e0fe8"},{url:"/images/events/KtechStartup/img8-min.jpg",revision:"0967860781a18dd6470bac4b3f68ecac"},{url:"/images/events/MPTs/mpt1.jpg",revision:"472256be920e6751f8afbf716f8ed343"},{url:"/images/events/MPTs/mpt2.jpg",revision:"ac38e3eb813292af7bca535f223abb5a"},{url:"/images/events/RecruitmentSept19/img1-min.jpg",revision:"e7547043258934dc7605636bbf0ae034"},{url:"/images/events/RecruitmentSept19/img2-min.jpg",revision:"7c6f09babeedf60fbd80be715bf6bf22"},{url:"/images/events/RecruitmentSept19/img3-min.jpg",revision:"8da4e76d24f69601bbf209d59451502c"},{url:"/images/events/RecruitmentSept19/img4-min.jpg",revision:"5356caba5fcbb4a166622546697480b2"},{url:"/images/events/RecruitmentSept19/img5-min.jpg",revision:"ab12f53b4a7728b70e76e0c28b83623c"},{url:"/images/events/RecruitmentSept19/img6-min.jpg",revision:"998e7609af96a10851a726480f41868a"},{url:"/images/events/RecruitmentSept19/img7-min.jpg",revision:"9db87dbb5e982822a75f935aa7804d03"},{url:"/images/events/androidPDA/img1-min.jpg",revision:"ed251f2f3243992901dd872847b13462"},{url:"/images/events/androidPDA/img3-min.jpg",revision:"542f962583b3543cf434d25c21a6e1c6"},{url:"/images/events/androidPDA/img4-min.jpg",revision:"00002d62fe39043a567edff9adb3aa03"},{url:"/images/events/androidPDA/img51-min.jpg",revision:"50cbc6f1bab56bcf1bb79d02eacfef61"},{url:"/images/events/androidPDA/img6-min.jpg",revision:"e871fc6354e1294de26591d2e484f6ef"},{url:"/images/events/androidPDA/img7-min.jpg",revision:"6abef42b30d4042e9b1f565d5335958c"},{url:"/images/events/androidPDA/img8-min.jpg",revision:"382224817ca87db77fda6856ce09bfc6"},{url:"/images/events/androidStudyJams/snip (1).png",revision:"9777692fcd85faad4034779bc07c89ab"},{url:"/images/events/androidStudyJams/snip (2).png",revision:"5a77d54c0f30c3b33c520364a5cfc02c"},{url:"/images/events/androidStudyJams/snip (3).png",revision:"4f71fca0e5cf16e33001f4e3f394f32c"},{url:"/images/events/androidStudyJams/snip (4).png",revision:"ec54eca9a018419bf2a4d5668cc9bc53"},{url:"/images/events/dscwow/timeline.jpg",revision:"8914443869d0eadf9a3f6463355327c8"},{url:"/images/events/rec2020/poster.jpg",revision:"a601d5610032ee46d91c836da9a8bd0f"},{url:"/images/events/samvad/ep01-1.jpg",revision:"fcaad39c269567ddb0b135f7fef0eac2"},{url:"/images/events/webhooks/img1-min.jpg",revision:"fa06fcfa5c93390249d704e7b041ee5f"},{url:"/images/events/webhooks/img2-min.jpg",revision:"cc9ad31e329c29ce70514dcca21ce706"},{url:"/images/events/webhooks/img3-min.jpg",revision:"87bb726f11d7a89ba07f3be7165cd0bc"},{url:"/images/events/webhooks/img4-min.jpg",revision:"28aa0e2a99abcab180290495971535cd"},{url:"/images/events/webhooks/img5-min.jpg",revision:"22e0ef52085061a34eddb0fb8da67449"},{url:"/images/events/webhooks/img6-min.jpg",revision:"5fa5733d9ca9518dcfc968d4062a3e51"},{url:"/images/events/widsDatathon/IMG_3235.jpg",revision:"fa0b2390dd96af453eaa2d61716cd06c"},{url:"/images/events/widsDatathon/IMG_3247.jpg",revision:"0465dbe1912ab01f6e6f53a262a355b0"},{url:"/images/events/widsDatathon/IMG_3248.jpg",revision:"94e26b9ea8ac11c8525386197a185518"},{url:"/images/events/widsDatathon/IMG_3269.jpg",revision:"08f8e4d89b38ee4d67e6f732529dc942"},{url:"/images/face.jpg",revision:"b256c15428ff4f46547c4fc05bae9946"},{url:"/images/hod.jpg",revision:"b1d04307797d16cc63cf040ba7aeabd4"},{url:"/images/jssstucse.jpg",revision:"7520a498861aea4083cae5628f3f71f6"},{url:"/images/landing.svg",revision:"7aea3c779046018d895dc286f8b0a75e"},{url:"/images/menu-image.svg",revision:"ab8b786ae0d7b8a0f63b9db2863e2b21"},{url:"/images/projectReachout.jpeg",revision:"ed6aaa49f74e6796efce3cbf0c101a01"},{url:"/images/sidemenu.jpg",revision:"44810e677b800cee1d4f4b233045489e"},{url:"/images/speaker_banner.png",revision:"2c4d4785f9d81104d88dc7636a1a9029"},{url:"/images/speaker_banner.webp",revision:"0baf055f7826023cd0d27c3f10e849bb"},{url:"/images/team.svg",revision:"10d439378fd9ba17cb456fae60103d7f"},{url:"/images/team/2019/Amith Kumar.jpg",revision:"a5f223cb9a3f32171b6988c0f57b81f3"},{url:"/images/team/2019/Bbake Waikhom.jpg",revision:"bea85ab20b99204244dd98ab0ad765c5"},{url:"/images/team/2019/Binu Kumar.jpg",revision:"62d839257013abefab9e10fdcc2e7fba"},{url:"/images/team/2019/Chir - Chiranthan S.jpg",revision:"8d6b9b2d8ee78df61b48258f8606add7"},{url:"/images/team/2019/Chyavan MC.jpeg",revision:"ce6ee5ee8ca3f9c63e1da33cbf850bcd"},{url:"/images/team/2019/Nimish Aarya.jpg",revision:"bd03c6670bf8bcfda0a9d6a753590d0d"},{url:"/images/team/2019/Pranav Bedre.jpg",revision:"0ba50e468bba007038c720466b7446c0"},{url:"/images/team/2019/Rajat Shrivastava.jpg",revision:"dbc880ce20e68997736ed6b7fd55f081"},{url:"/images/team/2019/Rakshak Gowda J.jpeg",revision:"5e0fbfb3fbc9e7b701f5ffce36b64a0e"},{url:"/images/team/2019/Rishika.jpg",revision:"04cdf5b59f169b64a5637aca76b0468d"},{url:"/images/team/2019/Shashawath Vijayakumar.jpeg",revision:"31679dda31121a6aad8db99b86a8a34b"},{url:"/images/team/2019/Srivatsa MN.jpeg",revision:"5947dcb2b34798c86aee7ba245db1d91"},{url:"/images/team/2019/Vishruth.jpeg",revision:"f51f9d94dffc8bbeba7dde143f786cac"},{url:"/images/team/2019/gowtham.jpg",revision:"5c982e611deb8762b508786d681aceaf"},{url:"/images/team/2019/jnr team.jpg",revision:"57f9f9afbd7fc00d74f45c75c5a696df"},{url:"/images/team/2019/nitin bhat.jpg",revision:"3ca51005fc19753fa7dc64787442c964"},{url:"/images/team/2019/santosh.png",revision:"9129385fdd8008b42dfd1975c1dfde7c"},{url:"/images/team/2019/shiv shankar.jpg",revision:"bb1b6f9ea16413fac034cd8ea8cf9b72"},{url:"/images/team/2019/triveni.jpg",revision:"c39b7dcdeda282f5f001f3a120a1dbc9"},{url:"/images/team/2020/Aishwarya_MV_ML.jpg",revision:"bd5268147bdb69b431f70c989e4d119d"},{url:"/images/team/2020/Alaap_Tech_Advisor.jpg",revision:"9c38eb6ae094bdeb9ab51554fdfb5580"},{url:"/images/team/2020/Ankitha_Event_Coordinator.jpg",revision:"0d0fd82c4954bc0776c9c9e077bdb280"},{url:"/images/team/2020/Ezhan_OP.jpg",revision:"4b9086c8c53ffeaaebc4216707d67fbf"},{url:"/images/team/2020/Fiza_C&O.jpg",revision:"8e0663abeeb17d728cec0bda0d29090c"},{url:"/images/team/2020/Harsh_Patel_Android.jpg",revision:"3faea004899b886e9ee314f14424c58f"},{url:"/images/team/2020/Jayesh_Jain_Editorial.jpg",revision:"312dc0b552d493f4bb99082b884a990a"},{url:"/images/team/2020/Kiran_ML.jpg",revision:"4e4406c64ff6209995f21697d9063f7c"},{url:"/images/team/2020/Manju_Photography.jpg",revision:"34f4698862baa277ab7b2569aac46ca5"},{url:"/images/team/2020/Namith_Graphic_Design.jpg",revision:"2e3c6d5adc31309c2ac92f43063a2049"},{url:"/images/team/2020/Poorvi_Web.jpg",revision:"91fe15e068698e1bbd459bb6815ec03c"},{url:"/images/team/2020/Prahasith_Web_Lead.jpg",revision:"58b921476aa94f159ffebb92a5146988"},{url:"/images/team/2020/Pranav_LEAD.jpg",revision:"4f80b26a0e1c704d43d04baa96379a72"},{url:"/images/team/2020/Preethi_Event_Co.jpg",revision:"0b0466380a7dc1f6020d9bd347aeee30"},{url:"/images/team/2020/Pruthvi_Bhat_Event_Co.jpg",revision:"4476ca4083605b01c1099e7a2e86ea98"},{url:"/images/team/2020/Pruthvi_P_UI_UX_Lead.jpg",revision:"fe1dea7b644b11919a87e72f612e0647"},{url:"/images/team/2020/Puneeth_Android.jpg",revision:"c5ebd2cc6f7d989be48593773c7a78e1"},{url:"/images/team/2020/Rishika_C&O.jpg",revision:"0a5dddb4760481e62fc3209d2231fefa"},{url:"/images/team/2020/Rishitha_C&O.jpg",revision:"e87fba5af662fc3642ab66143fa44a31"},{url:"/images/team/2020/Ritu_Raj_Tech_Advisor.jpg",revision:"139fe7be8e833448cd13c969b74a0ee2"},{url:"/images/team/2020/Royina_ML.jpg",revision:"53c67211b2a5e447357f9fa666a7260e"},{url:"/images/team/2020/Sagar_Naik_Flutter.jpg",revision:"7042d50f0d0cc025143f5f366f7c696d"},{url:"/images/team/2020/Santosh_Graphic_D.jpg",revision:"33d0469439dece25de55cf595b8107b5"},{url:"/images/team/2020/Sharath_ML.jpg",revision:"d69da085d49fbfc7495be74a36acf54d"},{url:"/images/team/2020/Shreyas_Aradhya_Sponsors.jpg",revision:"cbcdcbe2958edc876562b89475a5a43d"},{url:"/images/team/2020/Sumanth_Photography.jpg",revision:"b9fadfe8d4bdc6069a5647c0a6f30a80"},{url:"/images/team/2020/Varun_Event_Co.jpg",revision:"cd77e2951bfc71f409c4835edc3aed48"},{url:"/images/team/2020/Vijeth_Execom.jpg",revision:"313871686b456787f4635419cce843b4"},{url:"/js/theme.js",revision:"f6a488dc0ec4f3a6b0e167847e4574dd"},{url:"/manifest.json",revision:"365478ae2acd22bb157eca48a89d23cb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.StaleWhileRevalidate({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
