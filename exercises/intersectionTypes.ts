interface Interface3 {
    prop1: number;
}

interface Interface4 {
    prop2: number;
}

type InterfaceMix2 = Interface3 & Interface4;

const interfaceMix2: InterfaceMix2 = {
    prop1: 10,
    prop2: 6
}