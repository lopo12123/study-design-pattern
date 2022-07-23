class HardDisk {
    private data: string = '初始硬盘为空'

    save(data: string) {
        console.log(`使用硬盘存储了数据: ${data}`)
    }

    read() {
        console.log(`使用硬盘读取了数据: ${this.data}`)
        return this.data
    }
}

class CPU {
    run() {
        console.log(`使用 CPU`)
    }
}

class Memory {
    save() {
        console.log(`使用内存`)
    }
}

class Computer {
    private _hard_disk: HardDisk
    private _cpu: CPU
    private _memory: Memory

    constructor(hard_disk: HardDisk, cpu: CPU, memory: Memory) {
        this._hard_disk = hard_disk
        this._cpu = cpu
        this._memory = memory
    }

    run() {
        console.log(`运行计算机`)
        this._hard_disk.save('硬盘数据1')
        this._hard_disk.read()
        this._cpu.run()
        this._memory.save()
        // 运行计算机
        // 使用硬盘存储了数据: 硬盘数据1
        // 使用硬盘读取了数据: 初始硬盘为空
        // 使用 CPU
        // 使用内存
    }
}

// test
(() => {
    const hard_disk = new HardDisk()
    const cpu = new CPU()
    const memory = new Memory()

    const computer = new Computer(hard_disk, cpu, memory)
    computer.run()
})()