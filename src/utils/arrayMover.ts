const DummyData: Data = {
    command: "String",
    p1: "String",
    p2: "String",
    p3: "String",
    p4: "String",
    lat: "String",
    long: "String",
    alt: "String",
    frame: "String"
}

export default function array_move(arr: Array<Data>, old_index: number, new_index: number): Array<Data> {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(DummyData);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};
