# GOKZ Installation

This guide assumes that you have a working CS:GO server. You must have access to the server files i.e. the `csgo` folder. If you are setting up a local server follow this [video guide](https://www.youtube.com/watch?v=U8xFwvhvxeE&) up until the point where the server is set up. Once it comes to installing Sourcemod and Metamod **only** use the guide below as it is being kept up to date!
 
## Getting Help
 
If you are looking for help, **please say which step you are stuck on**.
 
Either use our forum to ask for help or join our [Discord Server](https://discord.gg/csgokz) and ask for assistance in the #server-support channel.
 
Try to be sure which step you are stuck on by performing the checks mentioned throughout the guide.
 
Provide as much information as you can, including the latest **error logs** from `/csgo/addons/sourcemod/logs/`.
 
## Installing the Server Requirements
 
1. Install **Metamod:Source** by following [this guide](https://wiki.alliedmods.net/Installing_Metamod:Source). Make sure you are downloading the **latest stable build**.
  - You can check if Metamod is working by typing `meta version` into the server console.
 
2. Install **SourceMod** by following [this guide](https://wiki.alliedmods.net/Installing_SourceMod). Again, make sure you are downloading the **latest stable build**.
  - You can check if SourceMod is working by typing `sm version` into the server console.
  - If you are unfamiliar with SourceMod, refer to [this page](https://wiki.alliedmods.net/Managing_your_Sourcemod_installation) as it has plenty of useful information, and explains how to install plugins and extensions.
 
3. Install the **DHooks extension**. You can get the latest builds from [this forum thread](https://forums.alliedmods.net/showpost.php?p=2588686&postcount=589) Make sure to look for the BUILDS link at the bottom of the original post.
  - This involves copying a `.so` file (for Linux) or `.dll` file (for Windows) to `/csgo/addons/sourcemod/extensions/`.
  - You can't check if this is working until later.
 
4. Install the **MovementAPI plugin**. You can get it from [this page](https://github.com/danzayau/MovementAPI#plugin-installation) (look for "Plugin Installation").
  - Don't click "Clone or download". Read "Plugin Installation" on that page.
  - You can check if a plugin is working by typing `sm plugins list` into the server console and seeing it listed.
 
## Installing GOKZ
 
1. Get the latest GOKZ release from the [downloads page](https://bitbucket.org/kztimerglobalteam/gokz/downloads/).
  - Make sure to download `GOKZ-latest` package. Do not download the upgrade package for a fresh install.
 
2. Copy all files from the release to the `/csgo/` folder of your server.
 
3. Open `/csgo/addons/sourcemod/configs/databases.cfg` in a text editor. Add a new database configuration for GOKZ. If you are unsure, you can configure a SQLite database by copying in the below before the last `}` in `databases.cfg`.
 
Or simply add the following into your file above the last `}` at the very bottom.
```json
"gokz"
{
    "driver"    "sqlite"  
    "database"  "gokz-sqlite"
}
```
 
You can check if GOKZ is working by typing `sm plugins list` into the server console and seeing it listed.
 
You can check if the DHooks extension is working correctly by typing `sm exts list` and seeing it listed.
 
At this point, the GOKZ plugin should be working.

You probably want to add yourself as root admin on your server. You can do that by adding your [SteamID](https://steamid.io/) to  `/csgo/addons/sourcemod/configs/admins_simple.ini` and giving yourself the `Z` flag.
 
## Install Other Recommendations (Optional but Recommended)
 
1. Install the **Cleaner extension**. You can get it from [here.](https://github.com/e54385991/console-cleaner) 
- This prevents your server console from being spammed by `DatabaseTable warning` messages.
- **NOTE**: If you're using Linux, in addition to the above, follow these steps to get Cleaner working:
    - Remove `/csgo/addons/sourcemod/extensions/cleaner.so`.
    - Download `cleaner.ext.2.csgo.so` from [here](https://github.com/Accelerator74/Cleaner/tree/master/Release) and drop it to `/csgo/addons/sourcemod/extensions/`.

 
2. Install the **Updater plugin**. You can get it from [this forum thread](https://forums.alliedmods.net/showthread.php?t=169095). It will automatically install minor GOKZ updates.
  - This requires the [SteamWorks extension](http://users.alliedmods.net/~kyles/builds/SteamWorks/).

 3. You might find other plugins that you deem useful [here](https://forum.gokz.org/d/106-useful-plugins-for-kz-server-owners).

 4. If you want to have all global maps on your Server follow [this tutorial](https://forum.gokz.org/d/110-how-to-get-all-global-maps-on-your-kz-server).
 
## Apply for Global Whitelist (Optional)
Follow [this tutorial](https://forum.gokz.org/p/guide-whitelist) to get your server globally whitelisted.