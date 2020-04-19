// Union types are used when you want that a type could has more than one type value
type SumParameter = string | number;
type SumReturnType = number | string;

function Sum(num1:SumParameter, num2: SumParameter): SumReturnType {
    return Number(num1) + Number(num2);
}

function Sum2(num1:SumParameter, num2: SumParameter): SumReturnType {
    return String(num1) + num2;
}

//---------------------------------

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2;

const interfaceMix: InterfaceMix = {
    prop2: 2,
    prop1: 1
}

