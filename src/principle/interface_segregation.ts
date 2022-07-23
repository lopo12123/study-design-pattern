interface WaterProof {
    waterProof(): void
}

interface FireProof {
    fireProof(): void
}

interface AntiTheft {
    antiTheft(): void
}

class SafetyDoor1 implements WaterProof, FireProof, AntiTheft {
    waterProof() {
        console.log('防水')
    }

    fireProof() {
        console.log('防火')
    }

    antiTheft() {
        console.log('防盗')
    }
}

class SafetyDoor2 implements WaterProof, AntiTheft {
    waterProof() {
        console.log('防水')
    }

    antiTheft() {
        console.log('防盗')
    }
}

(() => {
    const door1 = new SafetyDoor1()
    door1.waterProof()
    door1.fireProof()
    door1.antiTheft()
    // 防水
    // 防火
    // 防盗

    const door2 = new SafetyDoor2()
    door2.waterProof()
    door2.antiTheft()
    // 防水
    // 防盗
})()