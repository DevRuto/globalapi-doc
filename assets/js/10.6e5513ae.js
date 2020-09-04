(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{355:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gokz-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gokz-installation"}},[e._v("#")]),e._v(" GOKZ Installation")]),e._v(" "),o("p",[e._v("This guide assumes that you have a working CS:GO server. You must have access to the server files i.e. the "),o("code",[e._v("csgo")]),e._v(" folder. If you are setting up a local server follow this "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=U8xFwvhvxeE&",target:"_blank",rel:"noopener noreferrer"}},[e._v("video guide"),o("OutboundLink")],1),e._v(" up until the point where the server is set up. Once it comes to installing Sourcemod and Metamod "),o("strong",[e._v("only")]),e._v(" use the guide below as it is being kept up to date!")]),e._v(" "),o("h2",{attrs:{id:"getting-help"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[e._v("#")]),e._v(" Getting Help")]),e._v(" "),o("p",[e._v("If you are looking for help, "),o("strong",[e._v("please say which step you are stuck on")]),e._v(".")]),e._v(" "),o("p",[e._v("Either use our forum to ask for help or join our "),o("a",{attrs:{href:"https://discord.gg/csgokz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Server"),o("OutboundLink")],1),e._v(" and ask for assistance in the #server-support channel.")]),e._v(" "),o("p",[e._v("Try to be sure which step you are stuck on by performing the checks mentioned throughout the guide.")]),e._v(" "),o("p",[e._v("Provide as much information as you can, including the latest "),o("strong",[e._v("error logs")]),e._v(" from "),o("code",[e._v("/csgo/addons/sourcemod/logs/")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"installing-the-server-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-server-requirements"}},[e._v("#")]),e._v(" Installing the Server Requirements")]),e._v(" "),o("ol",[o("li",[e._v("Install "),o("strong",[e._v("Metamod:Source")]),e._v(" by following "),o("a",{attrs:{href:"https://wiki.alliedmods.net/Installing_Metamod:Source",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),o("OutboundLink")],1),e._v(". Make sure you are downloading the "),o("strong",[e._v("latest stable build")]),e._v(".")])]),e._v(" "),o("ul",[o("li",[e._v("You can check if Metamod is working by typing "),o("code",[e._v("meta version")]),e._v(" into the server console.")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Install "),o("strong",[e._v("SourceMod")]),e._v(" by following "),o("a",{attrs:{href:"https://wiki.alliedmods.net/Installing_SourceMod",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),o("OutboundLink")],1),e._v(". Again, make sure you are downloading the "),o("strong",[e._v("latest stable build")]),e._v(".")])]),e._v(" "),o("ul",[o("li",[e._v("You can check if SourceMod is working by typing "),o("code",[e._v("sm version")]),e._v(" into the server console.")]),e._v(" "),o("li",[e._v("If you are unfamiliar with SourceMod, refer to "),o("a",{attrs:{href:"https://wiki.alliedmods.net/Managing_your_Sourcemod_installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),o("OutboundLink")],1),e._v(" as it has plenty of useful information, and explains how to install plugins and extensions.")])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Install the "),o("strong",[e._v("DHooks extension")]),e._v(". You can get the latest builds from "),o("a",{attrs:{href:"https://forums.alliedmods.net/showpost.php?p=2588686&postcount=589",target:"_blank",rel:"noopener noreferrer"}},[e._v("this forum thread"),o("OutboundLink")],1),e._v(" Make sure to look for the BUILDS link at the bottom of the original post.")])]),e._v(" "),o("ul",[o("li",[e._v("This involves copying a "),o("code",[e._v(".so")]),e._v(" file (for Linux) or "),o("code",[e._v(".dll")]),e._v(" file (for Windows) to "),o("code",[e._v("/csgo/addons/sourcemod/extensions/")]),e._v(".")]),e._v(" "),o("li",[e._v("You can't check if this is working until later.")])]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Install the "),o("strong",[e._v("MovementAPI plugin")]),e._v(". You can get it from "),o("a",{attrs:{href:"https://github.com/danzayau/MovementAPI#plugin-installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),o("OutboundLink")],1),e._v(' (look for "Plugin Installation").')])]),e._v(" "),o("ul",[o("li",[e._v('Don\'t click "Clone or download". Read "Plugin Installation" on that page.')]),e._v(" "),o("li",[e._v("You can check if a plugin is working by typing "),o("code",[e._v("sm plugins list")]),e._v(" into the server console and seeing it listed.")])]),e._v(" "),o("h2",{attrs:{id:"installing-gokz"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-gokz"}},[e._v("#")]),e._v(" Installing GOKZ")]),e._v(" "),o("ol",[o("li",[e._v("Get the latest GOKZ release from the "),o("a",{attrs:{href:"https://bitbucket.org/kztimerglobalteam/gokz/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("downloads page"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("ul",[o("li",[e._v("Make sure to download "),o("code",[e._v("GOKZ-latest")]),e._v(" package. Do not download the upgrade package for a fresh install.")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("Copy all files from the release to the "),o("code",[e._v("/csgo/")]),e._v(" folder of your server.")])]),e._v(" "),o("li",[o("p",[e._v("Open "),o("code",[e._v("/csgo/addons/sourcemod/configs/databases.cfg")]),e._v(" in a text editor. Add a new database configuration for GOKZ. If you are unsure, you can configure a SQLite database by copying in the below before the last "),o("code",[e._v("}")]),e._v(" in "),o("code",[e._v("databases.cfg")]),e._v(".")])])]),e._v(" "),o("p",[e._v("Or simply add the following into your file above the last "),o("code",[e._v("}")]),e._v(" at the very bottom.")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gokz"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"driver"')]),e._v("    "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sqlite"')]),e._v("  \n    "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"database"')]),e._v("  "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gokz-sqlite"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("You can check if GOKZ is working by typing "),o("code",[e._v("sm plugins list")]),e._v(" into the server console and seeing it listed.")]),e._v(" "),o("p",[e._v("You can check if the DHooks extension is working correctly by typing "),o("code",[e._v("sm exts list")]),e._v(" and seeing it listed.")]),e._v(" "),o("p",[e._v("At this point, the GOKZ plugin should be working.")]),e._v(" "),o("p",[e._v("You probably want to add yourself as root admin on your server. You can do that by adding your "),o("a",{attrs:{href:"https://steamid.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SteamID"),o("OutboundLink")],1),e._v(" to  "),o("code",[e._v("/csgo/addons/sourcemod/configs/admins_simple.ini")]),e._v(" and giving yourself the "),o("code",[e._v("Z")]),e._v(" flag.")]),e._v(" "),o("h2",{attrs:{id:"install-other-recommendations-optional-but-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-other-recommendations-optional-but-recommended"}},[e._v("#")]),e._v(" Install Other Recommendations (Optional but Recommended)")]),e._v(" "),o("ol",[o("li",[e._v("Install the "),o("strong",[e._v("Cleaner extension")]),e._v(". You can get it from "),o("a",{attrs:{href:"https://github.com/e54385991/console-cleaner",target:"_blank",rel:"noopener noreferrer"}},[e._v("here."),o("OutboundLink")],1)])]),e._v(" "),o("ul",[o("li",[e._v("This prevents your server console from being spammed by "),o("code",[e._v("DatabaseTable warning")]),e._v(" messages.")]),e._v(" "),o("li",[o("strong",[e._v("NOTE")]),e._v(": If you're using Linux, in addition to the above, follow these steps to get Cleaner working:\n"),o("ul",[o("li",[e._v("Remove "),o("code",[e._v("/csgo/addons/sourcemod/extensions/cleaner.so")]),e._v(".")]),e._v(" "),o("li",[e._v("Download "),o("code",[e._v("cleaner.ext.2.csgo.so")]),e._v(" from "),o("a",{attrs:{href:"https://github.com/Accelerator74/Cleaner/tree/master/Release",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" and drop it to "),o("code",[e._v("/csgo/addons/sourcemod/extensions/")]),e._v(".")])])])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Install the "),o("strong",[e._v("Updater plugin")]),e._v(". You can get it from "),o("a",{attrs:{href:"https://forums.alliedmods.net/showthread.php?t=169095",target:"_blank",rel:"noopener noreferrer"}},[e._v("this forum thread"),o("OutboundLink")],1),e._v(". It will automatically install minor GOKZ updates.")])]),e._v(" "),o("ul",[o("li",[e._v("This requires the "),o("a",{attrs:{href:"http://users.alliedmods.net/~kyles/builds/SteamWorks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SteamWorks extension"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[e._v("You might find other plugins that you deem useful "),o("a",{attrs:{href:"https://forum.gokz.org/d/106-useful-plugins-for-kz-server-owners",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("If you want to have all global maps on your Server follow "),o("a",{attrs:{href:"https://forum.gokz.org/d/110-how-to-get-all-global-maps-on-your-kz-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("h2",{attrs:{id:"apply-for-global-whitelist-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#apply-for-global-whitelist-optional"}},[e._v("#")]),e._v(" Apply for Global Whitelist (Optional)")]),e._v(" "),o("p",[e._v("Follow "),o("a",{attrs:{href:"https://forum.gokz.org/p/guide-whitelist",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),o("OutboundLink")],1),e._v(" to get your server globally whitelisted.")])])}),[],!1,null,null,null);t.default=n.exports}}]);