const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const os = require('os')
const si = require('systeminformation');

const sysinfoCommand = {
    name: 'sysinfo',
    description: lang.sysinfodesc,
    async run(client, message, args) {
        var osType = os.type();
        var node = os.hostname();
        var osRelease = os.release();
        var osVersion = os.version();
        var osArch = os.arch();
        var cpu = await si.cpu();
        var mem = await si.mem();
        var gpu = await si.graphics();
        var disks = await si.diskLayout();

        message.edit(`\`\`\`ini
System Information :

[OS Type] ${osType}
[Node] ${node}
[OS Release] ${osRelease}
[OS Version] ${osVersion}
[OS Arch] ${osArch}
[CPU] ${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz
[CPU Cores] ${cpu.cores}
[CPU Threads] ${cpu.physicalCores}
[CPU Cache] ${cpu.cache.l2}
[CPU Socket] ${cpu.socket}
[CPU Virtualization] ${cpu.virtualization}

[Memory] ${mem.total}GB
[Memory Used] ${mem.used}GB
[Memory Free] ${mem.free}GB
[Memory Usage] ${mem.active}GB

[GPU] ${gpu.controllers[0].model}
[GPU VRAM] ${gpu.controllers[0].vram}GB

[Disk] ${disks[0].name} ${disks[0].size}GB
[Disk Type] ${disks[0].type}
[Disk Interface] ${disks[0].interfaceType}
\`\`\``)
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(sysinfoCommand.name, sysinfoCommand);

module.exports = sysinfoCommand;
